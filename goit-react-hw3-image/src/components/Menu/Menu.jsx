import './Menu.css';
import { useState } from 'react';
import MenuModal from '../Modal/MenuModal/MenuModal';
import ImageGallery from '../ImageGallery/ImageGallery';
import DownArrowBtn from '../Buttons/DownArrowBtn/DownArrowBtn';
import LeftArrowBtn from '../Buttons/LeftArrowBtn/LeftArrowBtn';

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleHideArrowDown = () => {
    const hideDownArrow = (style = { display: 'none' });
  };

  return (
    <div className="menu-wrapper">
      {openModal ? (
        <LeftArrowBtn onClick={handleCloseModal} />
      ) : openModal ? (
        <MenuModal />
      ) : (
        <DownArrowBtn onClick={handleOpenModal} />
      )}
    </div>
  );
};
export default Menu;
