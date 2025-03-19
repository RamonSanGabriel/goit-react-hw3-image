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
                src={
                  webformatURL
                    ? `${webformatURL}`
                    : `https://fakeimg.pl/265x250?text=No+Image+Available`
                }
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
