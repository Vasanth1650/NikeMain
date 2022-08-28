import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import './Styles/Kids.css'
import Woffle from './Woffle/Woffle'

function Kids() {
    const usenavigate = useNavigate()

    function nikeworld(){
        alert("Currently We Are Working On Stay Tuned")
    }

    function Kidaplay(){
        usenavigate("/section/Kids Play")
    }

    function waffle(){
        usenavigate("/section/Nike Waffle Shoes")
    }


    function Kidsleggings(){
        usenavigate("/mostpopular/Kids leggings")
    }

    function kidsshort(option){
        usenavigate("/section/"+option)
    }


  return (
    <div className='kidsheader'>
        <Header/>

        <div className='menssectiontitle'>Kids</div>

            <div  onClick={()=>waffle()}>
                <div className='Running'>
                    <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/65786c71-ebf8-478b-a87b-0f83496e69ea/nike-kids.png' />
                </div>
                
                <div className='mainrun'>NIKE WAFFLE ONE</div>
                <div className='smalltext' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Let 'em experiment with the latest Waffle One colors.</div>

                <div className='butns'>

                    <button className='bikes'>Shop</button>
                </div>


            </div>


            <div>
                <div className='titlesssssss'>Trending</div>
                <div class="row">
                    <div class="column" onClick={()=>Kidaplay()}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/29ca6846-551a-43b7-bdd2-4c5c4b275a9b/nike-kids.png"
                            alt="Snow" style={{ width: "100%" }} />
                        <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}} className='bottom-text'>Look of Play: Cozy Essentials to Keep Kids</div>

                        <button className='shope' >Shop</button>
                    </div>
                    <div class="column2" onClick={()=>Kidsleggings()}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/3fb67238-0969-49a1-a583-bd6a84a30476/nike-kids.png"
                            alt="Forest" style={{ width: "100%" }} />
                        <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}} className='bottom'>Gear For Playing Like A Champ</div>
                        <button className='shope' >Shop</button>
                    </div>

                </div>
            </div>


            <Woffle/>

            <div onClick={()=>nikeworld()}>
                <br/><br/>
            <div className='titlesssssss'>The Latest</div>
                <div className='Running' >
                    <img style={{ width: "95%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/27015c9d-60ee-4e24-8033-8702da6d969b/nike-kids.png' />
                </div>
               
                <div className='mainrun'>FOOTBALL WITHOUT RULES</div>
                
                <div className='smalltext' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Football has landed in NIKELAND, but not as you know it
                . Test out your skills on a smaller pitch with six goals and no</div>
                <div className='smalltext' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>goalies. Plus, check out the new accelerometer power-ups and Federation gear for your avatar.</div>

                <div className='butns'>
                    <button className='bikes'>Explore</button>
                </div>


            </div>

            

            <div>
            <div className='gendertect'>The Essentials</div>
                <img  onClick={()=>kidsshort("Kids Hoodies")}  className='tshirtmens' style={{ width: "40%",height:"58%",marginLeft:"49%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/e70753c7-e6a4-43b6-8dac-0c9a2a5f261e/nike-kids.png'/>
                
                <img onClick={()=>kidsshort("Kids Shorts")} className='imgsis' style={{ width: "38%" ,marginLeft:"10%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_1016,c_limit/4e4db71f-ef74-42a7-81da-6041ef1a8244/image.png'/>
                <img onClick={()=>kidsshort("Kids T-Shirts")} className='clothingmens' style={{ width: "40%",height:"51.5%", marginLeft:"1%" }}  src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/bd9d8c23-46d7-47d8-a8d3-fc8d470431d1/nike-kids.png'/>
                
            </div>

            <div className='imagehoodiebutton' onClick={()=>kidsshort("Kids Hoodies")}>
                <div  style={{marginLeft:"45%", marginTop:"-8%",position:"absolute",color:"white"}}>Hoodies & Sweatshirts</div>
                <br/>
                <button className='tshortbutton' style={{marginLeft:"45%", marginTop:"-6%"}}>Shop</button>
            </div>


            <div className='imageshortsbutton' onClick={()=>kidsshort("Kids Shorts")}>
                <div style={{marginLeft:"-22%", marginTop:"-2%",position:"absolute",color:"white"}}>Shorts</div>
                <br/>
                <button className="shortsbutton" style={{marginLeft:"-22.5%", marginTop:"0.1%"}}>Shop</button>
            </div>


            <div className='imagetshirtbutton' onClick={()=>kidsshort("Kids T-Shirts")}>
                <div style={{marginLeft:"-25%", marginTop:"26%",position:"absolute",color:"white"}}>T-Shirts</div>
                <br/>
                <button className='clothingbuttons' style={{marginLeft:"-25%" ,marginTop:"28%",paddingLeft:"1%",paddingRight:"1%"}}>Shop</button>
            </div>

            

            


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            

        <Footer/>
    </div>
  )
}

export default Kids