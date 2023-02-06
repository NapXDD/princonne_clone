import clsx from "clsx";
import { useRef } from "react";
import { useEffect, useState } from "react";
import s from "./SessionThree.module.css";

const banners = [
  {
    id: 0,
    title: "banner1",
    url: "/assets/session3/banner/system_01.png",
  },

  {
    id: 1,
    title: "banner2",
    url: "/assets/session3/banner/system_02.png",
  },

  {
    id: 2,
    title: "banner3",
    url: "/assets/session3/banner/system_03.png",
  },
];

function throttle(func, delay) {
    var func = func.bind(func),
      last = Date.now();
    return function () {
      if (Date.now() - last > delay) {
        func();
        last = Date.now();
      }
    };
  }

let slideState = 0;

let RECHARGE_TIME = 500;

function SessionThree() {
  const slideElement = useRef();
  const [imageState, countImageState] = useState(0);

  //call the function when click to change prev banner
  const prevImg = () => {
    //if the slider is stay at the first banner, the slider will change it to the last banner
    if (slideState === 0) {
      slideState = 2;
    } else {
      slideState--;
    }
    countImageState(slideState);
  };

  //call the function when click to change next banner
  const nextImg = () => {
    //if the slider is stay at the last banner, the slider will change it to the first banner
    if (slideState === 2) {
      slideState = 0;
    } else {
      slideState++;
    }
    countImageState(slideState);
  };
  
  let throttledPrevListener = throttle(prevImg, RECHARGE_TIME);

  let throttledNextListener = throttle(nextImg, RECHARGE_TIME);

  useEffect(() => {
    banners.forEach((banner) => {
        if (banner.id !== imageState) {
          slideElement.current.childNodes[banner.id].style.opacity = 0;
          slideElement.current.childNodes[banner.id].style.transition = "opacity 500ms ease 0s";
        }
      });
      slideElement.current.childNodes[imageState].style.opacity = 1;
      slideElement.current.childNodes[imageState].style.transition = "opacity 500ms ease 0s";
    let timer1 = setTimeout(() => (slideElement.current.childNodes[imageState].style.transition = ""), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, [imageState]);

  return (
    <section className={s.container}>
      <div className={s.sessionInner}>
        <div className={s.sessionTitle}>
          <img
            src="\assets\session3\sessionTitle\h3-system.png"
            alt="sessionTitle"
          />
        </div>
        <div className={s.systemSlide}>
          <button
            type="button"
            className={clsx(s.slideArrow, s.prev)}
            onClick={throttledPrevListener}
          ></button>
          <div className={s.polite}>
            <div className={s.slideImageContainer} ref={slideElement}>
              {banners.map((img, index) => (
                <div
                  className={s.banner}
                  key={index}
                  style={{ top: 0, left: `${-1190 * index}px` }}
                >
                  <img src={img.url} alt={img.title} />
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className={clsx(s.slideArrow, s.next)}
            onClick={throttledNextListener}
          ></button>
        </div>
      </div>
    </section>
  );
}

export default SessionThree;
