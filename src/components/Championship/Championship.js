import React, {useEffect, useState} from "react";
import "./Championship.css"
import {Link} from "react-router-dom";
import TableChamp from "../../helper/table/TableChamp";
import {api} from "../../base/axios";
import Loader from "../Loader/Loader";
import Prompt from "../../helper/prompt/Prompt";
import {CSSTransition} from "react-transition-group";


export const Championship = () => {
  const [matchDay, setMatchDay] = useState([]);
  const [loader, setLoader] = useState(true);
  const [prompt, setPrompt] = useState(false);

  const getMatch = () => {
    api.get('/championship').then((res) => {
      setMatchDay(res.data.slice(0, 2).reverse())
      setLoader(false)
    })
  }

  useEffect(() => {
    getMatch()
  }, [])

  return (
    <div className="champ-wrap pb-5">
      {loader ? (<Loader/>) : (
        <div className="d-flex flex-column flex-lg-row justify-content-between">
          <div className='col-12 col-lg-6 mt-4 container pb-5'>
            {/*<div className="next-game ">*/}
            {/*  <div className="d-flex align-items-center">*/}
            {/*    <h5> СЛЕДУЮЩИЙ МАТЧ</h5>*/}
            {/*    <img className="irbis-logo-game"*/}
            {/*         src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <h6>Информация о следующем матче появится в ближайшее время<br/>*/}
            {/*    Следите за нашими новостями</h6>*/}
            {/*</div>*/}
            {matchDay.map((match) => (
              <div key={match._id} className={match.value === 'Предыдущий' ? 'prev-game' : 'prev-game-light'}

              >
                <h5 className='text-uppercase'>{match.value} матч</h5>
                <div className="d-flex justify-content-around mt-2">
                  <div className="home-team">
                    <img className="logo-game-prev"
                         src={match.homeLogo}
                         alt='logo-game-prev'
                    />
                    <div className="team-name">{match.homeTeam}</div>
                    <div className="team-city">{match.homeCity}</div>
                  </div>

                  <div className="game-info">
                    <div className="game-date">
                      <span className="material-icons-outlined">today</span>
                      {match.date}
                    </div>
                    <div className="game-score">{match.scoreHome} : {match.scoreGuest}</div>
                    <div className="game-league">{match.league}</div>
                    <div className="game-place">
                      {/*<span className="material-icons-outlined">location_on</span>*/}
                      {match.place}
                    </div>
                    <div className="game-link-wrap">
                      {match.photo && (
                        <Link className="d-flex flex-column game-link" to={`/media/${match.photo}`}>
                          <span className="material-icons-outlined">photo_camera</span>
                          <h6>Фото</h6>
                        </Link>
                      )}
                      {match.video && (
                        <a className="d-flex flex-column game-link" target="_blank" href={`${match.video}`}>
                          <span className="material-icons-outlined">live_tv</span>
                          <h6>Трансляция</h6>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="guest-team">
                    <img className="logo-game-prev"
                         src={match.guestLogo}
                         alt='logo-game-prev'
                    />
                    <div className="team-name text-uppercase">{match.guestTeam}</div>
                    <div className="team-city">{match.guestCity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 container d-flex justify-content-center flex-column">
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
      )}
      <div className='prompt'>
        {!prompt ? (
          <>
            <div onClick={() => setPrompt(true)} style={{color: "white", cursor: "pointer"}}
                 className='d-flex align-items-center justify-content-center'>
              Развернуть подсказку
              {/*<span className="material-symbols-outlined">expand_more</span>*/}
            </div>
          </>
        ) : (
          <div onClick={() => setPrompt(false)} style={{color: "white", cursor: "pointer"}}
               className='d-flex align-items-center justify-content-center'>
            Свернуть подсказку
            {/*<span className="material-symbols-outlined">expand_less</span>*/}
          </div>
        )}
          <Prompt prompt={prompt} setPrompt={setPrompt}/>
      </div>
    </div>
  )
}
