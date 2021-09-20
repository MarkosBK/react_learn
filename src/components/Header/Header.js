import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { price: 0};
    }
    
    render(){
        window.onload = function(){
            document.getElementsByClassName('header__burger')[0].addEventListener('click', function(e){
            document.getElementsByClassName('header__burger')[0].classList.toggle('active');
            document.getElementsByClassName('header__menu')[0].classList.toggle('active');
            document.getElementsByTagName('body')[0].classList.toggle('lock');
            });
        }
       

        return(
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <a href="/" className="header__logo">
                            FaceBook 2.0
                        </a>
                        <div className="header__burger">
                            <span></span>
                        </div>
                        <nav className="header__menu">
                            <ul className="header__list">
                                <li>
                                    <NavLink to="/profile" className="header__link">profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dialogs" className="header__link">messages</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/news" className="header__link">news</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/music" className="header__link">music</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/settings" className="header__link">settings</NavLink>
                                </li>
                            </ul>
                            {/* <div className="header__contact">
                                <ul className="header__contact-list">
                                    <li>
                                        <a className="header__contact-link">
                                            <img src="./img/email.png" alt="logo"></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="header__contact-link">
                                            <img src="./img/whatsapp.png"></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="header__contact-link">
                                            <img src="./img/telegram.png"></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="header__contact-link">
                                            <img src="./img/viber.png"></img>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}