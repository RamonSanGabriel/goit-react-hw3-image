import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Menu from './components/Menu/Menu';
import { useEffect, useState } from 'react';
import { getAPI } from './data/pixabay';

const URL = `https://pixabay.com/api/?key=43611533-cbd3c8679d2736af7125873fa&q=yellow+flowers&image_type=photo`;

function App() {
  const [searchInput, setSearchInput] = useState('');

  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    (async () => {
      await fetchImages(searchInput, page);
    })();
    return () => {};
  }, [searchInput, page]);

  const fetchImages = async (searchInput, page) => {
    try {
      setLoading(true);
      const fetchedImages = await getAPI(searchInput, page);

      if (searchInput === '') return;

      if (fetchedImages.hits.length === 0) {
        setEnd(true);
        return;
      }
      setImages([...images, ...fetchedImages.hits]);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchInput(searchInput);
    const newSearch = e.target.search.value.trim().toLowerCase();

    if (newSearch !== searchInput) {
      // setSearchInput({ searchInput: newSearch, page: 1, images: [] });
      setSearchInput(newSearch);
      setPage(1);
      setImages([]);
    }
    console.log(newSearch);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <Menu />
      {/* <MenuModal /> */}
      {/* Gallery */}
      <ImageGallery photos={images} />
    </>
  );
}

export default App;
