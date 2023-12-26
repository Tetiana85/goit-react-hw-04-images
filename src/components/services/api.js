import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImages = async (query, page) => {
  const params = new URLSearchParams({
    key: '40490498-6cd0521e1942b4167d883a306',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);
  return await response.data;
};
