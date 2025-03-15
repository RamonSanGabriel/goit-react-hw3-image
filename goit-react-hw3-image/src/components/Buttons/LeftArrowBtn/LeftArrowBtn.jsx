import { FaAngleLeft } from 'react-icons/fa6';
import MenuModal from '../../Modal/MenuModal/MenuModal';

const LeftArrowBtn = ({ onClick }) => {
  return (
    <>
      <FaAngleLeft onClick={onClick} style={{ zIndex: '600' }} />
      <MenuModal />
    </>
  );
};

export default LeftArrowBtn;
