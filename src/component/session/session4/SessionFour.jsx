import s from "./SessionFour.module.scss"

function SessionFour(){
    return(
        <section className={s.container}>
            {/* <div className={s.bgIMG}>
                <img src="public\assets\session4\bg-chara.jpg" alt="session4 background" />
            </div> */}
            <div className={s.charaInner}>
                <h3>
                    <img src="public\assets\session4\sessionTitle\h3-chara.png" alt="session title" />
                </h3>
                <h4>
                    <img src="public\assets\session4\chara-read.png" alt="chara read" />
                </h4>
                <p className={s.chara_01}><img src="public\assets\session4\chara\chara_01.png" alt="chara_01" /></p>
                <p className={s.chara_02}><img src="public\assets\session4\chara\chara_02.png" alt="chara_02" /></p>
                <p className={s.chara_03}><img src="public\assets\session4\chara\chara_03.png" alt="chara_03" /></p>
                <p className={s.chara_04}><img src="public\assets\session4\chara\chara_04.png" alt="chara_04" /></p>
                <p className={s.chara_05}><img src="public\assets\session4\chara\chara_05.png" alt="chara_05" /></p>
                <p className={s.chara_06}><img src="public\assets\session4\chara\chara_06.png" alt="chara_06" /></p>
                <p className={s.chara_07}><img src="public\assets\session4\chara\chara_07.png" alt="chara_07" /></p>
                <p className={s.chara_08}><img src="public\assets\session4\chara\chara_08.png" alt="chara_08" /></p>
                <p className={s.chara_09}><img src="public\assets\session4\chara\chara_09.png" alt="chara_09" /></p>
            </div>
        </section>
    )
}

export default SessionFour