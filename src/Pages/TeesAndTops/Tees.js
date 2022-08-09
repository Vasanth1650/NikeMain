import React from 'react'
import './Styles/Tees.scss'
import { useNavigate } from 'react-router-dom'

function Tees() {
    
    const usenavigate = useNavigate()

    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }


    return (
        <div className='bodying'>
        <div className='titlesssssss'>Trending</div>
            <div class="row">
                <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ee46b872-af07-4fa4-8fdf-35a8858c20ef/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                    <button className='shope' >Shop</button>
                </div>
                <div class="column2" onClick={() => AllSection("Running Clothing")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/101cff35-26d5-410e-8715-784d63eebb43/nike-just-do-it.png"
                        alt="Forest" style={{ width: "100%" }} />
                    <div className='bottom'>Running Gear for Your Race</div>
                    <button className='shope' >Shop</button>
                </div>

            </div>  
        </div>
    )
}

export default Tees