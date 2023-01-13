import { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import SessionOne from "./component/session/session1/SessionOne";
import SessionTwo from "./component/session/session2/SessionTwo";
import YoutubeVideoPlayer from "./component/session/youtube/youtubeVideoPlayer";

function App() {
  let pagePosition = 0;
  const scrollSession = useRef();
  //let [scrollState, setScrollState] = useState(0);
  let offSet = 0;

  const checkPage = () => {
    if (pagePosition <= 0) {
      pagePosition = 0;
    } else if (pagePosition >= 3) {
      pagePosition = 3;
    }
  };

  //execute cooldown for function
  const RECHARGE_TIME = 1500;

  function changeSession() {
    let offSet = 0;
    //when scrollup
    if (event.deltaY < 0) {
      console.log("scroll up");
      //check pagePosition section
      pagePosition--;
      checkPage();
      console.log(scrollSession);
      switch (pagePosition) {
        case 0:
          scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current.style);
          break;
        case 1:
          offSet = scrollSession.offsetHeight;
          scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current.style);
          break;
        case 2:
          offSet = scrollSession.offsetHeight * 2;
          scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current.style);
          break;
      }
    }
    //when scrolldown
    else {
      console.log("scroll down");
      pagePosition++;
      checkPage();
      console.log(pagePosition);
      switch (pagePosition) {
        case 1:
          offSet = scrollSession.current.style.offsetHeight;
          console.log(offSet);
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          //scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
        case 2:
          offSet = scrollSession.current.style.offsetHeight * 2;
          //scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current);
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current.style.transform);
          break;
        case 3:
          offSet = scrollSession.current.style.offsetHeight * 3;
          //scrollSession.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current.style);
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          console.log(scrollSession.current.style.transform);
          break;
      }
    }
  }

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

  let throttledListener = throttle(changeSession, RECHARGE_TIME);

  useEffect(() => {
    window.addEventListener("wheel", throttledListener);
    //console.log(scrollSession)
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="youtube-wrapper">
        <YoutubeVideoPlayer />
      </div>
      <div className="wrapper" ref={scrollSession}>
        <SessionOne />
        <SessionTwo />
      </div>
    </div>
  );
}

export default App;
