import s from "./footer.module.css"

function Footer(){
    return(
        <footer>
            <div className={s.bgGray}>
                <p className={s.logo}>
                    <img src="public\assets\session5\logo.png" alt="logo" />
                </p>
                <div className={s.column}>
					名称：プリンセスコネクト！Re:Dive
                    <br />
                    ジャンル：アニメRPG
                    <br />
                    対応機種：iOS/Android
                    <br />
                    価格：基本無料（一部アイテム課金制）
                </div>
            </div>
            <div className={s.footInner}>
                <nav>
                    <ul>
                        <li><a href="#">公式トップ</a></li>
                        <li><a href="#">このサイトについて</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                        <li><a href="#">利用規約・権利表記</a></li>
                        <li><a href="#">推奨端末一覧</a></li>
                        <li><a href="#">FAQ・お問い合わせ</a></li>
                    </ul>
                </nav>
                <p className={s.footerLogo}><img src="public\assets\session5\footer-logo.png" alt="footer logo" /></p>
                <p className={s.copyright}>
				    ※AppleとAppleのロゴは、米国およびその他の国で登録されたApple Inc.の商標です。
                    <br />
				    ※Google Play および Google Play ロゴは、Google LLC の商標です。
                    <br />
                    <br />
				    © Cygames, Inc.
                </p>
            </div>
        </footer>
    )
}

export default Footer