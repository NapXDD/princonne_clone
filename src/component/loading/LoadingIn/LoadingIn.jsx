import clsx from "clsx"
import style from "../loading.module.css"

function LoadingIn(){
    return(
        <div className={clsx(style.loading, style.ready)}>
        </div>
    )
}

export default LoadingIn