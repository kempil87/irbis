import React from "react";
import {Card, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./News.css"
import {Link} from "react-router-dom";


export const News = () => {
    return (

        <div className=" news-wrap">
            <div className="d-flex justify-content-between container">
                <h4 className="page-tittle ">Новости</h4>
                <Link to="/news" className="all-news">
                    Все Новости
                    <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>
                </Link>
            </div>
            <div className="mt-3 container">
                <div className="carousel-news">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="carousel-img"
                                src="https://sun9-14.userapi.com/impf/8-_CFAAUnP-mpj_mTp9FZQ-eEjpAdFShq34_0A/arx1eeahXQs.jpg?size=1200x470&quality=95&sign=ee60984db11b3f08a5b6bd4ed4bbe913&type=album"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="carousel-back">
                                    <h6 className="">15 апреля 2022</h6>
                                    <h3 className="carousel-title">История всех тех, кто поверил в «Ирбис»</h3>
                                    <p className="carousel-subtitle">Всем спасибо за этот сезон
                                        Увидимся в Вышке</p>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="carousel-img"

                                src="https://sun9-14.userapi.com/impf/8-_CFAAUnP-mpj_mTp9FZQ-eEjpAdFShq34_0A/arx1eeahXQs.jpg?size=1200x470&quality=95&sign=ee60984db11b3f08a5b6bd4ed4bbe913&type=album"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className="carousel-back">
                                    <h6 className="">15 апреля 2022</h6>
                                <h3 className="carousel-title">Наш менеджер в восторге</h3>
                                <p className="carousel-subtitle">Раимова Айгуль поделилась впечатлениями от игры</p>
                                </div>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-img"

                                src="https://sun9-14.userapi.com/impf/8-_CFAAUnP-mpj_mTp9FZQ-eEjpAdFShq34_0A/arx1eeahXQs.jpg?size=1200x470&quality=95&sign=ee60984db11b3f08a5b6bd4ed4bbe913&type=album"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="carousel-back">
                                    <h6 className="">15 апреля 2022</h6>
                                <h3 className="carousel-title">Врываемся в топ</h3>
                                <p className="carousel-subtitle">Список снайперов пополнился нашим молодым Ирбисом</p>
                                </div>
                                </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

    )
}
