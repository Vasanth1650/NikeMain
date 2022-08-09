import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import Offer from '../Headers/Offers/Offer'
import Airmax from './AirMax/Airmax'
import './Styles/Mens.scss'

function Mens() {
    const usenavigate = useNavigate()


    function NikeZoomX(){
        usenavigate('/nextsteps/72')
    }

    function Shoes(){
        usenavigate("/section/Men's Shoes")
    }

    function training(){
        usenavigate("/section/training")
    }

    function Road(){
        usenavigate("/section/Road Racing Shoes")
    }

    function Football(){
        usenavigate("/section/Football")
    }

    function ThreeSection(option){
        usenavigate("/section/"+option)
    }

    return (
        <div className='menssections'>
            <Header />
            <Offer />
            <div className='menssectiontitle'>Men</div>

            <div onClick={()=>NikeZoomX()}>
                <div className='Running'>
                    <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/b3a54a9c-b447-4632-ad04-4b7f8a739185/men-s-shoes-clothing-accessories.jpg' />
                </div>
                <div className='smalltext'>Just In</div>
                <div className='mainrun'>NIKE ZOOMX ZEGAMA</div>


                <div className='butns'>
                    <button className='bikes'>Shop</button>
                </div>


            </div>



            <div>
                <div className='titlesssssss'>Trending</div>
                <div class="row">
                    <div class="column" onClick={()=>Shoes()}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/d08af2d7-6d57-422c-866d-046d5e4405a9/men-s-shoes-clothing-accessories.png"
                            alt="Snow" style={{ width: "100%" }} />
                        <div style={{ color: "black" }} className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                        <button className='shope' >Shop</button>
                    </div>
                    <div class="column2" onClick={() =>training()}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/86e69005-ee77-4d96-8b08-5dcdebe90dca/men-s-shoes-clothing-accessories.png"
                            alt="Forest" style={{ width: "100%" }} />
                        <div style={{ color: "white" }} className='bottom'>Camo For Your Reps</div>
                        <button className='shope' >Shop</button>
                    </div>

                </div>
            </div>



            <div onClick={()=>Road()}>
                <div className='Running' >
                    <img style={{ width: "95%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/35776b78-53c1-4229-b0f7-7d7c9745afab/men-s-shoes-clothing-accessories.png' />
                </div>
                <div className='smalltext'>Just In</div>
                <div className='mainrun'>THE AIR ZOOM ALPHAFLY</div>
                <div className='mainrun'>NEXT% 2</div>
                <div className='smalltext'>Your race-day time machine for the future of fast.</div>

                <div className='butns'>
                    <button className='bikes'>Shop</button>
                </div>


            </div>


            <div>
                <Airmax />
            </div>

            <br /><br /><br />


            <div onClick={()=>Football()}>
                <div className='titlesssssss'>Trending</div>
                <div className='Running'>
                    <img style={{ width: "95%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/40ed033f-0eac-462e-aca6-de27c80cc1c8/men-s-shoes-clothing-accessories.jpg' />
                </div>

                <div className='mainrun'>FAST IS IN THE AIR</div>

                <div className='smalltext'>The Nike Air Zoom Mecurical Lucent Pack. Available now.</div>

                <div className='butns'>
                    <button className='bikes'>Shop</button>
                </div>


            </div>


            <br /><br />


            <div>
                <div className='gendertect'>The Essentials</div>
                <div className='essentailsmen'>

                    <img  onClick={()=>ThreeSection("T Shirt")} className='imgsis' style={{ width: "28%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/e05b0c71-927d-4c78-a20c-7d86e490146b/men-s-shoes-clothing-accessories.png' />


                    <img  onClick={()=>ThreeSection("Shorts")} className='imgsis' style={{ width: "28%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/9ebdbe04-eb56-4a44-a8e8-2fed3c8a8256/men-s-shoes-clothing-accessories.png' />
                    <img  onClick={()=>ThreeSection("Clothing")} className='imgsis' style={{ width: "22%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/df8474f5-1a0e-4199-a177-33b852744f61/men-s-shoes-clothing-accessories.png' />
                </div>

                <div className='adwa'>
                    <button  className='firt' onClick={()=>ThreeSection("T Shirt")}>T-Shirts</button>
                    <button  className="seond" onClick={()=>ThreeSection("Shorts")}>Shorts</button>
                    <button  className='thrd' style={{width:"10%"}} onClick={()=>ThreeSection("Clothing")}>Clothing</button>
                </div>
            </div>


            <br/><br/><br/>


            <Footer />
        </div>
    )
}

export default Mens