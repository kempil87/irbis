import React from "react";
import "./Media.css"
import {Link} from "react-router-dom";
import {MediaData} from "../../../data/mediaData/MediaData";
import {MediaDataHome} from "../../../data/mediaData/MediaDataHome";

export const Media = () => {


    return (
        <div className="media">
            <div className="media-wrap"/>
            <div className="d-flex justify-content-between container">
                <h3 >Медиа</h3>
                <Link to="/media" className="all-players ">
                    Все Фото
                    <span className="material-icons-outlined">
                                                <span className="material-icons-outlined">
                                                     arrow_right_alt
                                                </span>
                                            </span>
                </Link>
            </div>
            <div className="d-flex  ">
                <div className=" container d-flex flex-wrap justify-content-between">
                    {MediaDataHome.map((card) => (

                        <Link to={`/media${card.id}`} key={card.id} className="d-flex flex-column photo-card">
                            <img width="400" height='267' className="media-image" src={card.image} alt='фото'/>
                            <div className="media-image-grad"/>
                            <div className="media-all d-flex align-items-center">
                                    <span className="material-icons-outlined">
                                     image
                                    </span>
                                {card.all}
                            </div>
                            <div className="media-date">{card.date}</div>
                            <div className="media-title">{card.name}</div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}
