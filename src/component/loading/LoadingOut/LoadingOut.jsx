import { useEffect, useRef } from "react"
import style from "../loading.module.css"
import CharaLoading from "./charaLoading/CharaLoading"

function LoadingOut(){
    const element = useRef()

    useEffect(() => {
        window.onload = () => {
            element.current.classList.add(style['remove'])
            console.log("lmao")
        }
    },[])

    return(
        <div className={style.loading} ref={element}>
            <CharaLoading />
        </div>
    )
}

export default LoadingOut