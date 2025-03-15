import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {/* <h1>Gallery</h1> */}
      <ul className="gallery-list">
        <li className="gallery-items">
          <img src="https://picsum.photos/200/300" alt="Image 1" />
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
