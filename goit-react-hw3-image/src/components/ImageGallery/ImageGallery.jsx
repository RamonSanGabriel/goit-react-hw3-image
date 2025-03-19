import './ImageGallery.css';

const ImageGallery = ({ photos, onClick }) => {
  return (
    <div className="image-gallery-wrapper">
      <h1>Gallery</h1>
      <ul className="gallery-list">
        {photos.map(({ id, webformatURL, largeImageURL, tags, user }) => (
          // console.log(photo.webformatURL);
          <div key={id} className="image-gallery">
            <li className="gallery-items" onClick={onClick}>
              <img
                className="gallery-image"
                // src="https://picsum.photos/200/300"
                src={webformatURL}
                // largeImageURL={largeImageURL}
                alt={tags}
              />
              <p>{user}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
