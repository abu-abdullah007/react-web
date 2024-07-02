import React, { useEffect } from "react";
import css from '../Styles/Front.module.css'
import logo from '../Media/profile3.jpg'
import profile from '../Media/my.png'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


function FrontPage(){
    useEffect(()=>{
        const button = document.querySelector('#button')
        const display = document.querySelector('#test')
        const myCard = document.querySelector('#myCard')
        const endButton = document.querySelector('#endButton')

        button.addEventListener("click",()=>{
            display.classList.remove('Front_show__pukct')
            console.log(display.classList)
        })

        endButton.addEventListener("click",()=>{
            display.classList.add('Front_show__pukct')
        })

        window.addEventListener("load",()=>{
            myCard.classList.remove('Front_under__hHTKo')
            console.log(myCard.classList)
        })
    })

    return(
        <div className={css.main} id="main">
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
                <div className={[css.hiddenNav,css.show].join(' ')} id="test">
                    <ul>
                        <li><FontAwesomeIcon icon={fas.faX} id="endButton" /></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">about</a></li>
                        <li><a href="/">card</a></li>
                        <li><a href="/">contact</a></li>
                    </ul>
                </div>
                <div className={css.button} id="button">
                    <div className={css.box}></div>
                    <div className={css.box}></div>
                    <div className={css.box}></div>
                </div>
            </nav>
            <div className={css.fullBody}>
                <div className={css.mainBody}>
                    <div className={[css.card,css.under].join(' ')} id="myCard">
                        <div className={css.left}>
                            <div className={css.leftCenter}>
                                <h1>I am abu huraira</h1>
                                <p>I am web developer. I make website frontend and backend. 
                                   I am also martial artist.
                                   I make web application using django and prostgresql</p>
                            </div>
                            <div className={css.gitLink}>
                                <FontAwesomeIcon icon={fab.faGithub} />
                                <FontAwesomeIcon icon={fab.faAws} />
                                <FontAwesomeIcon icon={fas.faServer} />
                            </div>
                        </div>
                        <div className={css.right}>
                            <img src={profile} alt="myphoto" />
                        </div>
                    </div>
                </div>
                <div className={css.footer}>
                    <FontAwesomeIcon icon={fab.faFacebook} />
                    <FontAwesomeIcon icon={fab.faFacebookMessenger} />
                    <FontAwesomeIcon icon={fab.faWhatsapp} />
                    <FontAwesomeIcon icon={fab.faTelegram} />
                </div>
            </div>
        </div>
    )
}

export default FrontPage;