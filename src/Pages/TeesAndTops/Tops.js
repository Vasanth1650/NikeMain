import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService';

function Tops() {
    const usenavigate = useNavigate()
    const [data,setData] = useState({})

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
          setData(response.data)
        }).catch(err=>{
          console.log(err)
        })
      },[])

      

    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }


    return (
        <div className='bodying'>
            <div className='titles'>Don't Miss</div>
            <br />
            {!data.gender &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Tops")}>
                    {!data.gender &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Men" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Women" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    
                    <div className='mainrun'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltexting'>As the sun keeps shining, ACG is giving you an important quest
                    : get outside with the ones you love. We've git you and</div>
                    <div className='smalltexting'>yours covered with tees, shorts and enough layering options to make 
                    your compass spin.</div>
                    
                    <div className='butns'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}


            {data.gender==="Men" &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Tops")}>
                    {!data.gender &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Men" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Women" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    
                    <div className='mainrun'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltexting'>As the sun keeps shining, ACG is giving you an important quest
                    : get outside with the ones you love. We've git you and</div>
                    <div className='smalltexting'>yours covered with tees, shorts and enough layering options to make 
                    your compass spin.</div>
                    
                    <div className='butns'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}


            {data.gender==="Women" &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Tops")}>
                    {!data.gender &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Men" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Women" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    
                    <div className='mainrun'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltexting'>As the sun keeps shining, ACG is giving you an important quest
                    : get outside with the ones you love. We've git you and</div>
                    <div className='smalltexting'>yours covered with tees, shorts and enough layering options to make 
                    your compass spin.</div>
                    
                    <div className='butns'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}

            {data.gender==="Kids" &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("back to basics")}>
                    
                    {data.gender==="Kids" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/e4bc6178-9309-419a-8a28-d6fa4932efe7/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
                        alt="Snow" style={{ width: "100%" }} />}
                   
                   
                    
                    <div className='mainrunkid'>ELEVATE YOUR UNIFORM</div>
                    <div className='smalltextingkids'>Show off your unique style with uniform basics made</div>
                    <div className='smalltextingkids'>for A+ fits</div>
                    
                    <div className='butnskids'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}


        </div>
    )
}

export default Tops