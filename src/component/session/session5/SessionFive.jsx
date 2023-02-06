import { useState } from "react";
import { useEffect } from "react"
import s from "./SessionFive.module.scss"
import Footer from "./footer/footer";

function SessionFive(){
    return(
        <section className={s.container}>
            <div className={s.entryArea}>
                <div className={s.entryAreaInner}>
                    <ul className={s.btnStore}>
                        <li><a href="#"><img style={{height: 74, width:204}} src="public\assets\btn\btn_appstore_w200.png" alt="app store" /></a></li>
                        <li><a href="#"><img style={{height: 74, width:204}} src="public\assets\btn\btn_googleplay_w200.png" alt="ch play" /></a></li>
                        <li><a href="#"><img style={{height: 74, width:204}} src="public\assets\btn\btn_dmmgames_w200.png" alt="dmm game" /></a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SessionFive