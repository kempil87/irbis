import './App.css';
import {Header} from "./components/Header/Header";
import {Navigate, Redirect, Route, Routes} from "react-router-dom";
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
import {useLocation} from "react-router";
import {OrdersPage} from "./pages/OrdersPage/OrdersPage";
import {CssBaseline} from "@mui/material";
import Registration from "./pages/Auth/Registration";
import Auth from "./pages/Auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import {authSlice} from "../src/redux/reducers/AuthSlice";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [openMenu, setOpenMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const [cartItems, setCartItems] = useState([
    // {
    //   id: 10001,
    //   image: "https://sun1-87.userapi.com/impg/zN1Hn4MJo6C06cmB1TdBLdmOL5WpdoqXRPudhg/jM4HTfzIYUg.jpg?size=0x179&crop=0.176,0.071,0.62,0.929&quality=95&sign=3e128d0dca531d39698f098a117b3690",
    //   price: 3200,
    //   name: "Футболка ФБК Ирбис",
    //   badge: "Хит продаж",
    //   salePrice:''
    // },
    // {
    //   id: 10001,
    //   image: "https://sun1-87.userapi.com/impg/zN1Hn4MJo6C06cmB1TdBLdmOL5WpdoqXRPudhg/jM4HTfzIYUg.jpg?size=0x179&crop=0.176,0.071,0.62,0.929&quality=95&sign=3e128d0dca531d39698f098a117b3690",
    //   price: 5200,
    //   name: "Футболка ФБК Ирбис",
    //   badge: "Хит продаж",
    //   salePrice:'4000'
    // }
  ])

  const token = useSelector(state => state.authReducer.token)
  const dispatch = useDispatch()

  const {authToken} = authSlice.actions
  const isAuth = () => {
    const t = localStorage.getItem("token")
    if (t){
      // dispatch({type: "ADD_TOKEN", payload: t})
      dispatch(authToken(t))
    }
  }


  useEffect(() =>{
    isAuth()
  },[])



  return (
    <div className={showCart ? 'App d-flex flex-column flex-fill overflow-hidden' : 'App d-flex flex-column flex-fill'}>

      <CssBaseline />
      {token ? (
        <>
          <Header  showMenu={() => setOpenMenu(true)}/>

          <div className="flex-fill">
            <Routes>
              <Route path="/irbis" element={<HomePages/>}/>
              <Route path="/championship" element={<Championship/>}/>
              <Route path="/club/:_id" element={<PlayerIn/>}/>
              <Route path="/club" element={<ClubPage/>}/>
              <Route path="/news" element={<NewsPage/>}/>
              <Route path="/news/:_id" element={<NewsIn/>}/>
              <Route path="/media/:_id" element={<MediaPageIn/>}/>
              <Route path="/media" element={<MediaPage/>}/>
              <Route path="/shop/orders" element={<OrdersPage/>}/>
              <Route path="/shop" element={<ShopPage/>}/>
              <Route path="/shop/:_id" element={<ShopPageIn/>}/>
              <Route path="/partners" element={<PartnersIn/>}/>
              <Route path="/404" element={<Error/>}/>
            </Routes>
          </div>
          <Partners/>
          <Footer/>
          {openMenu && (
            <Menu closeMenu={() => setOpenMenu(false)}/>
          )}
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/registration" element={<Registration/>}/>
          {/*<Route path="*"*/}
          {/*       element={<Navigate replace state={{from: location}} to="/"/>}*/}
          {/*/>*/}
        </Routes>
      )}
    </div>

  )
}

export default App;
