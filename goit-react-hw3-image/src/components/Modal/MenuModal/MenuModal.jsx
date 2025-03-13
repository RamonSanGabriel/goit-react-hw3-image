import { navbar } from '../../../data/navbar';
import './MenuModal.css';

const MenuModal = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="menu-modal">
        <button className="close-modal" onClick={onClose}>
          &times;
          <p>close</p>
        </button>
        <div className="nav-links">
          <ul className="nav-list">
            {navbar.map(({ id, name, link }) => (
              <div className="nav-list-items">
                <li key={id}>{name}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
