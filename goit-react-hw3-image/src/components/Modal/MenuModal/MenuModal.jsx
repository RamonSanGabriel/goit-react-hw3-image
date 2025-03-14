import { navbar } from '../../../data/navbar';
import './MenuModal.css';

const MenuModal = ({ onClose }) => {
  return (
    <div className="overlay">
      {/* <div className="close-button container"> */}
      <button className="close-button" onClick={onClose}>
        &times;
        {/* <p>close</p> */}
      </button>
      {/* </div> */}
      <div className="menu-modal">
        <div className="nav-links">
          <ul className="nav-list">
            {navbar.map(({ id, name, link }) => (
              <div className="container nav-list-items" key={id}>
                <li>{name}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
