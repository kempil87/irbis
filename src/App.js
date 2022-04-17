import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {HomePages} from "./pages/HomePages/HomePages";
import {Championship} from "./pages/HomePages/Championship/Championship";
import {Club} from "./pages/HomePages/Club/Club"
import {News} from "./pages/HomePages/News/News";
import {Partners} from "./pages/HomePages/Partners/Partners";
import {Shop} from "./pages/HomePages/Shop/Shop";
import {Media} from "./pages/HomePages/Media/Media";
import {Footer} from "./components/Footer/Footer"
import {Menu} from "./components/Menu/Menu";
import React, {useState} from "react";
import ClubPage from "./pages/main/ClubPage";
import MediaPage from "./pages/main/MediaPage";
import PlayerIn from "./pages/Players/PlayerIn";

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
                    <Route path="/news" element={<News/>}/>
                    <Route path="/media:id" element={<MediaPage/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/partners" element={<Partners/>}/>
                </Routes>
            </div>
            <Footer/>
            {openMenu && (
                <Menu closeMenu={() =>setOpenMenu(false)} />
            )}
        </div>

    )
}

export default App;
