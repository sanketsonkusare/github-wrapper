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

    return {
        getUserProfile,
        getUserRepos
    };
}

module.exports = GitHubAPI;