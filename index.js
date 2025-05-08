require('dotenv').config();
const GitHubAPI = require('./github');

const client = GitHubAPI(process.env.GITHUB_API_KEY);

async function run() {
    const profile = await client.getUserProfile('octocat');
    console.log('Profile: ',profile);

    const repos = await client.getUserRepos('octocat');
    console.log('Repos: ', repos.map(r => r.name));
}

run();