import './App.css';
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Menu from './components/Menu/Menu';
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <Header />
      <Menu />
      {/* <MenuModal /> */}
      {/* Gallery */}
      <ImageGallery />
    </>
  );
}

export default App;
