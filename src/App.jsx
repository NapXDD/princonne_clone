import { useEffect, useRef} from "react";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import SessionOne from "./component/session/session1/SessionOne";
import SessionTwo from "./component/session/session2/SessionTwo";
import SessionThree from "./component/session/session3/SessionThree";
import SessionFour from "./component/session/session4/SessionFour";
import SessionFive from "./component/session/session5/SessionFive"
import YoutubeVideoPlayer from "./component/session/youtube/youtubeVideoPlayer";
import LoadingIn from "./component/loading/LoadingIn/LoadingIn";
import LoadingOut from "./component/loading/LoadingOut/LoadingOut";

let offSet = 0;
let pagePosition = 0

//execute cooldown for function
const RECHARGE_TIME = 1000;

const checkPage = () => {
  if (pagePosition <= 0) {
    pagePosition = 0
  } else if (pagePosition >= 4) {
    pagePosition = 4
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

function App() {
  
  const scrollSession = useRef();
  
  function changeSession() {
    //reading a height off a session to translate3d
    let rootHeight = scrollSession.current.clientHeight/5

    //when scrollup
    if (event.deltaY < 0) {
      console.log(event.deltaY)
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
        case 3:
          offSet = rootHeight * 3;
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
        case 4:
          offSet = rootHeight * 4;
          scrollSession.current.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
          break;
      }
    }
  }

  let throttledListener = throttle(changeSession, RECHARGE_TIME);

  useEffect(() => {
    window.addEventListener("wheel", throttledListener);
    console.log(window.innerHeight)
  }, []);

  return (
    <div className="App">
      <div className="youtube-wrapper">
        <YoutubeVideoPlayer />
      </div>
      <NavBar />
      <LoadingIn />
      <LoadingOut />
      <div className="wrapper" ref={scrollSession}>

        <SessionOne />
        <SessionTwo />
        <SessionThree />
        <SessionFour />
        <SessionFive />
      </div>
    </div>
  );
}

export default App;
