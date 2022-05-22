import React, {useEffect, useState} from 'react';
import "../ShopPage/ShopPage.css"
import {Link, useParams} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-bootstrap";
import {api} from "../../base/axios";
import "./ShopPageIn.css"

const ShopPageIn = () => {

  const {_id} = useParams()
  const [product, setProduct] = useState([])

  const getProduct = () => {
    api.get(`/products/${_id}`).then((res) => {
      setProduct(res.data)
    })
  }

  useEffect(() => {
    getProduct()
  }, [_id])
  return (
    <div className="shopPage-wrap pt-3">
      <div  className="container">
        <Link
          className="back-news d-flex align-items-center "
          style={{color:'white'}}
          to={"/shop"}>
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
          Назад к каталогу
        </Link>
      </div>
      <div className="container d-flex justify-content-between">

        <div className="col-4  mt-5 mb-5">

          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="productIn-img"
                height="400"
                src={product.image}
                alt="First slide"/>
            </Carousel.Item>
          </Carousel>

        </div>
        <div className="col-7 mt-5 mb-5">
          <h5>{product.name}</h5>
          {product.amount !== 0 ? (
            <h5>В наличии {product.amount} шт</h5>
          ) : (
            <h5>Нет в наличии </h5>
          )}

          <h5 className="productIn-badge">{product.badge}</h5>
          <div>
            <h4>Размер </h4>
            <div className="d-flex product-size">
              <h6>s</h6><h6>m</h6><h6>l</h6><h6>xl</h6>
            </div>
          </div>
          {product.salePrice ? (
            <div className="d-flex">
              <h4 className="">{product.salePrice} ₽</h4>
              <h4 className="product-salePrice">{product.price} ₽</h4>
            </div>
          ) : (
            <h4 className="">{product.price} ₽</h4>
          )}

          <h5 className="mt-5">ОПИСАНИЕ<br/>
            <h6>
              Удобная спортивная бутылка MAD GUY STRIKE 1L изготовлена из пищевого полиэтилена. Модель имеет длинный и
              удобный сосок, что позволяет комфортно пить не снимая шлема. Наличие крышки с широким горлышком
              обеспечивает возможность быстрого наполнения жидкостью и облегчает обслуживание и уход за бутылочкой.
              Бутылка имеет вместительный объем 1 литр, что достаточно для продолжительной тренировки или соревнования.
              Сбоку модель декорирована логотипом производителя. Это хорошая и качественная модель за невысокую цену.
            </h6>
          </h5>

          <div className="byeBtn-wrap">
            <div className="byeBtn">
              Купить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageIn;
