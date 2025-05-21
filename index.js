require('dotenv').config();
const GitHubAPI = require('./github');

const client = GitHubAPI(process.env.GITHUB_API_KEY);

async function run() {
    const pulls = await client.getPullRequests('octocat','boysenberry-repo-1');
    console.log(pulls);
}

run();