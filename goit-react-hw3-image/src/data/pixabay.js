import axios from 'axios';

export const API_KEY = '43611533-cbd3c8679d2736af7125873fa';
// export const API_KEY = '49388136-9f751aa21f3e05b0dcab99e36';
export const BASE_URL = 'https://pixabay.com/api/';

// export const searchQuery = () => {
//   const result = `${BASE_URL}`;
// };
export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);
  return response.data;
};
