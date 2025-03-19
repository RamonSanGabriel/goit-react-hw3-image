import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Menu from './components/Menu/Menu';
import { useEffect, useState } from 'react';
import { getAPI } from './data/pixabay';
import LoadMore from './components/Buttons/LoadMore/LoadMore';
import toast, { Toaster } from 'react-hot-toast';
// import ImageModal from './components/Modal/ImageModal/ImageModal';

const URL = `https://pixabay.com/api/?key=43611533-cbd3c8679d2736af7125873fa&q=yellow+flowers&image_type=photo`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [end, setEnd] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalClose, setModalClose] = useState(true);

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
    /* Error message if search is not found */
    /* Message at the end of search */
    /* Message if search found */
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
      setEnd(!end);
    }
    // console.log(newSearch);
  };
  const handleClick = () => {
    // console.log('click');
    setPage(page + 1);
  };
  const handleClickImage = (id) => {
    // console.log('large image');
    const selectedImage = images[0].largeImageURL;
    // console.log(largeImage);
    // setLargeImage(largeImage);
    console.log(selectedImage);
  };
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Searchbar onSubmit={handleSearch} />
      <Menu />
      {/* <MenuModal /> */}
      {/* Gallery */}
      <ImageGallery
        photos={images}
        onClick={handleClickImage}
        modalIsOpen={handleOpenModal}
      />
      {images.length >= 2 && !end && <LoadMore onClick={handleClick} />}
      {/* <ImageModal /> */}
    </>
  );
}

export default App;
