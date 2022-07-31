import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../components/Shop/Shop.css"
import {Link, useLocation} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchShop} from "../../redux/actions/shopAction";
import {cartSlice} from "../../redux/reducers/CartSlice";
import CardShop from "./CardShop";

export const ShopPage = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const {product, isLoading} = useSelector((state => state.shopReducer))
  const {notification, count} = useSelector((state => state.cartReducer))
  const {addToCart, showNotification, hideNotification} = cartSlice.actions

  const addProduct = (id) => {
    // setCheck(!check)
    const currentProduct = product?.find((i) => i._id === id);
    if (currentProduct) {
      dispatch(addToCart({...currentProduct, countItem: 1}))
      dispatch(showNotification())
      setTimeout(() => {
        dispatch(hideNotification())
      }, 1500)
    }
  }


  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 4
    },
    tablet: {
      breakpoint: {max: 1024, min: 576},
      items: 2
    },
    mobile: {
      breakpoint: {max: 576, min: 0},
      items: 1
    }
  };

  useEffect(() => {
    // getProduct()
    dispatch(fetchShop())
  }, [])

  return (
    <>
        <div className={ notification  ? 'show-cart-notification  p-1' :'cart-notification p-1'}>Товар был успешно добавлен
          <span className="material-icons-outlined  p-1">check_circle</span>
        </div>

      <div id="a" className="shop-wrap container">
        <div className="d-flex justify-content-between">
          <div className="home-title-shop mb-3 col-8">Магазин Атрибутики ФБК Ирбиса</div>
          {location.pathname === '/irbis' &&(
            <>
              <Link to="/shop" className="all-shop d-none d-lg-flex">
                Все Товары
                <span className="material-icons-outlined">arrow_right_alt</span>
              </Link>
              <Link to="/shop" className="all-shop d-flex d-lg-none">
                Все
                <span className="material-icons-outlined">arrow_right_alt</span>
              </Link>
            </>
          )}
        </div>
        {isLoading ? (
          <Loader/>
        ) : (
          <>
            <div className="d-none d-lg-block">
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                className=""
              >
                {product.map((i) => (
                  <div className="" key={i._id}>
                    <CardShop _id={i._id}
                              addToCart={(id) =>addProduct(id)}
                              price={i.price}
                              salePrice={i.salePrice}
                              name={i.name}
                              image={i.image}
                              badge={i.badge} />
                  </div>
                ))}
              </Carousel>
            </div>
            {/*<div className='d-flex justify-content-center'>*/}
            {/*  <div style={{width: '100vw'}} className="d-flex d-lg-none overflow-auto align-items-center sm-shop-wrap">*/}
            {/*    {product.map((i) => (*/}
            {/*      <div className=" product-card m-1 " key={i._id}>*/}
            {/*        <div className="d-flex flex-column align-items-center product-top">*/}
            {/*          <img className="product-img" src={i.image} alt='товар'/>*/}
            {/*          {i.badge && (<div className="product-badge">{i.badge}</div>)}*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*          <div className="product-name">{i.name}</div>*/}
            {/*          <div className="d-flex justify-content-between mb-2 align-items-center">*/}
            {/*            {i.salePrice ? (*/}
            {/*              <div className="d-flex">*/}
            {/*                <div className="product-price">{i.salePrice} ₽</div>*/}
            {/*                <div className="product-salePrice">{i.price} ₽</div>*/}
            {/*              </div>*/}
            {/*            ) : (*/}
            {/*              <div className="product-price">{i.price} ₽</div>*/}
            {/*            )}*/}
            {/*            <Link to={`/shop${i.id}`} className="product-btn">Смотреть</Link>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </>
        )}
      </div>
    </>

  )
}
