import React, {useEffect, useState} from 'react';
import "./NewsPage.css"
import {Link} from "react-router-dom";
import NewsCard from "./components/NewsCard";
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../redux/actions/newsAction";
import {newsSlice} from "../../redux/reducers/NewsSlice";

const NewsPage = () => {

  const [showMore, setShowMore] = useState(true);
  const dispatch = useDispatch()
  const {searchNews, isLoading, news} = useSelector((state => state.newsReducer))
  const {filterNews, clearFieldsNews} = newsSlice.actions

  // const pressMore = () => {
  //     setNews([...allNews, ...allNewsAlso.reverse()])
  //     setShowMore(false)
  // }
  const clear = () => {
    dispatch(clearFieldsNews(searchNews))
  }

  const filterNewsData = news.filter(newsFilter => {
    return newsFilter.title.toLowerCase().includes(searchNews.toLowerCase())
  })

  useEffect(() => {
    dispatch(fetchNews())
  }, [])
  return (
    <div className="newsPage-wrap container">
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className="newsHome-tittle mt-4">Все новости</h4>
        <div className="input-group">
          <input
            type="text"
            value={searchNews}
            onChange={(e) => dispatch(filterNews(e.target.value))} required/>
          <span className="placeholder">Поиск новостей...</span>
          {searchNews && (
            <div className='position-absolute del-news'
                 onClick={clear}>X</div>
          )}
        </div>
      </div>

      {isLoading ? (
        <Loader/>
      ) : (
        <>
          {filterNewsData.length === 0 ? (
            <h5 style={{height: '70vh', marginLeft: 400}}
                className='d-flex justify-content-between align-items-center'>По вашему запросу ничего не найдено
              :(</h5>
          ) : (
            <>
              <div className="d-none d-lg-flex flex-wrap ">
                {filterNewsData.map(n => (
                  <NewsCard key={n._id} _id={n._id} badge={n.badge} date={n.date} image={n.image} title={n.title}/>
                ))}
              </div>
              <div className="d-flex d-lg-none flex-wrap justify-content-center">
                {filterNewsData.map(n => (
                  <Link key={n._id} to={`/news/${n._id}`}
                        className="newsCard-wrap col-10 col-lg-3 mt-4 mb-4 d-flex flex-column ">
                    <div className="d-flex flex-column justify-content-between align-items-center"
                         style={{width: '100%', height: '100%'}}>
                      <div className="newsPage-top d-flex  justify-content-center">
                        <img className="news-image" src={n.image} alt="Новость"/>
                        <div className="news-badge">{n.badge}</div>
                      </div>
                      <div className="newsPage-bottom d-flex flex-column  justify-content-center">
                        <div className="news-date mt-2">{n.date}</div>
                        <div className="news-title  mt-2">{n.title}</div>
                      </div>
                    </div>
                  </Link>))}
              </div>
            </>
          )}
        </>
      )}
      {/*{showMore && (*/}
      {/*  <div>*/}
      {/*    {news.length > 0 && (*/}
      {/*      <div className="showMore-news d-flex align-items-center justify-content-center mb-2">*/}
      {/*        ПОКАЗАТЬ ЕЩЕ*/}
      {/*        <span className="material-icons-outlined">fiber_manual_record</span>*/}
      {/*        <span className="material-icons-outlined">fiber_manual_record</span>*/}
      {/*        <span className="material-icons-outlined">fiber_manual_record</span>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default NewsPage;
