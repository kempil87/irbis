import React, { useState} from "react";
import "./Header.css"
import {Link, NavLink} from "react-router-dom";
import { Modal} from "react-bootstrap";
import 'react-dropdown/style.css';

export const Header = ({setShowCart,showMenu}) => {

  const logo = "https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="">
      <div className="header ">
        <div className="header-wrap">
          <div className="header-left">
            <Link to="/irbis" className="irbis-logo">
              <img className="irbis-logo" width="111" height="128" alt='irbis-logo'
                   src={logo}/>
            </Link>
            <h6 className="hashtag">#охотаначалась</h6>
          </div>


          <div className="header-navbar">
            <div className="header-club-info d-flex align-items-center justify-content-between">
              <div className="header-club-name d-none d-md-block">Флорбольный клуб «Ирбис»</div>
              <div onClick={handleShow} className="header-club-city align-items-center ">
                Казань
                <span className="material-icons-outlined">location_on</span>
              </div>

              <div onClick={setShowCart} className='drawer'>
                <span className="material-icons-outlined">shopping_bag</span>
              </div>

            </div>
            <div className="header-content d-none d-sm-flex">
              <NavLink to="/irbis" className={({isActive}) => isActive ? "header-alink" : "header-link"}>Главная</NavLink>
              <NavLink to="/news"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Новости</NavLink>
              <NavLink to="/championship"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Чемпионат</NavLink>
              <NavLink to="/club" className={({isActive}) => isActive ? "header-alink" : "header-link"}>Клуб</NavLink>
                <NavLink to="/media" className={({isActive}) => isActive ? "header-alink" : "header-link"}>Медиа</NavLink>
              <NavLink to="/shop"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Магазин</NavLink>
              <NavLink to="/partners"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Партнерство</NavLink>
            </div>
            <div className="burger-back">
              <span style={{fontSize: 26}} onClick={showMenu} className="material-symbols-outlined d-block d-md-none">menu</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Флорбольный клуб "Ирбис"</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>ул. Краснококшайская , Казань</h5>
            <div className="d-flex justify-content-center align-items-center">
              <iframe src="https://yandex.ru/map-widget/v1/-/CCUFQRXh3A" width="460" height="300" frameBorder="1"
                      allowFullScreen="true"/>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}
