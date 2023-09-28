import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({imageUrl})=>{
    return(
        <li className={css.imageGalleryItem}>
            <img className={css.galleryImage} src={imageUrl} alt="" />
        </li>
    )
}