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
                    <Link onClick={closeMenu} to="/">
                        <img className="irbis-logo-menu"
                             src="https://sun9-3.userapi.com/sun9-82/impg/haEW1eqUXXhTjiNmrif9ArL_T15O_VJVn7_kFw/dqvM73PI6Ws.jpg?size=1280x1280&quality=96&sign=beefb73df9bbdda283693b4bd3f06a3c&type=album"
                             alt="Тут должен был быть логотип нашего Ирбиса :)"/>
                    </Link>
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
                        {/*<div to="/account" className="header-icon">*/}
                        {/*    <button onClick={handleShow} id="myBtn" className="btn-header">Войти</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <Footer/>
            </div>
          </div>


    );
};

