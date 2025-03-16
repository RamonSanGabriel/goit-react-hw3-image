import { imageGallery } from '../../data/image-gallery';
import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <h1>Gallery</h1>
      <ul className="gallery-list">
        {imageGallery.map(({ img, id, src }) => (
          <div key={id} className="image-gallery container">
            <li className="gallery-items">
              {/* <a href={src}> */}
              <img
                className="gallery-image"
                src="https://picsum.photos/200/300"
                alt="Image 1"
              />
              {img}
              {/* </a> */}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
