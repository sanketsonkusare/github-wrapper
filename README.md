# GitHub API Wrapper 🔧

A lightweight and easy-to-use Node.js wrapper for the GitHub REST API v3. This wrapper simplifies interactions with various GitHub resources such as users, repositories, issues, pull requests, and more.

---

## 🚀 Features

- ✅ Fetch GitHub user profiles and repositories  
- 🔍 Search for public repositories  
- 🐛 List repository issues, forks, pull requests, commits, collaborators  
- ⭐ Get starred repos and organization info  
- ⚙️ Built with Axios and Promises  

---

## 📦 Installation

### Install from npm:

```bash
npm install @sassysanket/github-wrapper
```

### Clone the repo for local development:

```bash
git clone https://github.com/sanketsonkusare/github-api-wrapper.git
cd github-api-wrapper
npm install
```

---

## 🛠️ Usage
### 1. Create a .env file in your root directory and add your GitHub API token:

```env
GITHUB_API_KEY=your_github_personal_access_token
```

### 2. Basic Example

```js
require('dotenv').config();
const GitHubAPI = require('./github'); // or 'github-api-wrapper' if installed from npm

const client = GitHubAPI(process.env.GITHUB_API_KEY);

async function run() {
    const profile = await client.getUserProfile('octocat');
    console.log(profile);
}

run();
```

---

## 📚 API Methods

All methods return a Promise.

### 🔍 User Methods
```js
client.getUserProfile(username)
// Returns user profile details

client.getUserRepos(username)
// Returns list of public repos

client.getUserStarredRepos(username)
// Returns repos starred by user

client.getUserOrgs(username)
// Returns organizations the user belongs to
```

## 📦 Repository Methods
```js
client.searchRepositories(query)
// Searches public repositories based on a keyword

client.getRepoIssues(owner, repo, state = 'open')
// Returns list of issues in a repository

client.getRepoForks(owner, repo)
// Lists forks of a repository

client.getPullRequests(owner, repo, state = 'open')
// Fetches pull requests of a repository

client.getRepoCommits(owner, repo, params = {})
// Lists commit authors (login) for a repo

client.getRepoCollabs(owner, repo, token)
// Lists collaborators (requires repo access token)
```

---

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Sanket Sonkusare

🎓 MTech Student | 💻 MERN Stack Developer | 🤖 AI & ML Enthusiast

## 📬 Contributing
Pull requests are welcome! If you find a bug or want to add a feature, feel free to:

- 🐞 Open an issue

- ✅ Submit a pull request

- ⭐ Star the repo if you find it helpful!