const baseURL = 'http://localhost:5000/api/tips';
const clientURL = 'http://localhost:5000/api/favourites';

const tipsAndTricksService = {
    getTipsAndTricks() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    getClientFavs() {
        return fetch(clientURL)
        .then(res => res.json());
    }
}

export default tipsAndTricksService;
