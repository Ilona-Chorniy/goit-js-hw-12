import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50322129-1fa2d79651afdc56a0de6c955';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
