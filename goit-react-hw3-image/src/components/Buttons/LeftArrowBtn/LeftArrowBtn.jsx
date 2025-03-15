import { FaAngleLeft } from 'react-icons/fa6';
import MenuModal from '../../Modal/MenuModal/MenuModal';
import './LeftArrowBtn.css';

const LeftArrowBtn = ({ onClick }) => {
  return (
    <>
      <div className="left-arrow container">
        <button className="left-arrow btn" onClick={onClick}>
          <FaAngleLeft className="left-arrow icon" />
        </button>
        <MenuModal />
      </div>
    </>
  );
};

export default LeftArrowBtn;
