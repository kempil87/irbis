import React from "react";
import {Card, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./News.css"
import {Link} from "react-router-dom";
import {HomeNews} from "../../../data/newsData/newsDataHome";
import {allNews} from "../../../data/newsData/newsData";


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
                    {HomeNews.map(news => (
                        <Link to={`/news${news.id}`}>
                        <Carousel
                            indicators={false}
                            key={news.id}>
                                <Carousel.Item>
                                    <img
                                        className="carousel-img"
                                        src={news.image}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <div className="carousel-back">
                                            <h6 className="">{news.date}</h6>
                                            <h3 className="carousel-title">{news.title}</h3>
                                            <p className="carousel-subtitle">{news.subtitle}</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
