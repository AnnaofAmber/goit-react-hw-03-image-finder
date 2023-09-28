import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({webformatImage, largeImage, showModalImage})=>{
    return(
        <li className={css.imageGalleryItem}>
            <img className={css.galleryImage} src={webformatImage} onClick={()=>showModalImage(largeImage)} alt="" />
        </li>
    )
}