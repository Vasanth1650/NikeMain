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

                <div className='smalltextwomen' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>The Nike (M) collection is designed and tested for womens, Giving freedom
                    to move however you want </div>
                <div className='smalltextwomen' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>to, throughout your entire training.</div>

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
                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",color:"black"}} className='bottom-text'>Icon Clash Collection</div>
                            <button className='shope' >Shop</button>
                        </div>
                        <div class="column2" onClick={() =>train()}>
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/4691492f-e351-492c-9be7-f2ade6d3edf9/women-s-shoes-clothing-accessories.png"
                                alt="Forest" style={{ width: "100%" }} />
                            <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}} className='bottom'>Jordan Apparel</div>
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
                <div className='smalltext' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}} onClick={()=>Road()}>Breathable, lightweight comfort, support, softness and a
                snappy response in a shoe that's designed to keep you running.</div>
                <div className='smalltext' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}} onClick={()=>Road()}>It's the total package</div>
                <div className='butns' onClick={()=>Road()}>
                    <button className='bikes'>Shop</button>
                </div>


            </div>


            <div>
                <div className='gendertect'>The Essentials</div>
                <div className='essentailsmen' style={{marginLeft:"5%"}}>

                    <img  onClick={()=>ThreeSection("Tops")} className='tshirtmens' style={{ width: "35%",height:"43%" }}   src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/c5f46589-02c2-42dd-8bc1-8ca0cd77b846/women-s-shoes-clothing-accessories.jpg' />


                    <img  onClick={()=>ThreeSection("Womens Shorts")} className='imgsis' style={{ width: "48%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/9e98c0b7-8299-4840-b029-dd74f11bfe52/women-s-shoes-clothing-accessories.jpg' />
                    <img  onClick={()=>ThreeSection("Womens Clothing")} className='clothingmens' style={{ width: "35%",height:"48.5%" ,marginTop:"23%",marginLeft:"2.5%"}} src='https://helios-i.mashable.com/imagery/articles/03FjhnHGVioBwMJ1HuuAT39/hero-image.fill.size_1200x900.v1611616511.jpg' />
                </div>

                <div className='adwa'>
                    <button  className='tshortbutton' onClick={()=>ThreeSection("Tops")} style={{marginTop:"-32%",marginLeft:"56%"}}>T-Shirts</button>
                    <button  className="shortsbutton" onClick={()=>ThreeSection("Womens Shorts")}>Shorts</button>
                    <button  className='clothingbuttons' style={{width:"10%" , marginLeft:"56%"}} onClick={()=>ThreeSection("Womens Clothing")}>Clothing</button>
                </div>
            </div>


            <br /><br />


            <Footer />
        </div>
    )
}

export default Womens