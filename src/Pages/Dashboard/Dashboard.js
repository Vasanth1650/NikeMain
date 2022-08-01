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
    const [data, setData] = useState({});
    const [check, setCheck] = useState('');
    const [searchl, setSearchl] = useState([]);

    //useEffect to set username
    useEffect(() => {
        setCheck(data.username)
    }, [])

    localStorage.setItem("Userid",data.id)

    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    const Options = (variable) => {
        console.log(variable);
        usenavigate('/section/' + variable);
    }

    

    
 



  return (
    <div className='body'>
        <Header/>
        <Offer/>

      

        <div className='nikes'>
                
                <span class="parallax-text" text="NIKE">
                    NIKE
                </span>

               
            </div>


            <div className="jordan">
                <div ><br /></div>
                <div className="jordan"></div>

                <Popular/>

                <div><br /></div>
            </div>

            <RunningShoes/>

        


            <div>
                <div className='jordan'>
                    <br></br>
                    <div className='popi'>POPULAR RIGHT NOW</div>
                    <div className='popularbut'>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Slides And Sandals")}>SLIDES AND SANDALS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("T Shirt")}>T-SHIRTS AND SHORTS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Football")}>FOOTBALL</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Sneakers")}>WHITE SNEAKERS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Socks")}>Socks</BootStrap.Button>
                    </div>
                    <br></br>
                </div>
             </div>

            

            <Gender/>


            





            

            <div className="jordan">
            <br/><br/><br/>
            <Tees/>
            

            <br/><br/><br/><br/>

            <Tops/>

            <br/><br/><br/><br/>

            

            

            </div>

            <Footer/>

            
            
        
    </div>
  )
}

export default Dashboard