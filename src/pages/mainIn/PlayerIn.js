import React from 'react';
import {useParams} from "react-router-dom";
import {PlayersCardInfo} from "../../data/allPlayers/PlayersCardInfo";

const PlayerIn = () => {
    const {id} = useParams()
    const sniper = PlayersCardInfo.find(s => s.id === +id)

    return (
        <div className="d-flex justify-content-center align-items-center" style={{background:'#000'}}>
            {sniper.id <99 ? (
                <div className=" top-info-player">
                    <img className="player-img" src={sniper.image} alt="//"/>
                    <img className="player-img-main" src={sniper.mainImage} alt="//"/>
                    <div className="player-name mb-2">{sniper.name}</div>
                    <div className="player-number">{sniper.number}</div>
                </div>
            ):(
                <div className=" top-info-player">
                    <img className="player-img" src={sniper.image} alt="//"/>
                    <img className="player-img-main" src={sniper.mainImage} alt="//"/>
                    <div className="player-name mb-2">{sniper.name}</div>
                </div>
            )}


        </div>
    );
};

export default PlayerIn;
