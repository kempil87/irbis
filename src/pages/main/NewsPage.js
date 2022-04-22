import React, {useState} from 'react';
import {allNews, allNewsAlso} from "../../data/newsData/newsData";
import "./NewsPage.css"
import {Link} from "react-router-dom";

const NewsPage = () => {

    const [showAll, setShowAll] = useState(false);
    const sA = showAll ? allNews : allNewsAlso

    return (
        <div className="newsPage-wrap container">

                <h4 className="newsHome-tittle mt-4">Все новости</h4>


            <div className="d-flex flex-wrap">


                {allNews.map(n => (

                    <Link to={`/news${n.id}`} className="newsCard-wrap col-3 mt-4 mb-4 d-flex flex-column ">
                        <div className="d-flex flex-column justify-content-between align-items-center" style={{width:'100%',height:'100%'}}>
                            <div className="newsPage-top d-flex  justify-content-center">
                                <div className="newsPage-top-grad"/>
                                <img className="news-image" src={n.image} width="365" height="310" alt="Новость"/>
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
    );
};

export default NewsPage;
