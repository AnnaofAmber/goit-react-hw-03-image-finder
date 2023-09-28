import css from "./Button.module.css"

export const Button = ({onLoadMore, isMore})=>{

    return(<div>
        {isMore?<button className={css.button} onClick={onLoadMore}>Load more</button>: <div></div>}
        </div> 
    )}
