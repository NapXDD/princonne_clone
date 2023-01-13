import s from "./NavBar.module.scss"
import { FaYoutube, FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";


function NavBar(){
    return(
        <div className={s.container}>
            <div className={s.navContent}>
                <ul className={s.navList}>
                    <li className={s.content}>
                        <a href="#">ニュース</a>
                    </li>
                    <li className={s.content}>
                        <a href="#">イントロダクション</a>
                    </li>
                    <li className={s.content}>
                        <a href="#">ストーリー</a>
                    </li>
                    <li className={s.content}>
                        <a href="#">キャラクター</a>
                    </li>
                    <li className={s.content}>
                        <a href="#">ゲームシステム</a>
                    </li>
                    <li className={s.content}>
                        <a href="#">ムービー</a>
                    </li>
                    <li className={s.content}>
                        <a href="#">ファンキット</a>  
                    </li>
                    <li className={s.navYoutube}>
                        <a href="#">
                            <IconContext.Provider value={{className: 'youtube-icon', size: '1.5em'}} >
                                <FaYoutube/>
                            </IconContext.Provider>
                        </a> 
                    </li>
                    <li className={s.navTwitter}>
                        <a href="#">
                            <IconContext.Provider value={{className: 'twitter-icon', size: '1.3em'}} >
                                <FaTwitter/>
                            </IconContext.Provider>
                        </a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar