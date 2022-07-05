import React from 'react'
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

function Path() {
  return (
    <div>
    <BrowserRouter>
      <PageBugFix>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path="/dashboard/add" element={<DashboardAdd/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/search' element={<AllSearch/>}/>
        <Route path='/nikesupport' element={<Chatbot/>}/>
        <Route path='/myorders/:id' element={<ViewDelivery/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/checking' element={<More/>}/>
        <Route path='/refund' element={<RefundRequests/>}/>
        <Route path='/orderupdate' element={<OrderUpdates/>}/>
        <Route path='/refundstatus/:refundid' element={<RefundStatus/>}/>
        <Route path='/orderstatus/:id' element={<OrderStatus/>}/>
        <Route path='/subscription' element={<Sub/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/nextstep/:id" element={<NormalProduct/>}/>
        <Route path='/allsection/mainadd' element={<NormalProductAdd/>}/>
        <Route path="/most/:id" element={<MostPopularViewing/>}/>
        <Route path='/AirJordanXXXVI' element={<AirJordan/>}/>
        <Route path='/section/:option' element={<ShowCategory/>}/>
        <Route path='/mostpopular/:gender' element={<Category/>}/>
        <Route path='/update/product/:id' element={<UpdateProduct/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/nextsteps/:id' element={<NormalProductViewing/>}/>
        <Route path='/update/productnormal/:id' element={<UpdateNormalProductService/>}/>
        <Route path='/Jordan' element={<MainJordan/>}/>
        <Route path='/paymentoptions' element={<PaymentOptions/>}/>
        <Route path='*' element={<Dashboard/>}/>
      </Routes>
      </PageBugFix>
    </BrowserRouter>
        
    </div>
  )
}

export default Path