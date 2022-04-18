import React from 'react';
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SnipersData} from "../../data/SnipersData";
import "./ClubPage.css"
import {Goalkeper} from "../../data/allPlayers/Goalkeper";
import {Guard} from "../../data/allPlayers/Guard";
import {Forward} from "../../data/allPlayers/Forward";

const ClubPage = () => {

    return (
        <div className="clubPage-wrap ">
            <div className="container ">
                <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
                    <Row className="d-flex flex-column">
                        <Col >
                            <Nav variant="pills" className="flex-column">
                                <div className="d-flex justify-content-between">
                                    <div className="tabs d-flex">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Состав</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Тренерский штаб </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Руководство Клуба</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                    <Link to="/club" className="all-players">
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
                                    <h5>Вратари</h5>
                                    <div className="d-flex justify-content-between flex-wrap">
                                        {Goalkeper.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex " key={i.id}>
                                                <div className=" top-info-player">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-number">{i.number}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <h5>Защитники</h5>
                                    <div className="d-flex justify-content-between flex-wrap">
                                        {Guard.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex " key={i.id}>
                                                <div className=" top-info-player">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-number">{i.number}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <h5>Нападающие</h5>
                                    <div className="d-flex justify-content-between flex-wrap">

                                        {Forward.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex " key={i.id}>
                                                <div className=" top-info-player">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-number">{i.number}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="d-flex justify-content-between">
                                        {Goalkeper.map((i, index) => (
                                            <div className="d-flex  " key={i.id}>
                                                <div className=" top-info-player">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    {/*<img className="player-img-main" src={i.mainImage} alt="//"/>*/}
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-number">{i.number}</div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="d-flex justify-content-between">
                                        {Goalkeper.map((i, index) => (
                                            <div className="d-flex " key={i.id}>
                                                <div className=" top-info-player">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    {/*<div className="player-number">{i.number}</div>*/}
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
    );
};

export default ClubPage;
