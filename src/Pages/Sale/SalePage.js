import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../Api/AuthenticationService'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import Svg from '../Security/VerifyAccount/Svg'
import SalePageService from './Service/SalePageService'
import './Styles/SalePageStyle.scss'

function SalePage() {
    const usenavigate = useNavigate()
    const [product, setProduct] = useState([])
    const [data,setData] = useState({})

    const redirectme = () => {
        usenavigate('/sale/lauchproduct')
    }

    const explore = () =>{
        usenavigate('/sale/currentsales')
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

            <div style={{paddingTop:"5%",textAlign:"center",cursor:"pointer"}}>
                <div style={{marginLeft:"35%"}}><Svg/></div>
                <div style={{fontFamily:"fantasy",fontSize:"xxx-large"}}>NIKE FEST</div>
                <div style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",fontSize:"small"}}>Purchase the new limited sale items and show off them unique.</div>
            </div>

            <div style={{marginTop:"5%",textAlign:"center",cursor:"pointer",color:"black"}}>
                <img onClick={explore} style={{width:"90%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/1be4095b-c517-48de-8d40-e69b1d0e4f9d/jordan.jpg'/>
                <div style={{fontFamily:"fantasy",fontSize:"xxx-large"}}>Zion</div>
                <div className='SalePage' style={{paddingBottom:"2%"}}>Take Flight in style with the latest Zion 2 and Jordan apparel</div>
                <button className='launchbutton' onClick={explore}>Explore Sale Products</button>
            </div>

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