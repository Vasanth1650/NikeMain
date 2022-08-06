import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardAdd from '../Pages/Dashboard/DashboardAdd';
import Login from '../Pages/Security/Login';
import Signup from '../Pages/Security/Signup';
import AllSearch from '../Pages/Search/AllSearch';
import Chatbot from '../Pages/ChatBot/Chatbot';
import ViewDelivery from '../Pages/MyOrders/ViewDelivery';
import More from '../Pages/MyOrders/More';
import RefundStatus from '../Pages/MyOrders/Status/RefudStatus';
import OrderStatus from '../Pages/MyOrders/Status/OrderStatus';
import RefundRequests from '../Pages/MyOrders/RefundRequests';
import OrderUpdates from '../Pages/MyOrders/OrderUpdates';
import Sub from '../Pages/Subscription/Sub';
import Checkout from '../Pages/Core/Checkout';
import NormalProduct from '../Pages/NormalProduct/NormalProduct';
import NormalProductAdd from '../Pages/NormalProduct/NormalProductAdd';
import MostPopularViewing from '../Pages/MostPopular/MostPopularViewing';
import AirJordan from '../Pages/Trending/AirJordan';
import ShowCategory from '../Pages/RedirectAllCategory/ShowCategory';
import Category from '../Pages/TrendingRedirect/Category';
import UpdateProduct from '../Pages/MostPopularService/UpdateProduct';
import PageBugFix from '../BugFixer/PageBugFix';
import Delivery from '../Pages/Delivery/Delivery';
import WishList from '../Pages/WishList/WishList';
import NormalProductViewing from '../Pages/NormalProducts/NormalProductViewing';
import UpdateNormalProductService from '../Pages/NormalProductService/UpdateNormalProductService';
import MainJordan from '../Pages/Jordan/MainJordan';
import PaymentOptions from '../Pages/Delivery/PaymentOptions';
import Livechat from '../Pages/LiveChat/Livechat';
import LiveChatAdmin from '../Pages/LiveChat/Support/LiveChatAdmin';
import Profile from '../Pages/Profile/Profile';
import UpdateProfile from '../Pages/Profile/ProfileService/UpdateProfile';
import Render from '../Pages/Subscription/SimpleRendering/Render';
import JordanHistory from '../Pages/Jordan/HistoryJordan/JordanHistory';
import Magic from '../Pages/Dashboard/ScrollMagic/Magic';
import Size from '../Pages/Size/Size';
import SizeTshirt from '../Pages/Size/SizeTshirt';
import AllSize from '../Pages/Size/AllSize';
import { fetchUserData } from '../Api/AuthenticationService';


function Path() {
  const [data,setData] = useState([])

  React.useEffect(()=>{
    fetchUserData().then((response)=>{
      setData(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
    <BrowserRouter>
      <PageBugFix>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>


        {data.roleCode==="ADMIN" &&
        <Route path="/dashboard/add" element={<DashboardAdd/>}/>}

        <Route path="/login" element={<Login/>}/>


        <Route path="/signup" element={<Signup/>}/>


        <Route path='/search' element={<AllSearch/>}/>


        <Route path='/nikesupport' element={<Chatbot/>}/>


        <Route path='/myorders/:id' element={<ViewDelivery/>}/>


        <Route path='/delivery' element={<Delivery/>}/>


        <Route path='/checking' element={<More/>}/>


        {data.roleCode==="ADMIN" &&
        <Route path='/refund' element={<RefundRequests/>}/>}


        {data.roleCode==="ADMIN" &&
        <Route path='/orderupdate' element={<OrderUpdates/>}/>}


        {data.roleCode==="ADMIN" &&
        <Route path='/refundstatus/:refundid' element={<RefundStatus/>}/>}


        {data.roleCode==="ADMIN" &&
        <Route path='/orderstatus/:id' element={<OrderStatus/>}/>}


        <Route path='/subscription' element={<Sub/>}/>


        <Route path='/checkout' element={<Checkout/>}/>


        <Route path="/nextstep/:id" element={<NormalProduct/>}/>


        <Route path='/allsection/mainadd' element={<NormalProductAdd/>}/>


        <Route path="/most/:id" element={<MostPopularViewing/>}/>


        <Route path='/AirJordanXXXVI' element={<AirJordan/>}/>


        <Route path='/section/:option' element={<ShowCategory/>}/>


        <Route path='/mostpopular/:gender' element={<Category/>}/>


        {data.roleCode==="ADMIN" &&
        <Route path='/update/product/:id' element={<UpdateProduct/>}/>}


        <Route path='/wishlist' element={<WishList/>}/>


        <Route path='/nextsteps/:id' element={<NormalProductViewing/>}/>

        {data.roleCode==="ADMIN" &&
        <Route path='/update/productnormal/:id' element={<UpdateNormalProductService/>}/>}


        <Route path='/Jordan' element={<MainJordan/>}/>


        <Route path='/paymentoptions' element={<PaymentOptions/>}/>


        <Route path='/livesupport' element={<Livechat/>}/>

        {data.roleCode==="ADMIN" &&
        <Route path='/admin/support' element={<LiveChatAdmin/>}/>}


        <Route path="/profile" element={<Profile/>}/>


        <Route path="/updateprofile" element={<UpdateProfile/>}/>


        <Route path='/render' element={<Render/>}/>


        <Route path='/jordanHistory' element={<JordanHistory/>}/>


        <Route path='/magic' element={<Magic/>}/>


        <Route path='/size' element={<Size/>}/>


        <Route path='/allsize' element={<AllSize/>}/>


        <Route path='/sizetops' element={<SizeTshirt/>}/>


        <Route path='*' element={<Dashboard/>}/>
        
      </Routes>
      </PageBugFix>
    </BrowserRouter>
        
    </div>
  )
}

export default Path