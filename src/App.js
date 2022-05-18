import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {HomePages} from "./pages/HomePage/HomePages";
import {Championship} from "./components/Championship/Championship";
import {Partners} from "./components/Partners/Partners";
import {Footer} from "./components/Footer/Footer"
import {Menu} from "./components/Menu/Menu";
import React, {useEffect, useState} from "react";
import ClubPage from "./pages/ClubPage/ClubPage";
import MediaPage from "./pages/MediaPage/MediaPage";
import PlayerIn from "./pages/PlayerIn/PlayerIn";
import MediaPageIn from "./pages/MediaPageIn/MediaPageIn";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsIn from "./pages/NewsIn/NewsIn";
import Error from "./components/Error/Error";
import ShopPageIn from "./pages/ShopPageIn/ShopPageIn";
import PartnersIn from "./pages/PartnersIn/PartnersIn";
import {ShopPage} from "./pages/ShopPage/ShopPage";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    const [openMenu,setOpenMenu] = useState(false)

    return (
        <div className="App d-flex flex-column flex-fill">
            <Header showMenu={()=> setOpenMenu(true)}/>

            <div className="flex-fill">
                <Routes>
                  <Route path="/" element={<HomePages/>}/>
                  <Route path="/championship" element={<Championship/>}/>
                  <Route path="/club/:_id" element={<PlayerIn/>}/>
                  <Route path="/club" element={<ClubPage/>}/>
                  <Route path="/news" element={<NewsPage/>}/>
                  <Route path="/news:_id" element={<NewsIn/>}/>
                  <Route path="/media:id" element={<MediaPageIn/>}/>
                  <Route path="/media" element={<MediaPage/>}/>
                  <Route path="/shop" element={<ShopPage/>}/>
                  <Route path="/shop:_id" element={<ShopPageIn/>}/>
                  <Route path="/partners" element={<PartnersIn/>}/>
                  <Route path="/404" element={<Error/>}/>
                  <Route
                    path="*"
                    element={<Navigate to="/404" replace />}
                  />
                </Routes>
            </div>
            <Partners/>
            <Footer/>
            {openMenu && (
                <Menu closeMenu={() =>setOpenMenu(false)} />
            )}
        </div>

    )
}

export default App;
