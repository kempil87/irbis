import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {allNews} from "../../data/newsData/newsData";
import {HomeNews} from "../../data/newsData/newsDataHome";
import "./NewsIn.css"

const NewsIn = () => {
    const {id} = useParams()
    const news = allNews.find(n => n.id === +id)
    const shortNews = allNews.filter(n => n.id !== +id)
    const [showDes, setShowDes] = useState(false);

    return (
        <div className="newsPage-wrap container">
            <div  className="mt-4">
                <Link
                      className="back-news d-flex align-items-center "
                      to={"/news"}>
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
                    Назад к новостям
                </Link>
            </div>
            <div className="c d-flex justify-content-around align-items-center flex-column"
                 style={{width: '100%', height: '100%'}}>

                <div className="newsInPage-bottom justify-content-center d-flex flex-column ">
                    <div className="d-flex mb-4 align-items-center">
                        <div className="newsIn-badge">{news.badge}</div>
                        <div className="newsIn-date ">{news.date}</div>
                    </div>
                    <div className="newsIn-title  mt-2">{news.title}</div>

                    <div className="newsPageIn-top-grad"/>
                    <img className="newsIn-image d-none d-lg-block" src={news.image} width="700" height="560" alt="Новость"/>
                    <img className="newsIn-image d-block d-lg-none" src={news.image} width="300" height="260" alt="Новость"/>
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        {showDes ? (
                            <div className="newsIn-subtitle col-12 ">
                                {news.subtitle}
                                <div onClick={() => setShowDes(!showDes)}>
                                    <div className="show-close">
                                        Убрать
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="newsIn-subtitle col-12 ">
                                {news.shortSubTitle}
                                <div onClick={() => setShowDes(!showDes)}>
                                    <div  className="show-close">Показать полностью </div>
                                </div>
                            </div>
                        )}
                        {news.source ?(
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h6 style={{color:'#837e7e'}}>Теги :</h6>
                                <Link className="tags-link"  to={`${news.source}`}>{news.name}</Link>
                            </div>
                        ):(
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h6 style={{color:'#837e7e'}}>Нет тегов</h6>
                            </div>
                        )}

                    </div>

                </div>
                <div className="d-none d-lg-flex justify-content-between container" >
                    <h4 style={{color:'#173460'}} className="page-tittle ">Смотри также</h4>
                    <Link style={{color:'#173460'}} to="/news" className="all-news">
                        Все Новости
                        <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>
                    </Link>
                </div>
                <div className="d-flex d-lg-none justify-content-between container" >
                    <h4 style={{color:'#173460'}} className="page-tittle ">Смотри также</h4>
                    <Link style={{color:'#173460'}} to="/news" className="all-news">
                        Все
                        <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>
                    </Link>
                </div>
                <div className="d-flex flex-wrap ">

                    {shortNews.slice(0,4).map(n=>(
                        <Link to={`/news${n.id}`} key={n.id} className="newsCard-wrap col-12 col-lg-3 mt-4 mb-4 d-flex flex-column ">
                            <div className="d-flex flex-column justify-content-between align-items-center"
                                 style={{width:'100%',height:'100%'}}
                            >
                                <div className="newsPage-top d-flex  justify-content-center">

                                    <img className="news-image" src={n.image}  alt="Новость"/>
                                    <div className="news-badge">{n.badge}</div>
                                </div>

                                <div className="newsPage-bottom d-flex flex-column  justify-content-center">
                                    <div className="news-date mt-2" >{n.date}</div>
                                    <div className="news-title  mt-2">{n.title}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsIn;
