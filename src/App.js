import './App.css';
import {Header} from "./components/Header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePages} from "./pages/HomePages/HomePages";
import {Championship} from "./pages/HomePages/Championship/Championship";
import {Partners} from "./pages/HomePages/Partners/Partners";
import {Shop} from "./pages/HomePages/Shop/Shop";
import {Footer} from "./components/Footer/Footer"
import {Menu} from "./components/Menu/Menu";
import React, {useState} from "react";
import ClubPage from "./pages/main/ClubPage";
import MediaPage from "./pages/main/MediaPage";
import PlayerIn from "./pages/mainIn/PlayerIn";
import MediaPageIn from "./pages/mainIn/MediaPageIn";
import NewsPage from "./pages/main/NewsPage";
import NewsIn from "./pages/mainIn/NewsIn";
import Error from "./components/Error/Error";
import ShopPage from "./pages/main/ShopPage";
import PartnersIn from "./pages/mainIn/PartnersIn";

function App() {

    const [openMenu,setOpenMenu] = useState(false)



    return (
        <div className="App  d-flex flex-column flex-fill">
            <Header showMenu={()=> setOpenMenu(true)}/>

            <div className=" flex-fill body-content ">
                <Routes>
                    <Route path="/" element={<HomePages/>}/>
                    <Route path="/championship" element={<Championship/>}/>
                    <Route path="/club:id" element={<PlayerIn/>}/>
                    <Route path="/club" element={<ClubPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/news:id" element={<NewsIn/>}/>
                    <Route path="/media:id" element={<MediaPageIn/>}/>
                    <Route path="/media" element={<MediaPage/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/shop:id" element={<ShopPage/>}/>
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
