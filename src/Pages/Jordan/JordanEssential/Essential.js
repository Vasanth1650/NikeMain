import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Styles/Essential.css'

function Essential() {

  const usenavigate = useNavigate()

  const MostPopular = (value) =>{
    usenavigate('/mostpopular/'+value);
  }

  const Popular = (value) =>{
    usenavigate('/section/'+value)
  }


  return (
    <div>
        <div className='esstext'>DISCOVER JORDAN ESSENTIALS</div>
        <div className='ess'>
            <img className='imagesizes' onClick={()=>Popular("Clothing")} style={{width:"30%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c19d2099-35d1-4652-b754-ad6ee05ad613/jordan.jpg'/>
            <img className='imagesizes' onClick={()=>MostPopular("Sneakers")} style={{width:"30%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/9f2c1e7a-5da4-4a89-8f4d-1e686412855d/jordan.jpg'/>
            <img className='imagesizes' onClick={()=>Popular("Gear")} style={{width:"30%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c5e02b21-6c41-427f-83af-70ab3c63a7c1/jordan.jpg'/>
        </div>
        <div className='alltext'>
            <div className='clothing' onClick={()=>Popular("Clothing")}>Clothing</div>
            <div className='shoes' onClick={()=>MostPopular("Sneakers")}>Shoes</div>
            <div className='gear' onClick={()=>Popular("Gear")}>Gear</div>
        </div>
    </div>
  )
}

export default Essential