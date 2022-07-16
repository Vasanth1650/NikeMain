import React from 'react';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import { SiJordan } from "react-icons/si";
import './Styles/Jordan.css';
import * as BootStrap from 'react-bootstrap'
import JordanBasket from './ExploreJordan/JordanBasket';
import { useNavigate } from 'react-router-dom';
import Offer from '../Headers/Offers/Offer';
import Essential from './JordanEssential/Essential';


function MainJordan() {
    const usenavigate = useNavigate()

    const MostPopular = (value) =>{
        usenavigate('/mostpopular/'+value);
    }


    return (
        <div className='bac'>
            <Header />
            <Offer/>

            <SiJordan className='jordanback' />

            <div className='jordanlinks'>

                <BootStrap.Nav.Link className='mainnavtext'>BasketBall</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext'>Jordan Sport</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' onClick={() => MostPopular("Men's")}>Men</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' onClick={() => MostPopular("Women's")}>Women</BootStrap.Nav.Link>
                <BootStrap.Nav.Link className='mainnavtext' onClick={() => MostPopular("Kid's")}>Kids</BootStrap.Nav.Link>

            </div>

            <div className='jordanimage'>
                <BootStrap.Image style={{width:"19.2%" , height:"40%"}} src='https://i.pinimg.com/564x/ab/40/5a/ab405a07ea807d2f6bf1af6a387036ee.jpg'/>
                <BootStrap.Image style={{width:"50%" , height:"40%"}} src='https://i0.wp.com/cultedge.com/wp-content/uploads/2018/07/Air-Jordan-4-Motorsport-001.jpg?resize=1000%2C500&ssl=1'/>
                

            </div>

            <div className='jordan'>
            
            <div className='design'>
            <div className='jordantitle'>Jordan Collaboration</div>
            <br/>
                    <div class="cards">
                    
                        <div  class="cards-content">
                            <h2 class="cards-title">AIR JORDAN XXXVI LOW</h2>
                            <p class="cards-desc">New Infrared ReImagines The Vibrant Colorway Of The Iconic Jordan VI To Celebrate The Invisible Light</p>
                            <p class="cards-desc">Radiating Within The Game's Greatest Players</p>
                            <a href='/AirJordanXXXVI' class="btns">Shop</a>
                        </div>
                    </div>
            <br/>
                    <div class="cardss" onClick={() => MostPopular("Men's")}>
                        <div class="cardss-content">
                            <h2 class="cardss-title">GRAPHIC TEES</h2>
                            <p class="cardss-desc">Fresh Graphic Tees For The Summer(For Mens).</p>
                            <a class="btns">Shop</a>
                        </div>
                    </div>
            <br/>
                    <div class="cardsss" onClick={() => MostPopular("Women's")}>
                        <div class="cardsss-content">
                            <h2 class="cardsss-title">TANK TOP READY</h2>
                            <p class="cardsss-desc">Get Fresh In Our Lighweight Tops(For Womens).</p>
                            <a  class="btns">Shop</a>
                        </div>
                    </div>       
                
                </div>
            </div>


            <br/><br/><br/><br/>

            <JordanBasket/>

            <Essential/>


            <Footer />
        </div>
    )
}

export default MainJordan