import axios from 'axios';

export const API_KEY = '43611533-cbd3c8679d2736af7125873fa';
export const BASE_URL = 'https://pixabay.com/api/';

// export const searchQuery = () => {
//   const result = `${BASE_URL}`;
// };
export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);
  return response.data;
};
