import { FaAngleDown } from 'react-icons/fa6';

const DownArrowBtn = ({ onClick, onChange }) => {
  return (
    <>
      <FaAngleDown onClick={onClick} />
    </>
  );
};

export default DownArrowBtn;
