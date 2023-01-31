import clsx from "clsx"
import { useRef } from "react"
import { useEffect, useState } from "react"
import s from "./SessionThree.module.css"

const banners = [
    {
        id: 0,
        title: "banner1",
        url: "/assets/session3/banner/system_01.png"
    },

    {
        id: 1,
        title: "banner2",
        url: "/assets/session3/banner/system_02.png"
    },

    {
        id: 2,
        title: "banner3",
        url: "/assets/session3/banner/system_03.png"
    }
]


let slideState = 0

function SessionThree(){
    const slideElement = useRef()
    const [imageState, countImageState] = useState(0)

    let offSet = 1190*imageState

    const prevImg = () => {
        if(slideState === 0)
        {
            slideState = 2
        }
        else{
            slideState--
        }
        countImageState(slideState)
    }

    const nextImg = () => {
        if(slideState === 2)
        {
            slideState = 0
        }
        else{
            slideState++
        }
        countImageState(slideState)
    }
    
    //hide all the slide except for first image in the first time
    useEffect(() => {
        banners.forEach(banner => {
            if(banner.id === 0)
            {
                slideElement.current.childNodes[0].style.opacity = 1
            }
            else{
                slideElement.current.childNodes[banner.id].style.opacity = 0
            }
        })
    }, [])

    //when click for the next or prev image, hide all the image outside the screen
    useEffect(() => {
        banners.forEach(banner => {
            if(banner.id === imageState)
            {
                slideElement.current.childNodes[imageState].style.opacity = 1
                slideElement.current.childNodes[banner.id].style.transition = ""
            }
            else{
                slideElement.current.childNodes[banner.id].style.transition = "opacity 500ms ease 0s"
                slideElement.current.childNodes[banner.id].style.opacity = 0
            }
        })
        slideElement.current.style.transform = `translate3d(${-offSet}px, 0 , 0)` 
    }, [imageState])

    return(
        <section className={s.container}>
            <div className={s.sessionInner}>
                <div className={s.sessionTitle}><img src="\assets\session3\sessionTitle\h3-system.png" alt="sessionTitle" /></div>
                <div className={s.systemSlide} >
                    <button type="button" className={clsx(s.slideArrow, s.prev)} onClick={prevImg}></button>
                    <div className={s.slideImage}>
                        <div className={s.slideImageContainer} ref={slideElement}>
                            {
                                banners.map((img, index) => (
                                    <div key={index}><img src={img.url} alt={img.title} /></div>
                                ))
                            }
                        </div>       
                    </div>
                    <button type="button" className={clsx(s.slideArrow, s.next)} onClick={nextImg}></button>   
                </div>
            </div>
        </section>
    )
}

export default SessionThree