import { useRef, useEffect } from "react"
import s from "./charaLoading.module.css"
import clsx from "clsx"

function CharaLoading(){
    const element = useRef()

    return(
        <div id={s.loadingChara} ref={element}>
            <div className={clsx(s.charaContainer, s.chara01)}></div>
        </div>
    )
}

export default CharaLoading