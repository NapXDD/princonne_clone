import { useEffect } from "react"
import YouTube from 'react-youtube';
import "./YoutubeVideoPlayer.css"

function YoutubeVideoPlayer(){
    //play the video when its ready
    const onPlayerReady = (event) => {
        const player = event.target
        player.mute()
        player.playVideo()
    }

    const onPlayerChange = (event) => {
        const player = event.target
        //if the video ended, change opacity to 0
        if(player.getPlayerState() === 0)
        {
            const element = document.getElementById("player")
            element.style.opacity = 0
        }
    }

    const opts = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        'width': `${window.innerWidth}`,
        'height': `${window.innerHeight + 110}`,
        'modestbranding': 1,
        'autoplay': 0,
        'controls': 0,
        'showinfo': 0,
        'rel': 0,
        'allowfullscreen': 'true',
        'wmode': 'transparent',
        'iv_load_policy': 3,
        'html5': 1,
        'version': 3,
        'playerapiid': 'player',
        },
      };

      useEffect(() => {        
        // getYoutubeAPI()
        // onYouTubeIframeAPIReady()
        const element = document.getElementById("player")
        element.style.height = `${window.innerHeight + 110}px`
        element.style.width = `${window.innerWidth }px`
        element.style.overflow = "hidden"
        element.style.marginTop = "-55px"
        element.setAttribute("unselectable", "on")
 
    }, [])  

    

    return(
            <YouTube
            className='iframe-wrapper'
            id="player" 
            videoId="f56t72sfe-Q" 
            opts={opts} 
            onReady={onPlayerReady}
            onStateChange={onPlayerChange}
            />
    )
}

export default YoutubeVideoPlayer