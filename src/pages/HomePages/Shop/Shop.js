import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Shop.css"
import {Link, useParams} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {ProductShop} from "../../../data/ShopData/ProductShop";

export const Shop = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
            items: 2
        }
    };
    return (
        <div id="a" className="shop-wrap container">
            <div className="d-flex justify-content-between">
                <div className="home-title-shop mb-3 col-8">Магазин Атрибутики ФБК Ирбиса</div>
                <Link to="/shop" className="all-shop d-none d-lg-flex">
                    Все Товары
                    <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>

                </Link>
                <Link to="/shop" className="all-shop d-flex d-lg-none">
                    Все
                    <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>

                </Link>
            </div>

<div className="d-none d-lg-block">
    <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        className=""
    >
        {ProductShop.map((i) => (

            <div className="container product-card mt-3" key={i.id}>
                <div className="d-flex flex-column align-items-center product-top">
                    <img className="product-img" src={i.image}/>
                    {i.badge && (
                        <div className="product-badge">{i.badge}</div>
                    )}
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
    </Carousel>
</div>

            <div className="d-flex d-lg-none flex-wrap justify-content-center align-items-center">
                {ProductShop.slice(0,3).map((i) => (

                    <div className=" container product-card mt-3 col-8 " key={i.id}>
                        <div className="d-flex flex-column align-items-center product-top">
                            <img className="product-img" src={i.image}/>
                            {i.badge && (
                                <div className="product-badge">{i.badge}</div>
                            )}
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
    )
}
