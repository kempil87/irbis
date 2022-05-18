import React from "react";
import "./Championship.css"
import {Link, useParams} from "react-router-dom";
import {championshipData} from "../../data/championshipData/championshipData";
import {MediaData} from "../../data/mediaData/MediaData";
import TableChamp from "../../helper/table/TableChamp";


export const Championship = () => {
    const {id} =useParams()

    return (
        <div className="champ-wrap">
            {/*<div className="page-tittle mt-3 ">Чемпионат</div>*/}
            <div className="d-sm-block d-md-flex justify-content-between">
                <div className='col-12 col-lg-6 mt-4 container'>
                    <div className="next-game ">
                        <div className="d-flex align-items-center">
                            <h5> СЛЕДУЮЩИЙ МАТЧ</h5>
                            <img className="irbis-logo-game"
                                 src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                            />
                        </div>
                       <h6>Информация о следующем матче появится в ближайшее время<br/>
                           Следите за нашими новостями</h6>
                    </div>
                    <div className="prev-game">
                        <h5> ПРЕДЫДУЩИЙ МАТЧ</h5>
                        <div className="d-flex justify-content-around mt-2">
                            <div className="home-team">
                                <img className="logo-game-prev"
                                     src="https://нффр.рф/wp-content/uploads/2021/09/Bobry-128x110.png"
                                />
                                <div className="team-name">СЕСТР. БОБРЫ</div>
                                <div className="team-city">Сестрорецк</div>
                            </div>

                            <div className="game-info">
                                <div className="game-date">
                                    <span className="material-icons-outlined">
                                          today
                                    </span>
                                    13.03.2022
                                </div>
                                <div className="game-score">1 : 8</div>
                                <div className="game-league">I лига</div>
                                <div className="game-place">
                                    <span className="material-icons-outlined">
                                        location_on
                                    </span>
                                    ДС "Фрязино"
                                </div>
                                <div className="game-link-wrap">
                                    {championshipData.map(item =>(
                                        <Link className="d-flex flex-column game-link"  to={`/media${item.albumId}`}>
                                        <span  className="material-icons-outlined">
                                        photo_camera
                                    </span>
                                            <h6>Фото</h6>
                                        </Link>
                                    ))}
                                    <Link className="d-flex flex-column game-link" target="_blank"  to="//youtube.com/watch?v=9ARSWOa5vFo">
                                        <span  className="material-icons-outlined">
                                        live_tv
                                    </span>
                                        <h6>Трансляция</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className="guest-team">
                                <img className="logo-game-prev"
                                     src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                                />
                                <div className="team-name">ИРБИС</div>
                                <div className="team-city">Казань</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 container d-flex justify-content-center flex-column">
                    <div className="table-info">
                        <div className="d-flex justify-content-around">
                            <h6>Сезон</h6>
                            <h6>2021-2022</h6>
                        </div>
                        <div className="d-flex justify-content-around">
                            <h6>Лига</h6>
                            <h6>I лига</h6>
                        </div>
                    </div>
                    <TableChamp/>
                </div>
            </div>
        </div>
    )
}
