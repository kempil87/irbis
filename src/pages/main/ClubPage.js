import React from 'react';
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SnipersData} from "../../data/allPlayers/SnipersData";
import "./ClubPage.css"
import {Goalkeper} from "../../data/allPlayers/Goalkeper";
import {Guard} from "../../data/allPlayers/Guard";
import {Forward} from "../../data/allPlayers/Forward";
import {Coaches} from "../../data/allPlayers/Coaches";
import {Management} from "../../data/allPlayers/Management";

const ClubPage = () => {

    return (
        <div className="clubPage-wrap">
            <div className="container">
                <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
                    <Row className="d-flex flex-column">
                        <Col >
                            <Nav variant="pills" className="flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="tabs d-flex">
                                        <Nav.Item>
                                            <Nav.Link className="tabs-club-link"  eventKey="first">Состав</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="tabs-club-link" eventKey="second">Тренерский штаб </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="tabs-club-link" eventKey="third">Руководство Клуба</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="tabs-club-link" eventKey="fourth">О Клубе</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                </div>
                            </Nav>
                        </Col>
                        <Col className="mb-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h5 className="mt-4 " style={{color:'#2db5ba',fontSize:25,marginBottom:0}}>Вратари</h5>
                                    <div className="d-flex  flex-wrap ">
                                        {Goalkeper.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex col-3 justify-content-center" key={i.id}>
                                                <div className=" top-info-allPlayer">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-number">{i.number}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <h5 className="mt-4 " style={{color:'#2db5ba',fontSize:25,marginBottom:0}}>Защитники</h5>
                                    <div className="d-flex  flex-wrap">
                                        {Guard.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex col-3 justify-content-center" key={i.id}>
                                                <div className=" top-info-allPlayer">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <img className="player-img-main" src={i.mainImage} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-number">{i.number}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <h5 className="mt-4 " style={{color:'#2db5ba',fontSize:25,marginBottom:0}}>Нападающие</h5>
                                    <div className="d-flex flex-wrap" style={{maxWidth:'100%'}}>
                                        {Forward.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex col-3 justify-content-center" key={i.id}>
                                                <div className=" top-info-allPlayer">
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
                                    <div className="d-flex">
                                        {Coaches.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex col-3 justify-content-center" key={i.id}>
                                                <div className=" top-info-allPlayer">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    {/*<img className="player-img-main" src={i.mainImage} alt="//"/>*/}
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-position col-10">{i.position}</div>

                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="d-flex ">
                                        {Management.map((i, index) => (
                                            <Link to={`/club${i.id}`} className="d-flex col-3 justify-content-center" key={i.id}>
                                                <div className=" top-info-allPlayer">
                                                    <img className="player-img" src={i.image} alt="//"/>
                                                    <div className="player-name mb-2">{i.name}</div>
                                                    <div className="player-position col-6">{i.position}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <div className=" mt-2">
                                        <h3>Профессиональный флорбольный клуб «Ирбис»</h3>
                                        <h3>Профессиональный флорбольный клуб «Ирбис»</h3>
                                        <h3>Профессиональный флорбольный клуб «Ирбис»</h3>
                                        <h3>Профессиональный флорбольный клуб «Ирбис»</h3>
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
