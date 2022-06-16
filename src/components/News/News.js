import React, {useEffect, useState} from "react";
import { Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./News.css"
import {Link, useParams} from "react-router-dom";
import {api} from "../../base/axios";
import Loader from "../Loader/Loader";


export const News = () => {

  const {_id} = useParams()
  const [homeNews, setHomeNews] = useState([]);
  const [loader, setLoader] = useState(true);




  const getHomeNews = () => {
    api.get(`/news`).then((res) =>{
      setHomeNews(res.data.slice(0,4).reverse())
      setLoader(false)
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
      {loader ?(
        <Loader/>
      ):(
        <>
          <div className=" d-flex justify-content-center">
            <div className="carousel-news">

              <Carousel
              >
                {homeNews.map(news => (
                  <Carousel.Item key={news._id}>
                    <Link  to={`/news/${news._id}`}>
                      <div className="position-relative">
                        <div className="carousel-img-back position-absolute"></div>
                        <img
                          className="carousel-img d-block w-100 "
                          src={news.image}
                          alt="First slide"
                        />
                      </div>

                      <Carousel.Caption>
                        <div className="carousel-back">
                          <h3 className="carousel-title">{news.title}</h3>
                          <p className="carousel-subtitle">{news.subtitle.slice(0,80)} ...</p>
                          <h6 className="">{news.date}</h6>
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
        </>
      )}

    </div>
  )
}
