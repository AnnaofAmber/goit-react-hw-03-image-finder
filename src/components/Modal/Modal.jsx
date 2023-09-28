import css from "./Modal.module.css"

export const Modal = ()=>{
    return (
        <div className={css.overlay}>
            <div className={css.modal}></div>
        </div>
    )
}