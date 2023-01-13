import MainInner from "./mainInner/mainInner"
import s from "./sessionOne.module.scss"

function SessionOne(){
    return(
        <section className={s.container} id="main">
            <div className={s.bgFilter}></div>
            <MainInner/>
        </section>
    )
}

export default SessionOne