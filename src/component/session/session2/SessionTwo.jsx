import s from "./SessionTwo.module.scss"
import TwArea from "./twArea/TwArea"
import NewsArea from "./newsArea/NewsArea"

function SessionTwo(){
    return(
        <section className={s.container}>
            <NewsArea/>
            <TwArea/>
        </section>
    )
}

export default SessionTwo