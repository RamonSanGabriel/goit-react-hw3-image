import { imageGallery } from '../../data/image-gallery';
import { API_KEY, BASE_URL } from '../../data/pixabay';
import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <h1>Gallery</h1>
      <ul className="gallery-list">
        {imageGallery.map(({ desc, id, src }) => (
          <div key={id} className="image-gallery container">
            <li className="gallery-items">
              <img
                className="gallery-image"
                src="https://picsum.photos/200/300"
                alt="Image 1"
              />
              {desc}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
