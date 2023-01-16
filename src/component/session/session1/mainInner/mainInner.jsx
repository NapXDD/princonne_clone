import s from "./mainInner.module.scss"

function MainInner() {
  return (
    <div className={s.mainInner}>
        <div className={s.middleADs}>
            <h1><img src="\assets\logo.png" alt="princonne-logo" /></h1>   
            <p className="staff"><img src="\assets\staff.png" alt="princonne-staff" /></p>
        </div>
        <h2><img src="\assets\catchcopy.png" alt="princonne-catch" /></h2>
        <ul className={s.top_banner}>
            <li>
                <div className={s.banner_Card}>
                    <a href="">
                        <img src="\assets\top-banner\e4bf14c13d51952872bd376f1741bc55.png" alt="banner1" />
                    </a>
                </div>
            </li>
            <li>
                <div className={s.banner_Card}>
                    <a href="">
                        <img src="\assets\top-banner\147f50bde8d09c719fae6a253b7401fb.png" alt="banner2" />
                    </a>
                </div>
            </li>
            <li>
                <div className={s.banner_Card}>
                    <a href="">
                        <img src="\assets\top-banner\93382b16ee65742e36d57e7f484824ac.png" alt="banner3" />
                    </a>
                </div>
            </li>
            <li>
                <div className={s.banner_Card}>
                    <a href="">
                        <img src="\assets\top-banner\5065c5d52f3305f2fd3ff0c49bb903f5.png" alt="banner4" />
                    </a>
                </div>
            </li>
            <li>
                <div className={s.banner_Card}>
                    <a href="">
                        <img src="\assets\top-banner\db2a8de2e5e1fecdaae0663e847c8b3d.jpg" alt="banner5" />
                    </a>
                </div>
            </li>
            <li>
                <div className={s.banner_Card}>
                    <a href="">
                        <img src="\assets\top-banner\cf2f7f9d15181f63ea10fc98a64eff25.jpg" alt="banner6" />
                    </a>
                </div>
            </li>
        </ul>
        
        <p className={s.btn_text}>
            <img src="\assets\btn_text.png" alt="btn-text" />
        </p>

        <ul className={s.btn_store}>
            <li>
                <div className={s.btn_Card}>
                    <a href=""><img src="\assets\btn\btn_appstore_w200.png" alt="appStore" /></a>
                </div>
            </li>
            <li>
                <div>
                    <a href=""><img src="\assets\btn\btn_googleplay_w200.png" alt="googlePlay" /></a>
                </div>
            </li>
            <li>
                <div>
                    <a href=""><img src="\assets\btn\btn_dmmgames_w200.png" alt="dmmGame" /></a>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default MainInner;
