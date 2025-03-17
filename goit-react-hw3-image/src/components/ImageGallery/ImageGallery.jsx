import './ImageGallery.css';

const ImageGallery = ({ photos, photo }) => {
  return (
    <div className="image-gallery-wrapper">
      <h1>Gallery</h1>
      <ul className="gallery-list">
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
          // console.log(photo.webformatURL);
          <div key={id} className="image-gallery container">
            <li className="gallery-items">
              <img
                className="gallery-image"
                // src="https://picsum.photos/200/300"
                src={webformatURL}
                // largeImageURL={largeImageURL}
                // tags={tags}
                alt="Image"
              />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
