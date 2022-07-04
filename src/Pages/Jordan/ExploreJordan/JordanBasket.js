import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Jordan.css'
import './Styles/Basket.css'

function JordanBasket() {
    const usenavigate = useNavigate()

    

    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }
  return (
    <div>
        <div className='bodying'>
        <div className='title'>EXPLORE MORE FROM JORDAN</div>
            <div class="row">
                <div class="column" onClick={() => AllSection("T Shirt")}>
                    <img className='image1s' src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/3dcd862e-9bb4-466a-af53-897001cf82dd/jordan.jpg"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>Explore Jordan BasketBall</div>
                    <button className='shopeing'>Shop</button>
                </div>
                <div class="column2" onClick={() => AllSection("Shorts")}>
                    <img className='image2s' src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/e9d26132-dda6-4019-b5f1-05cc66a3a664/jordan.jpg"
                        alt="Forest" style={{ width: "127%" }} />
                    <div className='bottom'>The Ultimate History of Air Jordan</div>
                    <button className='shopeings'>Shop</button>
                </div>

            </div>  
        </div>
    </div>
  )
}

export default JordanBasket