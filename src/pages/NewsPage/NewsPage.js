import React, {useEffect, useState} from 'react';
import "./NewsPage.css"
import {Link} from "react-router-dom";
import {api} from "../../base/axios";
import NewsCard from "./components/NewsCard";
import loader from "../../components/Loader/Loader";
import Loader from "../../components/Loader/Loader";

const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [showMore, setShowMore] = useState(true);
  const [loader, setLoader] = useState(true);

  // const pressMore = () => {
    //     setNews([...allNews, ...allNewsAlso.reverse()])
    //     setShowMore(false)
    // }

  const getAllNews =() =>{
    api.get('/news').then((res) =>{
      setNews(res.data)
      setLoader(false)
    })
  }

    useEffect(() => {
       getAllNews()
    }, [])
    return (
        <div className="newsPage-wrap container">

            <h4 className="newsHome-tittle mt-4">Все новости</h4>

          {loader?(
            <Loader/>
          ):(
            <>
            <div className="d-none d-lg-flex flex-wrap ">
              {news.reverse().map(n => (
                <NewsCard _id={n._id} badge={n.badge} date={n.date} image={n.image} title={n.title}/>
              ))}
            </div>

            <div className="d-flex d-lg-none flex-wrap justify-content-center">
              {news.reverse().map(n => (
                <Link key={n._id} to={`/news/${n._id}`} className="newsCard-wrap col-10 col-lg-3 mt-4 mb-4 d-flex flex-column ">
                  <div className="d-flex flex-column justify-content-between align-items-center"
                       style={{width: '100%', height: '100%'}}>
                    <div className="newsPage-top d-flex  justify-content-center">
                      <img className="news-image" src={n.image}  alt="Новость"/>
                      <div className="news-badge">{n.badge}</div>
                    </div>

                    <div className="newsPage-bottom d-flex flex-column  justify-content-center">
                      <div className="news-date mt-2">{n.date}</div>
                      <div className="news-title  mt-2">{n.title}</div>
                    </div>
                  </div>
                </Link> ))}
              </div>
            </>





          )}

            {showMore && (
              <div>
                {news.image >0  &&(
                  <div
                       className="showMore-news d-flex align-items-center justify-content-center mb-2"
                  >ПОКАЗАТЬ ЕЩЕ
                    <span className="material-icons-outlined">
                         fiber_manual_record
                        </span>
                    <span className="material-icons-outlined">
                        fiber_manual_record
                        </span>
                    <span className="material-icons-outlined">
                        fiber_manual_record
                        </span>
                  </div>
                )}

              </div>
            )}
        </div>
    );
};

export default NewsPage;
