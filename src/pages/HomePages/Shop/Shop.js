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
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div id="a" className="shop-wrap container">
            <div className="d-flex justify-content-between">
                <div className="home-title-shop mb-3 ">Магазин Атрибутики ФБК Ирбиса</div>
                <Link to="/shop" className="all-shop">
                    Все Товары
                    <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>

                </Link>
            </div>


            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}

            >
                {ProductShop.map((i) => (

                        <div className="container product-card mt-3" key={i.id}>
                            <div className="d-flex flex-column align-items-center product-top">
                                <img className="product-img" src={i.image}/>
                                {i.badge &&(
                                    <div className="product-badge">{i.badge}</div>
                                )}
                            </div>
                            <div>
                                <div className="product-name">{i.name}</div>
                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                    <div className="product-price">{i.price} ₽</div>
                                    <Link to={`/shop${i.id}`} className="product-btn">Смотреть</Link>
                                </div>
                            </div>
                        </div>

                    ))}
            </Carousel>
        </div>
    )
}
