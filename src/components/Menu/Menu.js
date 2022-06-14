import React from 'react';
import "./Menu.css"
import {Link} from "react-router-dom";
import {Footer} from "../Footer/Footer";

export const Menu = ({closeMenu}) => {

    return (

          <div className={"menu-active wrapper-window"} onClick={closeMenu}>
             <span onClick={closeMenu} className="material-icons-outlined btn-close-menu">
                     close
                 </span>
            <div className="menu-wrapper " onClick={(event => event.stopPropagation())}>
                <div className="menu-header">
                    <div onClick={closeMenu} >
                        <img className="irbis-logo-footer" width="111" height="128"
                             src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                             alt="Логотип"/>
                    </div>
                    <h6 className="hashtag-menu">#охотаначалась</h6>
                </div>
                <div className="menu-body mb-5">
                    <div className="menu-content ">
                        <Link onClick={closeMenu} to="/" className="menu-link">Главная</Link>
                        <Link onClick={closeMenu} to="/news" className="menu-link">Новости</Link>
                        <Link onClick={closeMenu} to="/championship" className="menu-link">Чемпионат</Link>
                        <Link onClick={closeMenu} to="/club" className="menu-link">Клуб</Link>
                        <Link onClick={closeMenu} to="/media" className="menu-link">Медиа</Link>
                        <Link onClick={closeMenu} to="/shop" className="menu-link">Магазин</Link>
                        <Link onClick={closeMenu} to="/partners" className="menu-link">Партнерство</Link>
                    </div>
                </div>
                <Footer/>
            </div>
          </div>


    );
};

