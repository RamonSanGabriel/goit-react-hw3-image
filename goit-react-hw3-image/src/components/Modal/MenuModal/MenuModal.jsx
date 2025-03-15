import { navbar } from '../../../data/navbar';
import './MenuModal.css';

const MenuModal = () => {
  return (
    <div className="overlay">
      {/* <button className="close-button" onClick={onClose}>
        &times;
      </button> */}
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
