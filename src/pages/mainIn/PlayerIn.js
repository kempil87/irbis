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
                    className="mt-3 back-stack d-flex align-items-center justify-content-center"
                    to={"/club"}>
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
                    Назад к команде
                </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className=" top-info-playerIn">
                    <img className="playerIn-img-main" src={playerIn.mainImage} alt="//"/>
                    <div className="playerIn-number">{playerIn.number}</div>
                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    <div className="playerIn-name mb-2">{playerIn.name}</div>
                    <div className=" mb-2">{playerIn.position}</div>
                    <div className="mb-2">{playerIn.dateBirthday}</div>
                    <div className="d-flex playerIn-data">
                        <div className="">Рост <br/>{playerIn.height}</div>
                        <div className="">Вес <br/>{playerIn.weight}</div>
                        <div className="">Страна <br/>{playerIn.country}</div>
                        <div className="">Хват <br/>{playerIn.grip}</div>
                    </div>
                    <div className="mb-2">{playerIn.dateBirthday}</div>
                </div>
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    <h4>Информация о игроке</h4>
                    {!showDes ?(
                        <>
                            <div className="col-8 mb-2">{playerIn.shortPersonalInfo}...</div>
                            <div onClick={() => setShowDes(!showDes)}>
                                <div className="show-close d-flex align-items-center">
                                    Подробнее
                                    <span className="material-icons-outlined">
                                          expand_more
                                    </span>
                                </div>
                            </div>
                        </>

                    ):(
                        <>
                            <div className="col-8 mb-2">{playerIn.personalInfo}</div>
                            <div onClick={() => setShowDes(!showDes)}>
                                <div className="show-close d-flex align-items-center">
                                    Убрать
                                    <span className="material-icons-outlined">
                                           expand_less
                                    </span>
                                </div>
                            </div>
                        </>
                        )}

                </div>
            </div>


        </div>

    );
};

export default PlayerIn;
