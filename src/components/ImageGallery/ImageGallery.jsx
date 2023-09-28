import css from "./ImageGallery.module.css"

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem imageUrl={image.webformatURL}/>
        </li>
      ))}
    </ul>
  );
};
