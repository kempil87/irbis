import React, { useState} from "react";
import "./Header.css"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Modal, Offcanvas} from "react-bootstrap";
import 'react-dropdown/style.css';
import {useDispatch, useSelector} from "react-redux";
import {Badge, Box, Button, Card, Drawer, Paper} from "@mui/material";
import {cartSlice} from "../../redux/reducers/CartSlice";
import {authSlice} from "../../redux/reducers/AuthSlice";
import {Footer} from "../Footer/Footer";

export const Header = ({setShowCart,showMenu}) => {

  const logo = "https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"

  const [show, setShow] = useState(false);
  const [anchor, setAnchor] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowDrawer = () => setAnchor(true);
  const handleCloseDrawer = () => setAnchor(false);

  const handleShowMenu = () => setMenu(true);
  const handleCloseMenu = () => setMenu(false);

  const dispatch = useDispatch()
  const nav = useNavigate()

  const token = useSelector(state => state.authReducer.token)

  const {cart, count, totalPrice ,countItem} = useSelector(state => state.cartReducer)
  const {clearAllCart,addToCart,MinusProduct,deletePositionInCart} = cartSlice.actions

  const [showModal,setShowModal] = useState(false)
  // const totalSum = items.filter((s) => s.salePrice === '')
  // .map(obj => obj.price)
  // .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);
  //
  // const sum = items.map(obj => obj.price)
  // .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);
  //
  // const totalSumSale = items.filter((s) => s.salePrice !== '')
  // .map(obj => obj.salePrice)
  // .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);
  //
  // const totalPrice = +totalSum + +totalSumSale
  // const discount = Math.round(100 - (totalPrice * 100 / sum))

  const onClickPlus = (id) => {
    const currentProduct = cart?.find((i) => i._id === id);
    dispatch(addToCart(currentProduct))
  }

  const onClickMinus = (id) => {
    const currentProduct = cart?.find((i) => i._id === id);
    dispatch(MinusProduct(currentProduct))
  }

  const removeItem = (id) => {
    const currentProduct = cart?.find((i) => i._id === id);
    dispatch(deletePositionInCart(currentProduct))
  }

  const clickClearCart = () => {
    dispatch(clearAllCart())
    setShowModal(false)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  const logout = () => {
    localStorage.clear()
    nav('/login')
    window.location.reload()
  }


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

              <div onClick={handleShowDrawer} className='drawer'>
                {count > 0 ?(
                  <Badge badgeContent={count} color={"primary"}>
                    <span className="material-icons-outlined">shopping_bag</span>
                  </Badge>
                ):<span className="material-icons-outlined">shopping_bag</span>}
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
              <div onClick={logout} className={"header-link"}>Выйти</div>
            </div>
            <div className="burger-back">
              <span style={{fontSize: 26}} onClick={handleShowMenu} className="material-symbols-outlined d-block d-md-none">menu</span>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas placement='end' show={menu} onHide={handleCloseMenu} >
        <span onClick={handleCloseMenu} className="material-icons-outlined ">close</span>
        <div className="menu-body mb-5">
          <div className="menu-content ">
            <Link onClick={handleCloseMenu} to="/irbis" className="menu-link">Главная</Link>
            <Link onClick={handleCloseMenu} to="/news" className="menu-link">Новости</Link>
            <Link onClick={handleCloseMenu} to="/championship" className="menu-link">Чемпионат</Link>
            <Link onClick={handleCloseMenu} to="/club" className="menu-link">Клуб</Link>
            <Link onClick={handleCloseMenu} to="/media" className="menu-link">Медиа</Link>
            <Link onClick={handleCloseMenu} to="/shop" className="menu-link">Магазин</Link>
            <Link onClick={handleCloseMenu} to="/partners" className="menu-link">Партнерство</Link>
          </div>
        </div>
        <Footer/>
      </Offcanvas>

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
      <Offcanvas placement='start' show={anchor} onHide={handleCloseDrawer} style={{justifyContent:'space-between'}}>
        {cart.length !== 0 ? (
          <>
            <div
              className='drawer-top d-flex justify-content-between mt-2 align-items-center container p-2 flex-column'>
              <div className='d-flex align-items-center drawer-top-underline'>
                <h4 className='mt-2 align-items-center container total-top'>{count} товаров на {totalPrice} ₽</h4>
                <span onClick={handleShowModal} style={{cursor: 'pointer', margin: 0}}
                      className="material-icons-outlined">delete</span>
              </div>

              <div className='drawer-content overflow-auto m-2'>
                {cart.map((i) => (
                  <Card key={i._id}>
                    <div className='d-flex'>
                      <img style={{objectFit: 'cover'}} width='100' src={i.image} alt='product-image'/>
                      <div style={{marginLeft: 6}}>
                        <h6 style={{fontSize: 14,fontWeight:600}} className=''>{i.name}</h6>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="product-price">{i.price} ₽</div>
                            {i.salePrice && (
                              <div className="product-salePrice">{i.salePrice} ₽</div>
                            )}
                            <span onClick={() =>onClickPlus(i._id)} style={{cursor: 'pointer', margin: 0}} className="material-icons-outlined">add</span>
                            <span>{i.countItem}</span>
                            {i.countItem > 1 &&(
                              <span onClick={() =>onClickMinus(i._id)} style={{cursor: 'pointer', margin: 0}} className="material-icons-outlined">remove</span>
                            )}
                            <span onClick={() =>removeItem(i._id)} style={{cursor: 'pointer', margin: 0}} className="material-icons-outlined">cancel</span>
                          </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div style={{marginBottom: 30}} className='drawer-bottom container'>
              <div className='d-flex justify-content-between m-2 align-items-center flex-column'>
                <div className='d-flex justify-content-between m-2 align-items-center w-100'>
                  <h6 style={{fontWeight: 400}}>Сумма заказа</h6>
                  <h6 style={{fontWeight: 600}}>{totalPrice} ₽</h6>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <Link onClick={handleCloseDrawer} className='text-center cart-clear-link ' to='/shop/orders'>Перейти к
                  оформлению</Link>
              </div>
            </div>
          </>
        ) : (
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://i.pinimg.com/originals/2a/07/68/2a0768ab8facc0a9917c090909892377.png"
                 alt='cart-irbis'
                 width='60%'
                 style={{objectFit: "cover"}}
            />
            <h5 className='text-center cart-clear-text col-10'>
              Ваша корзина пуста, откройте «Каталог»
              и выберите понравившийся товар.
              Мы доставим ваш заказ от 599 ₽
            </h5>
            <Link onClick={handleCloseDrawer} className='text-center cart-clear-link ' to='/shop'>Вернуться к Каталогу</Link>
          </div>
        )}
        <Modal show={showModal} onHide={handleCloseModal} style={{zIndex:1302}}>
          <Box sx={{py:8,px:4}}>
            <Modal.Title> Очистить всю корзину?</Modal.Title>
            <Modal.Body sx={{display:'flex',justifyContent:'space-between',px:4,}}>
              <Button sx={{my:1}} onClick={clickClearCart}>Да</Button>
              <Button sx={{my:1}} onClick={handleCloseModal}>Отменить</Button>
            </Modal.Body>
          </Box>
        </Modal>
      </Offcanvas>
    </div>
  )
}
