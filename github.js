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

    async function getRepoIssues(owner, repo, state = 'open') {
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

    async function getRepoForks(owner, repo) {
        try{
            const res = await client.get(`/repos/${owner}/${repo}/forks`);
            return res.data;
        } catch (error) {
            console.error("Error getting repo forks: ",error.message);
        }
    }

    async function getRepoCollabs(owner, repo, token) {
        try{
            const res = await client.get(`/repos/${owner}/${repo}/collaborators`, {
                headers: {Authorization: `token ${token}`}
            });
            return res.data;
        } catch (error){
            console.error("Error getting repo collaborators: ",error.message);
        }
    }

    async function getRepoCommits(owner, repo, params = {}) {
        try{
            const res = await client.get(`/repos/${owner}/${repo}/commits`, {params});
            return res.data;
        } catch (error) {
            console.error("Error getting repo commits: ",error.message);
        }
    }

    async function getUserOrgs(username){
        try{
            const res = await client.get(`/users/${username}/orgs`);
            return res.data;
        } catch (error) {
            console.error("Error getting user's organisation: ",error.message);
        }
    }

    async function getPullRequests(owner, repo, state='open'){
        try{
            const res = await client.get(`/repos/${owner}/${repo}/pulls?state=${state}`);
            return res.data;
        } catch (error) {
            console.error("Error getting pull requests: ",error.message);
        }
    }
    return {
        getUserProfile,
        getUserRepos,
        searchRepositories,
        getRepoIssues,
        createRepository,
        getUserStarredRepos,
        getRepoForks,
        getRepoCollabs,
        getRepoCommits,
        getUserOrgs,
        getPullRequests
    };
}

module.exports = GitHubAPI;