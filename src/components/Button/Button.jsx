import css from "./Button.module.css"

export const Button = ({onClick, isMore})=>{

    return(<div>
        {isMore?<button className={css.button} onClick={onClick}>Load more</button>: <div></div>}
        </div> 
    )}
