const axios = require('axios');

function GitHubAPI(userToken) {
    const client = axios.create({
        baseURL: 'https://api.github.com',
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: 'application/vnd.github+json',
        }
    });

    async function getUserProfile(username) {
        try{
            const res = await client.get(`/users/${username}`);
            return res.data;
        } catch (error) {
            console.error('Error fetching user profile: ',error.message);
        }
    }

    async function getUserRepos(username) {
        try {
            const res = await client.get(`/users/${username}/repos`);
            return res.data;
        } catch (error) {
            console.error("Error fetching repos: ",error.message);
        }
    }

    async function searchRepositories(query) {
        try{
            const res = await client.get(`/search/repositories?q=${encodeURIComponent(query)}`);
            return res.data;
        } catch (error) {
            console.error("Error searching repos: ",error.message);
        }
    }

    async function gerRepoIssues(owner, repo, state = 'open') {
        try{
            const res = await client.get(`/repos/${owner}/${repo}/issues?state=${state}`);
            return res.data;
        } catch (error) {
            console.error("Error getting issues: ",error.message);
        }
    }

    async function createRepository(data,token) {
        try{
            const res = await client.post('/user/repos',data,{
                headers: {Authorization: `token ${token}` }
            });
            return res.data;
        } catch (error) {
            console.error("Error creating repository: ",error.message);
        }
    }

    async function getUserStarredRepos(username) {
        try{
            const res = await client.get(`/users/${username}/starred`);
            return res.data;
        } catch (error) {
            console.error("Error getting starred repos: ",error.message);
        }
    }
    return {
        getUserProfile,
        getUserRepos
    };
}

module.exports = GitHubAPI;