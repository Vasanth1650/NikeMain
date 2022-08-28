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
            {!localStorage.getItem("USER_KEY") &&
            <>
            {!data.gender &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Tops")}>
                    {!data.gender &&
                    <img src="https://images.ctfassets.net/feazk3r7m969/6nVKnzVPNMuBSiKelaGPBj/aac5179bb43f3d4a49e2c7ac75220616/article-02-e-large.jpg?w=1920&q=70&fm=webp"
                        alt="Snow" style={{ width: "100%" }} />}
                    
                    
                    <div className='mainrun'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltexting' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>As the sun keeps shining, ACG is giving you an important quest
                    : get outside with the ones you love. We've git you and</div>
                    <div className='smalltexting' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>yours covered with tees, shorts and enough layering options to make 
                    your compass spin.</div>
                    
                    <div className='butns'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}
            </>}


            {localStorage.getItem("USER_KEY") &&
            <>
            {data.gender==="General" &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Tops")}>
                   
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
               
                    
                    <div className='mainrun'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltexting' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>As the sun keeps shining, ACG is giving you an important quest
                    : get outside with the ones you love. We've git you and</div>
                    <div className='smalltexting' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>yours covered with tees, shorts and enough layering options to make 
                    your compass spin.</div>
                    
                    <div className='butns'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}
            </>}


            {localStorage.getItem("USER_KEY") &&
            <>
            {data.gender==="Men" &&
            <div className='mensing' class="row">
                <div class="columns" onClick={() => AllSection("Back to Basics")}>
                    {!data.gender &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Men" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/bb76b350-3c68-4ce6-b304-905f27d38a3a/nike-just-do-it.jpg"
                        alt="Snow" style={{ width: "100%" }} />}
                    {data.gender==="Women" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/85f856e5-50cd-4883-90f0-daa7c4eff962/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />}
                    
                    <div className='mainrunmens'>BACK TO BASICS</div>
                    <div className='smalltextingmens' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Show off your unique style with uniform essentails made for A+</div>
                    <div className='smalltextingmensing' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>fits.</div>
                    
                    <div className='butnsmens'>
                        <button className='bikes'>Shop</button>
                    </div>
                    <br/><br/><br/><br/>
                </div>
                

            </div>}
            </>}


            {localStorage.getItem("USER_KEY") &&
            <>
            {data.gender==="Women" &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Back to Basics")}>
                    
                    {data.gender==="Women" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/991715af-338c-4d79-8005-d9092503c74c/women-s-shoes-clothing-accessories.jpg"
                        alt="Snow" style={{ width: "100%" }} />}
                    
                    <div className='mainrunmens'>GO OUTSIDE TOGETHER</div>
                    <div className='smalltextingmens' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Show of your unique style with uniform basics made for A+ fits</div>
                    
                    
                    <div className='butnsmens'>
                        <button className='bikes'>Shop</button>
                    </div>
                    <br/><br/><br/><br/>
                </div>


            </div>}
            </>}

            {localStorage.getItem("USER_KEY") &&
            <>
            {data.gender==="Kids" &&
            <div class="row">
                <div class="columns" onClick={() => AllSection("Back to Basics")}>
                    
                    {data.gender==="Kids" &&
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/e4bc6178-9309-419a-8a28-d6fa4932efe7/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
                        alt="Snow" style={{ width: "100%" }} />}
                   
                   
                    
                    <div className='mainrunkid'>ELEVATE YOUR UNIFORM</div>
                    <div className='smalltextingkids' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Show off your unique style with uniform basics made</div>
                    <div className='smalltextingkids' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>for A+ fits</div>
                    
                    <div className='butnskids'>
                        <button className='bikes'>Shop</button>
                    </div>
                    
                </div>


            </div>}
            </>}


        </div>
    )
}

export default Tops