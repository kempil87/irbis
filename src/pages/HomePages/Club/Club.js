import React, {useState} from "react";
import "./Club.css"
import {Col, Nav, Row, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SnipersData} from "../../../data/SnipersData";

export const Club = () => {


    const [key, setKey] = useState('home');

    return (
        <>
            <div className="club-wrap ">
                <div className="container ">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col>
                                <Nav variant="pills" className="flex-column">
                                    <div className="d-flex justify-content-between">
                                        <div className="tabs d-flex mt-5">
                                            <h3 className="d-flex ">Топ Игроков</h3>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Снайперы</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Ассистенты</Nav.Link>
                                            </Nav.Item>
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
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="d-flex justify-content-between">
                                            {SnipersData.map((i,index) => (
                                                <Link to={`/club${i.id}`} className="d-flex  mt-3 " key={i.id}>
                                                    <div className=" top-info-player">
                                                        <img className="player-img" src={i.image} alt="//"/>
                                                        <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                        <div className="player-name mb-2">{i.name}</div>
                                                        <div className="player-number">{i.number}</div>
                                                        {index === 3 ?(
                                                            <>
                                                                <div className="player-games mb-2">И <br/>{i.games}</div>
                                                                <div className="player-goal mb-2">ОБ <br/>{i.goal}</div>
                                                                <div className="player-assist mb-2">% <br/>{i.assist}</div>
                                                                <div className="player-score mb-2">КН <br/>{i.score}</div>
                                                            </>
                                                        ):(
                                                            <>
                                                                <div className="player-games mb-2">И <br/>{i.games}</div>
                                                                <div className="player-goal mb-2">Г <br/>{i.goal}</div>
                                                                <div className="player-assist mb-2">А <br/>{i.assist}</div>
                                                                <div className="player-score mb-2">О <br/>{i.score}</div>
                                                            </>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="d-flex justify-content-between">
                                            {SnipersData.map((i,index) => (
                                                <div className="d-flex  mt-3 " key={i.id}>
                                                    <div className=" top-info-player">
                                                        <img className="player-img" src={i.image} alt="//"/>
                                                        {/*<img className="player-img-main" src={i.mainImage} alt="//"/>*/}
                                                        <div className="player-name mb-2">{i.name}</div>
                                                        <div className="player-number">{i.number}</div>
                                                        {index === 3 ?(
                                                            <>
                                                                <div className="player-games mb-2">И <br/>{i.games}</div>
                                                                <div className="player-goal mb-2">ОБ <br/>{i.goal}</div>
                                                                <div className="player-assist mb-2">% <br/>{i.assist}</div>
                                                                <div className="player-score mb-2">КН <br/>{i.score}</div>
                                                            </>
                                                        ):(
                                                            <>
                                                                <div className="player-games mb-2">И <br/>{i.games}</div>
                                                                <div className="player-goal mb-2">Г <br/>{i.goal}</div>
                                                                <div className="player-assist mb-2">А <br/>{i.assist}</div>
                                                                <div className="player-score mb-2">О <br/>{i.score}</div>
                                                            </>
                                                            )}
                                                    </div>
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
