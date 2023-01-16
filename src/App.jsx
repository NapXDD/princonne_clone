import { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import SessionOne from "./component/session/session1/SessionOne";
import SessionTwo from "./component/session/session2/SessionTwo";
import SessionThree from "./component/session/session3/SessionThree";
import SessionFour from "./component/session/session4/SessionFour"
import YoutubeVideoPlayer from "./component/session/youtube/youtubeVideoPlayer";

let offSet = 0;
let pagePosition = 0

//execute cooldown for function
const RECHARGE_TIME = 1000;

const checkPage = () => {
  if (pagePosition <= 0) {
    pagePosition = 0
  } else if (pagePosition >= 3) {
    pagePosition = 3
  }
}

function App() {
  
  const scrollSession = useRef();
  //let [pagePosition, setPagePosition] = useState(0)
  
  function changeSession() {
    
    //reading a height off a session to translate3d
    let rootHeight = scrollSession.current.clientHeight/4

    //when scrollup
    if (event.deltaY < 0) {
      pagePosition--
      checkPage();
      switch (pagePosition) {
        case 0:
          offSet = 0
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
        case 1:
          offSet = rootHeight;
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
        case 2:
          offSet = rootHeight * 2;
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
      }
    }
    //when scrolldown
    else {
      pagePosition++
      checkPage();
      switch (pagePosition) {
        case 1:
          offSet = rootHeight;
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
        case 2:
          offSet = rootHeight * 2;
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
        case 3:
          offSet = rootHeight * 3;
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
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
        <SessionThree />
        <SessionFour />
      </div>
    </div>
  );
}

export default App;
