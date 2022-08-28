import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import Cards from './Magics/Cards'
import './Styles/Gifts.scss'

function Gift() {
  const usenavigate = useNavigate()

  function reedem(){
    usenavigate('/reedem')
  }
  return (
    <div style={{backgroundColor:"white"}}>
        <Header/>

        <div>
            <div className='giftcardtitle'>Nike Gift Cards</div>
            <div>
                <img style={{width:"90%",marginLeft:"5%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/c7890829-9045-4db1-93cc-dc737de2c401/nike-gift-cards-check-your-balance.png'/>
                <div style={{fontSize:"0.8in",fontFamily:"fantasy",position:"absolute",marginTop:"-21.5%",marginLeft:"12%",color:"black"}}>BACK TO</div>
                <div style={{fontSize:"0.8in",fontFamily:"fantasy",position:"absolute",marginTop:"-16%",marginLeft:"12%",color:"black"}}>SCHOOL</div>
                <div style={{fontSize:"small",position:"absolute",marginLeft:"12%",marginTop:"-8%",color:"black"}}>Give them exactly what they want with a Nike Gift Card.</div>
                <button style={{border:"none",backgroundColor:"black",color:"white",paddingTop:"1%",paddingBottom:"1%",width:"15%",borderRadius:"30px",position:"absolute",marginLeft:"-80%",marginTop:"14%"}}>
                Send a Gift Card</button>
            </div>
        </div>


        <Cards/>


        <div style={{paddingTop:"5%",paddingBottom:"5%",display:"flex"}}>
          <img style={{width:"50%",marginLeft:"5%",position:"absolute"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_582,c_limit/fb1347f8-c964-4296-85de-10a8147bb763/nike-gift-cards-check-your-balance.jpg'/>
          <img style={{width:"50%",marginLeft:"45%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_582,c_limit/9a46e66f-ffa2-4725-b124-056191e6da86/nike-gift-cards-check-your-balance.jpg'/>
          <div style={{position:"absolute",fontSize:"xxx-large",fontFamily:"fantasy",marginLeft:"8%",marginTop:"2%",paddingRight:"60%",color:"black"}}>THE GIFT THAT GIVES BACK</div>
          <div style={{position:"absolute",fontSize:"small",marginLeft:"8%",marginTop:"15%",paddingRight:"60%",color:"black"}}>Every Nike Gift Card purchase gives 1% (up to $300,000)to support Marathon Kids, inspiring kids to active through running.</div>
          <button onClick={()=>reedem()} style={{position:"absolute",width:"10%",paddingTop:"1%",paddingBottom:"1%",border:"none",color:"white",backgroundColor:"black",marginTop:"23.5%",marginLeft:"5%"}}>
          Reedem</button>
        </div>

        

        <Footer/>
    </div>
  )
}

export default Gift