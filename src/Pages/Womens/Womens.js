import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import Offer from '../Headers/Offers/Offer'
import './Styles/Women.css'
import ReactPlayer from 'react-player'
import WomensShoes from './WomensShoes/WomensShoes'
import { useNavigate } from 'react-router-dom'

function Womens() {
    const usenavigate = useNavigate()

    function training(){
        usenavigate("/section/Womens training")
    }

    function Road(){
        usenavigate("/section/Road Racing Shoes")
    }

    function train(){
        usenavigate("/section/Womens Clothing")
    }

    function ThreeSection(option){
        usenavigate("/section/"+option)
    }

   

    function sportswear(){
        usenavigate("/section/ Womens sportswear")
    }
    return (
        <div className='womenssection'>
            <Header />
            <Offer />

            <br />
            <div className='womensvideo' onClick={()=>sportswear()}>
                <div className='featuesa'>Women</div>
                <br /><br />

                <div className='knjdwanjdna' style={{ position: "static" }}>
                    <ReactPlayer width={1100} height={600} loop playing={true} muted type='video/mp4' url="https://youtu.be/SY4Pl75BJPQ" />
                </div>
                <br /><br />
                <div className='smalltext'>This is Nike (M)</div>
                <div className='mainrun'>MADE FOR</div>
                <div className='mainrun'>EVERYTHING YOU ARE</div>

                <div className='smalltextwomen'>The Nike (M) collection is designed and tested for womens, Giving freedom
                    to move however you want </div>
                <div className='smalltextwomen'>to, throughout your entire training.</div>

                <div className='butns'>
                    <button className='bikes'>Shop</button>
                </div>

            </div>


            <div>
                <WomensShoes />
            </div>


            <div>
                <div>
                    <div className='titlesssssss'>Trending</div>
                    <div class="row">
                        <div class="column" onClick={() =>training()}>
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/d86ef867-ec90-4912-b7cf-adf9b092c5fe/women-s-shoes-clothing-accessories.png"
                                alt="Snow" style={{ width: "100%" }} />
                            <div style={{ color: "black" }} className='bottom-text'>Icon Clash Collection</div>
                            <button className='shope' >Shop</button>
                        </div>
                        <div class="column2" onClick={() =>train()}>
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/4691492f-e351-492c-9be7-f2ade6d3edf9/women-s-shoes-clothing-accessories.png"
                                alt="Forest" style={{ width: "100%" }} />
                            <div style={{ color: "white" }} className='bottom'>Jordan Apparel</div>
                            <button className='shope' >Shop</button>
                        </div>

                    </div>
                </div>
            </div>

            <br/><br/>
            <div>
            <div className='titlesssssss' >Featured</div>
                <div className='Running' onClick={()=>Road()}>
                    <img style={{ width: "95%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/3caec76b-0055-4398-9c90-a3fe7c5d31de/women-s-shoes-clothing-accessories.png' />
                </div>
                
                <div className='mainrun'onClick={()=>Road()} >NIKE ZOOMX INVINCIBLE RUN</div>
                <div className='mainrun' onClick={()=>Road()}>FLYKNIT 2</div>
                <div className='smalltext' onClick={()=>Road()}>Breathable, lightweight comfort, support, softness and a
                snappy response in a shoe that's designed to keep you running.</div>
                <div className='smalltext' onClick={()=>Road()}>It's the total package</div>
                <div className='butns' onClick={()=>Road()}>
                    <button className='bikes'>Shop</button>
                </div>


            </div>


            <div>
                <div className='gendertect'>The Essentials</div>
                <div className='essentailsmen'>

                    <img  onClick={()=>ThreeSection("Tops")} className='imgsis' style={{ width: "22%" }} src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b937c0f-e298-4da0-afdf-84af7562a583/sportswear-icon-clash-short-sleeve-tie-top-GdbMh0.png' />


                    <img  onClick={()=>ThreeSection("Womens Shorts")} className='imgsis' style={{ width: "28%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/e5fb5e37-80cc-4e61-bd8d-da5c1a894e9a/women-s-shoes-clothing-accessories.png' />
                    <img  onClick={()=>ThreeSection("Womens Clothing")} className='imgsis' style={{ width: "22%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/548998d9-390d-4b56-8991-4536f65c1c18/women-s-shoes-clothing-accessories.png' />
                </div>

                <div className='adwa'>
                    <button  className='firt' onClick={()=>ThreeSection("Tops")}>T-Shirts</button>
                    <button  className="seond" onClick={()=>ThreeSection("Womens Shorts")}>Shorts</button>
                    <button  className='thrd' style={{width:"10%"}} onClick={()=>ThreeSection("Womens Clothing")}>Clothing</button>
                </div>
            </div>


            <br /><br />


            <Footer />
        </div>
    )
}

export default Womens