import ImageModal from '../Modal/ImageModal/ImageModal';
import './ImageGallery.css';
// import ImageModal from '../Modal/ImageModal/ImageModal';
import { useState } from 'react';

const ImageGallery = ({ photos, onClick, modalOpen, id }) => {
  return (
    <div className="image-gallery-wrapper">
      <h1>Gallery</h1>
      <ul className="gallery-list">
        {photos.map(({ id, webformatURL, tags, user }) => (
          // console.log(photo.webformatURL);
          <div key={id} className="image-gallery">
            <li className="gallery-items" onClick={onClick(id)}>
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
      {modalOpen && (
        <ImageModal largeImageURL={() => console.log(largeImageURL)} />
      )}
    </div>
  );
};

export default ImageGallery;
{
}
