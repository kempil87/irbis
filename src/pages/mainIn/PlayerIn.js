import React from 'react';
import {useParams} from "react-router-dom";
import {SnipersData} from "../../data/SnipersData";

const PlayerIn = () => {
    const {id} = useParams()
    const sniper = SnipersData.find(s => s.id === +id)

    return (
        <div>
            <div className=" top-info-player">
                <img className="player-img" src={sniper.image} alt="//"/>
                <img className="player-img-main" src={sniper.mainImage} alt="//"/>
                <div className="player-name mb-2">{sniper.name}</div>
                <div className="player-number">{sniper.number}</div>
            </div>

        </div>
    );
};

export default PlayerIn;
