import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery-wrapper">
      <h1>Gallery</h1>
      <ul className="gallery-list">
        {images.map(({ id, webformatURL, tags, user, largeImageURL }) => (
          // console.log(images);
          <ImageGalleryItem
            key={id}
            user={user}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
