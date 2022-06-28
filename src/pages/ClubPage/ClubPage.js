import React, {useEffect, useState} from 'react';
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./ClubPage.css"
import {api} from "../../base/axios";
import Loader from "../../components/Loader/Loader";

const ClubPage = () => {

  const [Players, setPlayers] = useState([]);
  const [loader, setLoader] = useState(true);

  const goalkepper = Players.filter(i => i.position === "Вратарь")
  const guard = Players.filter(i => i.position === "Защитник")
  const forward = Players.filter(i => i.position === "Нападающий")
  const coach = Players.filter(i => i.job === "Тренер")
  const management = Players.filter(i => i.job === "Руководитель")

  const getTopPlayers = () => {
    api.get('/club').then((res) => {
      setPlayers(res.data)
      setLoader(false)
    })
  }

  useEffect(() => {
    getTopPlayers()
  }, [])


  return (
    <div className="clubPage-wrap">
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="d-flex flex-column">
            <Col className="">
              <Nav variant="pills" className="">
                <div className="d-flex  justify-content-between align-items-center">
                  <div className="tabs d-flex flex-column flex-lg-row">
                    <div className="tabitem mt-2">
                      <Nav.Item>
                        <Nav.Link className="tabs-club-link" eventKey="first">Состав</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div className="tabitem mt-2">
                      <Nav.Item>
                        <Nav.Link className="tabs-club-link" eventKey="second">Тренерский штаб </Nav.Link>
                      </Nav.Item>
                    </div>
                    <div className="tabitem mt-2">
                      <Nav.Item>
                        <Nav.Link className="tabs-club-link" eventKey="third">Руководство Клуба</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div className="tabitem mt-2">
                      <Nav.Item>
                        <Nav.Link className="tabs-club-link" eventKey="fourth">О Клубе</Nav.Link>
                      </Nav.Item>
                    </div>
                  </div>
                </div>
              </Nav>
            </Col>
            {loader ? (
                <Loader/>
              ):(
                <Col className="mb-5">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 className="mt-4 " style={{color: '#2db5ba', fontSize: 25, marginBottom: 0}}>Вратари</h5>
                      <div className="d-flex  flex-wrap ">
                        {goalkepper.map((i, index) => (
                          <Link to={`/club/${i._id}`} className="d-flex col-12 col-lg-3 justify-content-center"
                                key={i._id}>
                            <div className=" top-info-allPlayer">
                              <img className="player-img" src={i.image} alt="//"/>
                              <img className="player-img-main" src={i.mainImage} alt="//"/>
                              <div className="player-name mb-2">{i.name}</div>
                              <div className="player-number">{i.number}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <h5 className="mt-4 " style={{color: '#2db5ba', fontSize: 25, marginBottom: 0}}>Защитники</h5>
                      <div className="d-flex  flex-wrap">
                        {guard.map((i, index) => (
                          <Link to={`/club/${i._id}`} className="d-flex col-12 col-lg-3 justify-content-center"
                                key={i._id}>
                            <div className=" top-info-allPlayer">
                              <img className="player-img" src={i.image} alt="//"/>
                              <img className="player-img-main" src={i.mainImage} alt="//"/>
                              <div className="player-name mb-2">{i.name}</div>
                              <div className="player-number">{i.number}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <h5 className="mt-4 " style={{color: '#2db5ba', fontSize: 25, marginBottom: 0}}>Нападающие</h5>
                      <div className="d-flex flex-wrap" style={{maxWidth: '100%'}}>
                        {forward.map((i, index) => (
                          <Link to={`/club/${i._id}`} className="d-flex col-12 col-lg-3 justify-content-center"
                                key={i._id}>
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
                      <div className="d-flex flex-wrap">
                        {coach.map((i, index) => (
                          <Link to={`/club/${i._id}`} className="d-flex col-12 col-lg-3 justify-content-center"
                                key={i._id}>
                            <div className=" top-info-allPlayer">
                              <img className="player-img" src={i.image} alt="//"/>
                              <div className="player-name mb-2">{i.name}</div>
                              <div className="player-position col-10">{i.position}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="d-flex flex-wrap ">
                        {management.map((i, index) => (
                          <Link to={`/club/${i._id}`} className="d-flex col-12 col-lg-3 justify-content-center"
                                key={i._id}>
                            <div className=" top-info-allPlayer">
                              <img className="player-img" src={i.image} alt="//"/>
                              <div className="player-name mb-2">{i.name}</div>
                              <div className="player-position col-10">{i.position}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className=" mt-2">
                        <h6 style={{color: "lemonchiffon"}}>Профессиональный флорбольный клуб «Ирбис»</h6>
                        <h6 style={{color: "lemonchiffon"}}>Победитель Первой лиги чемпионата России, сезон
                          2021-2022</h6>
                        <h6 style={{color: "lemonchiffon"}}>Клуб был основан в 2021 году</h6>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              )}
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default ClubPage;
