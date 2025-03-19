import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Menu from './components/Menu/Menu';
import { useEffect, useState } from 'react';
import { getAPI } from './data/pixabay';
import LoadMore from './components/Buttons/LoadMore/LoadMore';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from './components/Modal/ImageModal/ImageModal';

const URL = `https://pixabay.com/api/?key=43611533-cbd3c8679d2736af7125873fa&q=yellow+flowers&image_type=photo`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [end, setEnd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        setLoading(loading);
        toast.error('Search not found. Please try again!');
        return;
      }
      if (page === 1) {
        toast.success(`You found ${fetchedImages.totalHits} images!`);
      }
      if (page * 12 >= fetchedImages.totalHits) {
        setEnd(true);
        toast('You reached the end of search results.', {
          icon: '👋',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
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
    const newSearch = e.target.search.value.trim().toLowerCase();

    if (newSearch !== searchInput) {
      setSearchInput(newSearch);
      setPage(1);
      setImages([]);
      setEnd(false);
    }
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (id) => {
    setModalOpen(true);
    setCurrentIndex(id);
    const selectedImage = images[id].largeImageURL; // Correctly set the large image URL
    setLargeImage(selectedImage);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Searchbar onSubmit={handleSearch} />
      <Menu />
      <ImageGallery photos={images} onClick={handleOpenModal} />
      {images.length >= 2 && !end && <LoadMore onClick={handleClick} />}
      {modalOpen && (
        <ImageModal
          onClick={handleCloseModal}
          currentIndex={currentIndex}
          selectLargeImage={largeImage} // Pass the correct large image URL
        />
      )}
    </>
  );
}

export default App;
