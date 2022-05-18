import React, {useEffect, useState} from "react";
import "./Club.css"
import {Col, Nav, Row, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SnipersData} from "../../data/allPlayers/SnipersData";
import {api} from "../../base/axios";

export const Club = () => {



    const [key, setKey] = useState('home');
    const [topPlayers, setTopPlayers] = useState([]);

    const snipers = topPlayers.sort((a, b) => a.goals - b.goals)
    const assists = topPlayers.sort((a, b) => a.assist - b.assist)

    const getTopPlayers = () => {
        api.get('/club').then((res) => {
            setTopPlayers(res.data.slice(0,4))
            console.log(res.data)
        })
    }

    useEffect(() => {
        getTopPlayers()
    }, [])

    return (
        <>
            <div className="club-wrap ">
                <div className="container ">
                    <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
                        <Row className="d-flex flex-column">
                            <Col className="mb-4">
                                <Nav variant="pills" className="flex-column">
                                    <div className="d-flex justify-content-between ">
                                        <div className="tabs d-none d-lg-flex mt-5">
                                            <h3 className="d-flex ">Топ Игроков</h3>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Снайперы</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Ассистенты</Nav.Link>
                                            </Nav.Item>
                                        </div>
                                        <div className="tabs d-flex d-lg-none mt-5 flex-column">
                                            <h3 className="d-flex ">Топ Игроков</h3>
                                            <div className="d-flex">
                                                <Nav.Item>
                                                    <Nav.Link className="topPlayers-tab" eventKey="first">Снайперы</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="topPlayers-tab" eventKey="second">Ассистенты</Nav.Link>
                                                </Nav.Item>
                                            </div>

                                        </div>
                                        <Link to="/club" className="all-players mt-5">
                                            Все игроки
                                            <span className="material-icons-outlined">
                                                <span className="material-icons-outlined">
                                                     arrow_right_alt
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </Nav>
                            </Col>
                            <Col  >
                                <Tab.Content >
                                    <Tab.Pane eventKey="first" >
                                        <div className="d-flex mb-4 best-players-wrap">
                                            {snipers.map((i,index) =>  (
                                              <div className="d-flex col-sm-6 col-lg-3 best-players justify-content-center" key={i.id}>
                                                    <Link to={`/club/${i._id}`} className=" top-info-player">
                                                        <img className="player-img" src={i.image} alt="//"/>
                                                        <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                        <div className="player-name mb-2">{i.name}</div>
                                                        <div className="player-number">{i.number}</div>
                                                        {i.position === "Вратарь" ?(
                                                          <>
                                                              <div className="player-games mb-2">И <br/>{i.games}</div>
                                                              <div className="player-goal mb-2">ОБ <br/>{i.goals}</div>
                                                              <div className="player-assist mb-2">% <br/>{i.assist}</div>
                                                              <div className="player-score mb-2">КН <br/>{i.score}</div>
                                                          </>
                                                        ):(
                                                          <>
                                                              <div className="player-games mb-2">И <br/>{i.games}</div>
                                                              <div className="player-goal mb-2">Г <br/>{i.goals}</div>
                                                              <div className="player-assist mb-2">А <br/>{i.assist}</div>
                                                              <div className="player-score mb-2">О <br/>{i.score}</div>
                                                          </>
                                                        )}
                                                    </Link>
                                              </div>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="d-flex mb-4  best-players-wrap">
                                            {assists.map((i,index) => (
                                                <div className="d-flex col-sm-6 col-lg-3 best-players justify-content-center" key={i.id}>
                                                    <Link to={`/club${i._id}`}  className=" top-info-player">
                                                        <img className="player-img" src={i.image} alt="//"/>
                                                        {/*<img className="player-img-main" src={i.mainImage} alt="//"/>*/}
                                                        <div className="player-name mb-2">{i.name}</div>
                                                        <div className="player-number">{i.number}</div>
                                                        {i.position === "Вратарь" ?(
                                                            <>
                                                                <div className="player-games mb-2">И <br/>{i.games}</div>
                                                                <div className="player-goal mb-2">ОБ <br/>{i.goals}</div>
                                                                <div className="player-assist mb-2">% <br/>{i.assist}</div>
                                                                <div className="player-score mb-2">КН <br/>{i.score }</div>
                                                            </>
                                                        ):(
                                                            <>
                                                                <div className="player-games mb-2">И <br/>{i.games}</div>
                                                                <div className="player-goal mb-2">Г <br/>{i.goals}</div>
                                                                <div className="player-assist mb-2">А <br/>{i.assist}</div>
                                                                <div className="player-score mb-2">О <br/>{i.score }</div>
                                                            </>
                                                            )}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>


                </div>
            </div>
        </>

    )
}
