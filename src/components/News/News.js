import React, {useEffect, useState} from "react";
import {Card, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./News.css"
import {Link, useParams} from "react-router-dom";
import {HomeNews} from "../../data/newsData/newsDataHome";
import {api} from "../../base/axios";


export const News = () => {

  const {_id} = useParams()
  const [homeNews, setHomeNews] = useState([]);


  const getHomeNews = () => {
    api.get(`/news`).then((res) =>{
      setHomeNews(res.data)
    })
  }



  useEffect(() => {
    getHomeNews()
  }, [_id])



  return (

    <div className=" news-wrap">
      <div className="d-none d-lg-flex justify-content-between container news-top">
          <h4 className="page-tittle ">Новости</h4>
          <Link to="/news" className="all-news">
              Все Новости
              <span className="material-icons-outlined">
                  arrow_right_alt
              </span>
          </Link>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="carousel-news">
          <Carousel
          >
            {homeNews.map(news => (
              <Carousel.Item key={news._id}>
                <Link to={`/news${news._id}`}>
                  <img
                    className="carousel-img d-block w-100"
                    src={news.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div className="carousel-back">
                      <h6 className="">{news.date}</h6>
                      <h3 className="carousel-title">{news.title}</h3>
                      <p className="carousel-subtitle">{news.subtitle.slice(0,80)} ...</p>
                    </div>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="d-flex d-lg-none justify-content-center">
        <Link to="/news" className="all-news-btn">
          Все Новости
        </Link>
      </div>
    </div>
  )
}
