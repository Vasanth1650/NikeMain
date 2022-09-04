import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../Api/AuthenticationService'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import Offer from '../Headers/Offers/Offer'
import Svg from '../Security/VerifyAccount/Svg'
import Batoschool from './BackToSchool/Batoschool'
import VideoIMage from './MagicScroll/VideoIMage'
import SalePageService from './Service/SalePageService'
import './Styles/SalePageStyle.scss'

function SalePage() {
    const usenavigate = useNavigate()
    const [product, setProduct] = useState([])
    const [data,setData] = useState({})

    const redirectme = () => {
        usenavigate('/sale/lauchproduct')
    }

    const explore = (category) =>{
        usenavigate('/sale/currentsales',{state:{category}})
    }

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    })
    
    return (
        <div className='SalePage'>
            <Header />
            <Offer/>
            <img style={{width:"95%",paddingLeft:"5%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1263,c_limit/e4235adb-7ef9-4ffb-9b10-966da54143b1/nike-back-to-school.jpg'/>


            <div style={{paddingTop:"5%",textAlign:"center",cursor:"pointer"}}>
                <div style={{marginLeft:"35%"}}><Svg/></div>
                <div style={{fontFamily:"fantasy",fontSize:"xxx-large"}}>NIKE FEST</div>
                <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",fontSize:"small"}}>Purchase the new limited sale items and show off them unique.</div>
            </div>

            
            <VideoIMage/>
            

            <div style={{marginTop:"5%",textAlign:"center",cursor:"pointer",color:"black"}}>
                <img onClick={()=>explore("All")} style={{width:"90%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1263,c_limit/b3169c2c-4522-4061-abb2-4696ee4eed8e/nike-back-to-school.jpg'/>
                <div style={{fontFamily:"fantasy",fontSize:"xxx-large"}}>Zion</div>
                <div className='SalePage' style={{paddingBottom:"2%"}}>Take Flight in style with the latest Zion 2 and Jordan apparel</div>
                <button className='launchbutton' onClick={()=>explore("All")}>Explore Sale Products</button>
            </div>

            <Batoschool/>

            <video muted  loop playing={true} autoPlay src='https://static.nike.com/a/images/f_mp4/w_1263,c_limit/c39130a1-f2bc-4d33-8975-35ec05422cca/nike-back-to-school.gif'/>
            

            {data.roleCode==="ADMIN" &&
            <div className='launchbuttonmoving'>
                <button className='launchbutton' onClick={redirectme}>Launch New Product</button>
            </div>}



            <br/><br/>
            <Footer />
        </div>
    )
}

export default SalePage