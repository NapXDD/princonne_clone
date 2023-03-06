import s from "./SessionFour.module.scss"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"

function SessionFour(){

    const comp = useRef();
    const chara = useRef()
    
    useLayoutEffect(() => {
        let tl = gsap.timeline()
        tl.from(".chara", {
            duration: 0.5,
            opacity: 0
        })
        .from(".chara_read", {
            duration: 0.5,
            opacity: 0
        })
    }, [])

    return(
        <section className={s.container}>
            <div className={s.charaInner}>
                <h3>
                    <img src="\assets\session4\sessionTitle\h3-chara.png" alt="session title" />
                </h3>
                <h4 className="chara_read">
                    <img src="\assets\session4\chara-read.png" alt="chara read" />
                </h4>
                <div className="chara" ref={chara}>
                    <p className={s.chara_01}><img src="\assets\session4\chara\chara_01.png" alt="chara_01" /></p>
                    <p className={s.chara_02}><img src="\assets\session4\chara\chara_02.png" alt="chara_02" /></p>
                    <p className={s.chara_03}><img src="\assets\session4\chara\chara_03.png" alt="chara_03" /></p>
                    <p className={s.chara_04}><img src="\assets\session4\chara\chara_04.png" alt="chara_04" /></p>
                    <p className={s.chara_05}><img src="\assets\session4\chara\chara_05.png" alt="chara_05" /></p>
                    <p className={s.chara_06}><img src="\assets\session4\chara\chara_06.png" alt="chara_06" /></p>
                    <p className={s.chara_07}><img src="\assets\session4\chara\chara_07.png" alt="chara_07" /></p>
                    <p className={s.chara_08}><img src="\assets\session4\chara\chara_08.png" alt="chara_08" /></p>
                    <p className={s.chara_09}><img src="\assets\session4\chara\chara_09.png" alt="chara_09" /></p>
                </div>
            </div>
        </section>
    )
}

export default SessionFour