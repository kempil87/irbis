import React from 'react';
import {useParams} from "react-router-dom";
import {PlayersCardInfo} from "../../data/allPlayers/PlayersCardInfo";

const PlayerIn = () => {
    const {id} = useParams()
    const playerIn = PlayersCardInfo.find(s => s.id === +id)

    return (
        <div className="d-flex justify-content-center align-items-center" style={{background:'#000'}}>
            {!playerIn.position   ? (
                <div className=" top-info-player">
                    <img className="player-img" src={playerIn.image} alt="//"/>
                    <img className="player-img-main" src={playerIn.mainImage} alt="//"/>
                    <div className="player-name mb-2">{playerIn.name}</div>
                    <div className="player-number">{playerIn.number}</div>
                </div>
            ):(
                <div className=" top-info-player">
                    <img className="player-img" src={playerIn.image} alt="//"/>
                    <img className="player-img-main" src={playerIn.mainImage} alt="//"/>
                    <div className="player-name mb-2">{playerIn.name}</div>
                    <div className="player-position ">{playerIn.position}</div>
                </div>
            )}


        </div>
    );
};

export default PlayerIn;
