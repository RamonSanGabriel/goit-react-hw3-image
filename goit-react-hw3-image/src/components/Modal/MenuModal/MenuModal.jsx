import { navbar } from '../../../data/navbar';
// import LeftArrowBtn from '../../Buttons/LeftArrowBtn/LeftArrowBtn';
import './MenuModal.css';

const MenuModal = () => {
  return (
    <div className="overlay">
      <div className="menu-modal">
        <div className="nav-links">
          <ul className="nav-list">
            {navbar.map(({ id, name, link }) => (
              <div className="nav-list-items container " key={id}>
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
