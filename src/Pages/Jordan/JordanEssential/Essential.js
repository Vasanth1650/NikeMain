import React from 'react'
import './Styles/Essential.css'

function Essential() {
  return (
    <div>
        <div className='esstext'>DISCOVER JORDAN ESSENTIALS</div>
        <div className='ess'>
            <img className='imagesizes' style={{width:"30%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c19d2099-35d1-4652-b754-ad6ee05ad613/jordan.jpg'/>
            <img className='imagesizes' style={{width:"30%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/9f2c1e7a-5da4-4a89-8f4d-1e686412855d/jordan.jpg'/>
            <img className='imagesizes' style={{width:"30%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c5e02b21-6c41-427f-83af-70ab3c63a7c1/jordan.jpg'/>
        </div>
        <div className='alltext'>
            <div className='clothing'>Clothing</div>
            <div className='shoes'>Shoes</div>
            <div className='gear'>Gear</div>
        </div>
    </div>
  )
}

export default Essential