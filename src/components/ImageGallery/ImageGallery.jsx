import css from "./ImageGallery.module.css"

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, showModalImage }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem webformatImage={image.webformatURL} showModalImage= {showModalImage} largeImage={image.largeImageURL}/>
        </li>
      ))}
    </ul>
  );
};
