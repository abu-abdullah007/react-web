import React from "react";
import css from '../Styles/Front.module.css'
import logo from '../Media/profile3.jpg'

function FrontPage(){
    return(
        <div className={css.main}>
            <nav className={css.nav}>
                <div className={css.myLogo}>
                    <img src={logo} alt="my logo" />
                    <h4>Huraira,s Web</h4>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">card</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </nav>
            <div className={css.fullBody}>
                <div className={css.box}></div>
                <div className={css.box}></div>
                <div className={css.box}></div>
            </div>
        </div>
    )
}

export default FrontPage;