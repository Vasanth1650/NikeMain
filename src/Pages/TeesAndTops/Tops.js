import React from 'react'
import { useNavigate } from 'react-router-dom';

function Tops() {
    const usenavigate = useNavigate()

    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }


    return (
        <div className='bodying'>
            <div className='titles'>Don't Miss</div>
            <br />
            <div class="row">
                <div class="columns" onClick={() => AllSection("Tops")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='mainrun'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltexting'>As the sun keeps shining, ACG is giving you an important quest
                    : get outside with the ones you love. We've git you and</div>
                    <div className='smalltexting'>yours covered with tees, shorts and enough layering options to make 
                    your compass spin.</div>
                    
                    <div className='butns'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>


        </div>
    )
}

export default Tops