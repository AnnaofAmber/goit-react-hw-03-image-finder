import css from "./Modal.module.css"

export const Modal = ({image, largeImage})=>{
    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <img className={css.modalImage} src={largeImage} alt="" />
            </div>
        </div>
    )
}