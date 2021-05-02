import axios from "axios";

const API_URL = "https://pixabay.com/api/";
const API_KEY = "16179080-6599fc842f7e33d545529d730";

const getImage = (searchQuery, page) => {
    return axios.get(`${API_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`).then((response) => response.data.hits)
};

export default { getImage };

