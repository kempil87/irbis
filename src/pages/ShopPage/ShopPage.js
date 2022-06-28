import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../components/Shop/Shop.css"
import {Link} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchShop} from "../../redux/actions/shopAction";

export const ShopPage = () => {
  const [check, setCheck] = useState(false)
  const dispatch = useDispatch()
  const {product,isLoading} = useSelector((state => state.shopReducer))

  const addToCheck = () => {
    setCheck(!check)
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
    <div id="a" className="shop-wrap container">
      <div className="d-flex justify-content-between">
        <div className="home-title-shop mb-3 col-8">Магазин Атрибутики ФБК Ирбиса</div>
        <Link to="/shop" className="all-shop d-none d-lg-flex">
          Все Товары
          <span className="material-icons-outlined">arrow_right_alt</span>
        </Link>
        <Link to="/shop" className="all-shop d-flex d-lg-none">
          Все
          <span className="material-icons-outlined">arrow_right_alt</span>
        </Link>
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
                <div className="container product-card mt-3" key={i._id}>
                  <div className="d-flex flex-column align-items-center product-top">
                    <img className="product-img" src={i.image} alt='товар'/>
                    {i.badge && (<div className="product-badge">{i.badge}</div>)}
                  </div>
                  <div>
                    <div className="product-name">{i.name}</div>
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      {i.salePrice ? (
                        <div className="d-flex">
                          <div className="product-price">{i.salePrice} ₽</div>
                          <div className="product-salePrice">{i.price} ₽</div>
                        </div>
                      ) : (
                        <div className="product-price">{i.price} ₽</div>
                      )}
                      <Link to={`/shop/${i._id}`} className="product-btn">Смотреть</Link>
                      <span onClick={addToCheck} style={{fontWeight: 200, marginLeft: 8}}
                            className='material-icons-outlined'>
                        {check ? 'done' : 'add'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className='d-flex justify-content-center'>
            <div style={{width: '100vw'}} className="d-flex d-lg-none overflow-auto align-items-center sm-shop-wrap">
              {product.map((i) => (
                <div className=" product-card m-1 " key={i._id}>
                  <div className="d-flex flex-column align-items-center product-top">
                    <img className="product-img" src={i.image} alt='товар'/>
                    {i.badge && (<div className="product-badge">{i.badge}</div>)}
                  </div>
                  <div>
                    <div className="product-name">{i.name}</div>
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      {i.salePrice ? (
                        <div className="d-flex">
                          <div className="product-price">{i.salePrice} ₽</div>
                          <div className="product-salePrice">{i.price} ₽</div>
                        </div>
                      ) : (
                        <div className="product-price">{i.price} ₽</div>
                      )}
                      <Link to={`/shop${i.id}`} className="product-btn">Смотреть</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
