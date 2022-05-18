import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {PlayersCardInfo} from "../../data/allPlayers/PlayersCardInfo";
import "./PlayerIn.css"
import {api} from "../../base/axios";

const PlayerIn = () => {
    const {_id} = useParams()
    // const playerIn = PlayersCardInfo.find(s => s.id === +id)

    const [showDes, setShowDes] = useState(false);
    const [playersIn, setPlayersIn] = useState([]);


    const getTopPlayers = () => {
        api.get(`/club/${_id}`).then((res) => {
            setPlayersIn(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getTopPlayers()
    }, [_id])



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
                    {playersIn.number > 0  ?(
                      <img className="playerIn-img-main" src={playersIn.mainImage} alt="//"/>
                    ):(

                        <img className="playerIn-img-main" src={playersIn.image} alt="//"/>
                    )}

                    {playersIn.number > 0  &&(
                        <div className="playerIn-number">{playersIn.number}</div>
                    )}

                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    <div className="playerIn-name mb-2">{playersIn.name}</div>
                    <div className="playerIn-position ">{playersIn.position}</div>
                    <div className="playerIn-position mb-2">{playersIn.dateBirthday}</div>
                    <div className="d-flex playerIn-data">
                        {playersIn.number >0 && (
                            <>
                                <div className="playerIn-data">Рост <br/>{playersIn.height}</div>
                                <div className="playerIn-data">Вес <br/>{playersIn.weight}</div>
                                <div className="playerIn-data">Страна <br/>{playersIn.country}</div>
                                <div className="playerIn-data">Хват <br/>{playersIn.grip}</div>
                            </>
                        )}
                    </div>
                </div>
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    {playersIn.number >0   ? (
                        <h4>Информация о сотруднике</h4>
                    ):(
                        <h4>Информация о игроке</h4>
                    )}


                    {!showDes ?(
                        <>
                            <div className="playerIn-data col-8 mb-2">{playersIn.shortPersonalInfo}...</div>
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
                            <div className="playerIn-data col-8 mb-2">{playersIn.personalInfo}</div>
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
                {playersIn.number >0  &&(
                    <div>
                        <h5 className="d-flex justify-content-center">Регулярный чемпионат 2021/22</h5>
                        {playersIn.position !== "Вратарь" ? (
                            <div className="d-flex regular-statist justify-content-center">
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Игр <p>{playersIn.games}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Голов <p>{playersIn.goals}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Передач<p>{playersIn.assist}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Очков <p>{playersIn.score}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Штраф.мин <p>{playersIn.boxTime}</p> </div>
                                <div className="col-3 col-lg-2 playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">+ / - <p>{playersIn.plusMinus}</p> </div>
                            </div>
                        ):(
                            <div className="d-flex regular-statist justify-content-center">
                                <div className="col-3  playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Игр <p>{playersIn.games}</p> </div>
                                <div className="col-3   playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Побед <p>{playersIn.wins}</p> </div>
                                <div className="col-3  playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">% Сейвов<p>{playersIn.saves}</p> </div>
                                <div className="col-3   playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Надежность <p>{playersIn.safety}</p> </div>
                                <div className="col-3  playerIn-data m-2 d-flex flex-column text-center justify-content-center align-items-center">Сухих игр <p>{playersIn.DryGames}</p> </div>
                            </div>
                        )}

                    </div>
                )}
            </div>


        </div>

    );
};

export default PlayerIn;
