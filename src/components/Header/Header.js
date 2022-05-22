import React, {useEffect, useState} from "react";
import "./Header.css"
import {Link, NavLink, useParams} from "react-router-dom";
import {Button, Dropdown, Modal} from "react-bootstrap";
import 'react-dropdown/style.css';
import {api} from "../../base/axios";
import {News} from "../News/News";

export const Header = ({showMenu}) => {

  const logo = "https://sun9-62.userapi.com/s/v1/if2/La4UMohDT8Rx0B4k0G406YlHw_jwZOPG9LA3MnVpDFX4WvCo1n9Yw6Jm_qAH9IVj30QMZnyWEOEjWc96_A4bnSX8.jpg?size=111x128&quality=95&type=album"

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {_id} = useParams()
  const [homeNews, setHomeNews] = useState([]);


  const getHomeNews = () => {
    api.get(`/news`).then((res) =>{
      console.log(123123, res)
      setHomeNews(res.data)
    })
  }



  useEffect(() => {
    getHomeNews()
  }, [_id])


  return (
    <div className="">
      <div className="header ">
        <div className="header-wrap">
          <div className="header-left">
            <Link to="/" className="irbis-logo">
              <img className="irbis-logo" width="111" height="128"
                   src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"/>
            </Link>
            <h6 className="hashtag">#охотаначалась</h6>
          </div>


          <div className="header-navbar">
            <div className="header-club-info d-flex align-items-center justify-content-between">
              <div className="header-club-name d-none d-md-block">Флорбольный клуб «Ирбис»</div>
              <div onClick={handleShow} className="header-club-city align-items-center ">
                Казань
                <span className="material-icons-outlined">
                                        location_on
                                    </span>
              </div>
            </div>
            <div className="header-content d-none d-sm-flex">
              <NavLink to="/" className={({isActive}) => isActive ? "header-alink" : "header-link"}>Главная</NavLink>
              <NavLink to="/news"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Новости</NavLink>
              <NavLink to="/championship"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Чемпионат</NavLink>
              <NavLink to="/club" className={({isActive}) => isActive ? "header-alink" : "header-link"}>Клуб</NavLink>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="header-link">
                  Медиа
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <p>
                    <Link to="/media" className="header-link-drop">Фото</Link>
                  </p>
                  <p>
                    <a href="/media#video" className="header-link-drop">Видео</a>
                  </p>
                </Dropdown.Menu>
              </Dropdown>
              <NavLink to="/shop"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Магазин</NavLink>
              {/*<a href="#a" className={"header-link"}>|</a>*/}
              <NavLink to="/partners"
                       className={({isActive}) => isActive ? "header-alink" : "header-link"}>Партнерство</NavLink>
              {/*<div to="/account" className="header-icon">*/}
              {/*    <button onClick={handleShow} id="myBtn" className="btn-header">Войти</button>*/}
              {/*</div>*/}
            </div>
            <div className="burger-back">
              <span style={{fontSize: 26}} onClick={showMenu} className="material-symbols-outlined d-block d-md-none">menu</span>
            </div>
          </div>
          {/*<div className="btn-header" onClick={setShow}>Войти</div>*/}
        </div>
      </div>
      {/*<Modal show={show} onHide={handleClose} animation={false}>*/}
      {/*    <Modal.Header closeButton>*/}
      {/*        <Modal.Title>Войти в аккаунт</Modal.Title>*/}
      {/*    </Modal.Header>*/}
      {/*    <Modal.Body>*/}
      {/*        <div className="modal-link-mail">*/}
      {/*            <Link to="/">*/}
      {/*                <img className="mail-logo"*/}
      {/*                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mail.Ru_Logo_2018.svg/1200px-Mail.Ru_Logo_2018.svg.png"*/}
      {/*                     alt=""/>*/}
      {/*            </Link>*/}
      {/*            <Link to="/">*/}
      {/*                <img className="mail-logo-yandex"*/}
      {/*                     src="https://images11.popmeh.ru/upload/custom/e0c/e0c8d2db9bfe3c3afc632495afb6ac08.jpg"*/}
      {/*                     alt=""/>*/}
      {/*            </Link>*/}
      {/*            <Link to="/">*/}
      {/*                <img className="mail-logo-gmail"*/}
      {/*                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaQFkA43hiHZkHNrl9Wp-lzbv3NZwICreL7k93cc3QY_KVgHhiJ2eRTdssrDWOzE3adE&usqp=CAU"*/}
      {/*                     alt=""/>*/}
      {/*            </Link>*/}
      {/*            <Link className="mail-logo-other" to="/">Другой</Link>*/}
      {/*        </div>*/}
      {/*        <form className="d-flex align-items-center">*/}
      {/*            <input className="mail-field" type="text" placeholder="Имя Аккаунта"/>*/}
      {/*            <Button className="mail-field-btn" variant={"light"}>@mail.ru</Button>*/}
      {/*        </form>*/}
      {/*        <form className="mt-3 d-flex justify-content-between align-items-center">*/}
      {/*            <Button className="d-flex align-items-center">Ввести пароль</Button>*/}
      {/*            <div className="d-flex align-items-center">*/}
      {/*                <input type="checkbox"/>*/}
      {/*                <h6 style={{marginBottom: 0, marginLeft: 8}}>Запомнить</h6>*/}
      {/*            </div>*/}
      {/*        </form>*/}
      {/*    </Modal.Body>*/}
      {/*    <Modal.Footer>*/}
      {/*        <Link className="footer-mail-link" to="">Восстановить доступ</Link>*/}
      {/*        <Link className="footer-mail-link" to="">Создать аккаунт</Link>*/}
      {/*    </Modal.Footer>*/}
      {/*</Modal>*/}
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
