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
                <div class="column" onClick={() => AllSection("T Shirt")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/eac3b5ce-8580-4ff9-985a-9d6ecf6ed07e/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>Tees to Rule Summer</div>
                    <button className='shope' >Shop</button>
                </div>
                <div class="column2" onClick={() => AllSection("Shorts")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/7e81a4e9-5bac-453f-8d80-1f933bd1afcd/nike-just-do-it.png"
                        alt="Forest" style={{ width: "100%" }} />
                    <div className='bottom'>Shorts to Beat the Heat</div>
                    <button className='shope' >Shop</button>
                </div>

            </div>  
        </div>
    )
}

export default Tees