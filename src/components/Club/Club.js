import React, {useEffect, useState} from "react";
import "./Club.css"
import {Col, Nav, Row, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";
import {api} from "../../base/axios";
import Loader from "../Loader/Loader";

export const Club = () => {
  const [assists, setAssists] = useState([]);
  const [snipers, setSnipers] = useState([]);
  const [loader, setLoader] = useState(true);


  const getTopPlayers = () => {
    api.get('/club').then((res) => {
      setAssists(res.data.slice(0, 4).sort((a, b) => Number(b?.assist) - Number(a?.assist)).filter((n) => n.position !=='Вратарь'))
      setSnipers(res.data.slice(0, 4).sort((a, b) => Number(b?.goals) - Number(a?.goals)).filter((n) => n.position !=='Вратарь'))
      setLoader(false)
    })
  }



  useEffect(() => {
    getTopPlayers()
  }, [])

  return (
    <>
      <div className="club-wrap">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
              {loader ? (
                <Loader/>
              ) : (
                <Col>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="d-flex mb-4 best-players-wrap">
                        {snipers.map((i, index) => (
                          <div className="d-flex col-sm-6 col-lg-3 best-players justify-content-center" key={i._id}>
                            <Link to={`/club/${i._id}`} className="top-info-player">
                              <img className="player-img" src={i.image} alt="//"/>
                              {i.mainImage ?(
                                <img className="player-img-main" src={i.mainImage} alt="//"/>
                              ):(
                                <img className="player-img-main" src='https://www.ak-bars.ru/img/placeholders/player-card-placeholder.png' alt=""/>
                              )}
                              <div className="player-name mb-2">{i.name}</div>
                              <div className="player-number">{i.number}</div>
                              <div className="player-games mb-2">И<br/>{i.games}</div>
                              <div className="player-goal mb-2">Г<br/>{i.goals}</div>
                              <div className="player-assist mb-2">А<br/>{i.assist}</div>
                              <div className="player-score mb-2">О<br/>{i.score}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="d-flex mb-4  best-players-wrap">
                        {assists.map((i, index) => (
                          <div className="d-flex col-sm-6 col-lg-3 best-players justify-content-center" key={i._id}>
                            <Link to={`/club/${i._id}`} className=" top-info-player">
                              <img className="player-img" src={i.image} alt="//"/>
                              {i.mainImage ? (
                                <img className="player-img-main" src={i.mainImage} alt=""/>
                              ):(
                                <img className="player-img-main" src='https://www.ak-bars.ru/img/placeholders/player-card-placeholder.png' alt=""/>
                              )}
                              <div className="player-name mb-2">{i.name}</div>
                              <div className="player-number">{i.number}</div>
                              <div className="player-games mb-2">И<br/>{i.games}</div>
                              <div className="player-goal mb-2">Г<br/>{i.goals}</div>
                              <div className="player-assist mb-2">А<br/>{i.assist}</div>
                              <div className="player-score mb-2">О<br/>{i.score}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              )}
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>

  )
}
