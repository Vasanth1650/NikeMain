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
    
    const [check, setCheck] = useState('');
    const [searchl, setSearchl] = useState([]);
    const [roles, setRoles] = useState('')

    

    console.log(roles)











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

            <Footer />




        </div>
    )
}

export default Dashboard