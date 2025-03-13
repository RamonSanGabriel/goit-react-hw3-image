// import { FaRegCaretSquareDown } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
import './Menu.css';
import { useState } from 'react';
import MenuModal from '../Modal/MenuModal/MenuModal';

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return openModal ? (
    <MenuModal onClose={handleCloseModal} />
  ) : (
    <div className="menu-wrapper">
      <FaAngleLeft className="menu-icon" onClick={handleOpenModal} />
    </div>
  );
};

export default Menu;
