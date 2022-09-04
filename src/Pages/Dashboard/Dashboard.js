import React from 'react';
import * as BootStrap from 'react-bootstrap';
import "./Styles/Dashboard.css";
import "./Styles/Dashboard.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardService from './Service/DashboardService';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService'
import './Styles/DashboardAdd.css';
import Header from '../Headers/Header';
import Tees from '../TeesAndTops/Tees';
import Tops from '../TeesAndTops/Tops';
import Footer from '../Footer/Footer';
import Offer from '../Headers/Offers/Offer';
import RunningShoes from './Running/RunningShoes';
import Gender from './Gender/Gender';
import Magic from './ScrollMagic/Magic';
import Popular from './Popular/Popular';
import Trending from './Trending/Trending';



function Dashboard() {

    //Variables
    const usenavigate = useNavigate();
    const [hide,setHide] = useState("")
    const [check, setCheck] = useState('');
    const [searchl, setSearchl] = useState([]);
    const [roles, setRoles] = useState('')



    console.log(roles)



    useEffect(()=>{
        setTimeout(()=>{
            setHide("0")
        },10000)
    },[hide])







    return (
        <div className='body'>
            <Header />
            <Offer />
            <div className="jordan">

                <div className="jordan"></div>

                <Popular />

                <div><br /></div>
            </div>


            <Magic />


            <RunningShoes />


            <div className="jordan">
                <br /><br /><br />
                <Tees />
                <br /><br /><br /><br />
                <Tops />



                <Gender />

                <br /><br /><br /><br />



            </div>

            

            <div style={{backgroundColor:"white",textAlign:"center",cursor:"pointer",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}} >
                <div style={{display:"flex",paddingLeft:"15%",paddingRight:"10%",color:"black"}} onMouseMove={()=>setHide("1")}>
                    <div ><a href="/section/Men's Shoes" style={{color:"black"}}>Men's Shoes</a></div>
                    <div style={{marginLeft:"15%"}}><a href="/section/Men's Clothing" style={{color:"black"}}>Men's Clothing</a></div>
                    <div style={{marginLeft:"15%"}}><a href="/section/Gear" style={{color:"black"}}>Men's Gear</a></div>
                    <div style={{marginLeft:"15%"}}><a href="/section/Road Racing Shoes" style={{color:"black"}}>Men's Featured</a></div>
                </div>
                <br/>
                
                <div style={{color:'grey',paddingLeft:"15%",paddingRight:"10%",display:"flex"}} onMouseMove={()=>setHide("1")}>
                    <div><a href="/section/Running Clothing" style={{color:"grey"}}>Running</a></div>
                    <div style={{marginLeft:"18.2%"}}><a href="/section/Tops" style={{color:"grey"}}>Tops & T-Shirts</a></div>
                    <div style={{marginLeft:"15%"}}><a href="/section/Gear" style={{color:"grey"}}>All Men's Gear</a></div>
                    <div style={{marginLeft:"13%"}}><a href="/section/Just In" style={{color:"grey"}}>New Releases</a></div>
                </div>

                <div style={{color:'grey',paddingLeft:"15%",paddingRight:"10%",paddingTop:"2%",display:"flex"}} onMouseMove={()=>setHide("1")}>
                    <div><a href="/mostpopular/BasketBall" style={{color:"grey"}}>BasketBall</a></div>
                    <div style={{marginLeft:"16.5%"}}><a href="/section/Jackets" style={{color:"grey"}}>Jackets</a></div>
                    <div style={{marginLeft:"21.3%"}}><a href="/section/Socks" style={{color:"grey"}}>Socks</a></div>
                    <div style={{marginLeft:"20%"}}><a href="/section/Clearance" style={{color:"grey"}}>Clearance</a></div>
                </div>

                <div style={{color:'grey',paddingLeft:"15%",paddingRight:"10%",paddingTop:"2%",display:"flex"}} onMouseMove={()=>setHide("1")}>
                    <div><a href="/section/Metcon" style={{color:"grey"}}>Metcon</a></div>
                    <div style={{marginLeft:"18.7%"}}><a href="/section/Golf" style={{color:"grey"}}>Golf</a></div>
                    <div style={{marginLeft:"24.7%"}}><a href="/section/Kids Hoodies" style={{color:"grey"}}>Hoodies</a></div>
                    <div style={{marginLeft:"17.9%"}}><a href="/section/Kids Play" style={{color:"grey"}}>Bags & Backpacks</a></div>
                </div>
                {hide==="1" &&
                <>
                <div style={{color:'grey',paddingLeft:"15%",paddingRight:"10%",paddingTop:"2%",display:"flex"}}>
                    <div><a href="/section/Pants" style={{color:"grey"}}>Pants</a></div>
                    <div style={{marginLeft:"20.5%"}}><a href="/section/Tenis" style={{color:"grey"}}>Tenis</a></div>
                    <div style={{marginLeft:"23.6%"}}><a href="/section/Balls" style={{color:"grey"}}>Balls</a></div>
                    <div style={{marginLeft:"20.8%"}}><a href="/section/NFL" style={{color:"grey"}}>NFL</a></div>
                </div>

                <div style={{color:'grey',paddingLeft:"15%",paddingRight:"10%",paddingTop:"2%",display:"flex"}}>
                    <div><a href="/section/Shorts" style={{color:"grey"}}>Shorts</a></div>
                    <div style={{marginLeft:"20%"}}><a href="/section/Trend" style={{color:"grey"}}>Trend</a></div>
                    <div style={{marginLeft:"22.7%"}}><a href="/section/MostPopular" style={{color:"grey"}}>MostPopular</a></div>
                    <div style={{marginLeft:"14.1%"}}><a href="/section/training" style={{color:"grey"}}>Training</a></div>
                    
                </div>
                </>}
                <br/><br/><br/>
            </div>

            <Footer />




        </div>
    )
}

export default Dashboard