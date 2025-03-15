import { FaAngleDown } from 'react-icons/fa6';

const DownArrowBtn = ({ onClick, onChange }) => {
  return (
    <button className="down-arrow btn" onClick={onClick}>
      <FaAngleDown />
    </button>
  );
};

export default DownArrowBtn;
