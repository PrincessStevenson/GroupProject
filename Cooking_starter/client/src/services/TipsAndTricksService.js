const baseURL = 'http://localhost:5000/api/tips';

const tipsAndTricksService = {
    getTipsAndTricks() {
        return fetch(baseURL)
        .then(res => res.json());
    }
}

export default tipsAndTricksService;
