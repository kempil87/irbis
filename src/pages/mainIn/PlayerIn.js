import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {PlayersCardInfo} from "../../data/allPlayers/PlayersCardInfo";
import "./PlayerIn.css"

const PlayerIn = () => {
    const {id} = useParams()
    const playerIn = PlayersCardInfo.find(s => s.id === +id)

    const [showDes, setShowDes] = useState(false);



    return (
        <div className=" playerIn-wrap d-flex flex-column">
            <div className="container">
                <Link
                    className="mt-3 back-stack d-none d-lg-flex align-items-center justify-content-center"
                    to={"/club"}>
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
                    Назад к клубу
                </Link>
                <Link
                    className="mt-3 back-stack d-flex d-lg-none align-items-center "
                    to={"/club"}>
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
                    Назад к клубу
                </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className=" top-info-playerIn">
                    {playerIn.id >97 ?(
                        <img className="playerIn-img-main" src={playerIn.image} alt="//"/>
                    ):(
                        <img className="playerIn-img-main" src={playerIn.mainImage} alt="//"/>
                    )}

                    {playerIn.id <97 &&(
                        <div className="playerIn-number">{playerIn.number}</div>
                    )}

                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    <div className="playerIn-name mb-2">{playerIn.name}</div>
                    <div className="playerIn-position ">{playerIn.position}</div>
                    <div className="playerIn-position mb-2">{playerIn.dateBirthday}</div>
                    <div className="d-flex playerIn-data">
                        {playerIn.id <= 97 && (
                            <>
                                <div className="playerIn-data">Рост <br/>{playerIn.height}</div>
                                <div className="playerIn-data">Вес <br/>{playerIn.weight}</div>
                                <div className="playerIn-data">Страна <br/>{playerIn.country}</div>
                                <div className="playerIn-data">Хват <br/>{playerIn.grip}</div>
                            </>
                        )}
                    </div>
                </div>
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    {playerIn.id >= 97   ? (
                        <h4>Информация о сотруднике</h4>
                    ):(
                        <h4>Информация о игроке</h4>
                    )}


                    {!showDes ?(
                        <>
                            <div className="playerIn-data col-8 mb-2">{playerIn.shortPersonalInfo}...</div>
                            <div onClick={() => setShowDes(!showDes)}>
                                <div className="show-close d-flex align-items-center mb-3">
                                    Подробнее
                                    <span className="material-icons-outlined">
                                          expand_more
                                    </span>
                                </div>
                            </div>
                        </>

                    ):(
                        <>
                            <div className="playerIn-data col-8 mb-2">{playerIn.personalInfo}</div>
                            <div onClick={() => setShowDes(!showDes)}>
                                <div className="show-close d-flex align-items-center mb-3">
                                    Убрать
                                    <span className="material-icons-outlined">
                                           expand_less
                                    </span>
                                </div>
                            </div>
                        </>
                        )}

                </div>
                {playerIn.id <97 &&(
                    <div>
                        <h5 className="d-flex justify-content-center">Регулярный чемпионат 2021/22</h5>
                        {playerIn.position !== "Вратарь" ? (
                            <div className="d-flex regular-statist justify-content-center">
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Игр <p>{playerIn.games}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Голов <p>{playerIn.goals}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Передач<p>{playerIn.assist}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Очков <p>{playerIn.score}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Штраф.мин <p>{playerIn.boxTime}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">+ / - <p>{playerIn.plusMinus}</p> </div>
                            </div>
                        ):(
                            <div className="d-flex regular-statist justify-content-center">
                                <div className="col-3  playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Игр <p>{playerIn.games}</p> </div>
                                <div className="col-3   playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Побед <p>{playerIn.wins}</p> </div>
                                <div className="col-3  playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">% Сейвов<p>{playerIn.saves}</p> </div>
                                <div className="col-3   playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Надежность <p>{playerIn.safety}</p> </div>
                                <div className="col-3  playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Сухих игр <p>{playerIn.DryGames}</p> </div>
                            </div>
                        )}

                    </div>
                )}
            </div>


        </div>

    );
};

export default PlayerIn;
