import React, { useState } from 'react'
import './Styles/Tees.scss'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../Api/AuthenticationService'

function Tees() {
    
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
        <div className='titlesssssss'>Trending</div>
            <div class="row">
                {!data.gender &&
                <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ee46b872-af07-4fa4-8fdf-35a8858c20ef/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                    <button className='shope' >Shop</button>
                </div>}
                
                {!data.gender &&
                <div class="column2" onClick={() => AllSection("Running Clothing")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/101cff35-26d5-410e-8715-784d63eebb43/nike-just-do-it.png"
                        alt="Forest" style={{ width: "100%" }} />
                    <div className='bottom'>Our Latest Running Clothing</div>
                    <button className='shope' >Shop</button>
                </div>}

                {data.gender==="Men" &&
                <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ee46b872-af07-4fa4-8fdf-35a8858c20ef/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                    <button className='shope' >Shop</button>
                </div>}
                
                {data.gender==="Men" &&
                <div class="column2" onClick={() => AllSection("Running Clothing")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/101cff35-26d5-410e-8715-784d63eebb43/nike-just-do-it.png"
                        alt="Forest" style={{ width: "100%" }} />
                    <div className='bottom'>Our Latest Running Clothing</div>
                    <button className='shope' >Shop</button>
                </div>}


                {data.gender==="Women" &&
                <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ee46b872-af07-4fa4-8fdf-35a8858c20ef/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                    <button className='shope' >Shop</button>
                </div>}
                
                {data.gender==="Women" &&
                <div class="column2" onClick={() => AllSection("Running Clothing")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/101cff35-26d5-410e-8715-784d63eebb43/nike-just-do-it.png"
                        alt="Forest" style={{ width: "100%" }} />
                    <div className='bottom'>Our Latest Running Clothing</div>
                    <button className='shope' >Shop</button>
                </div>}

                {data.gender==="Kids" &&
                <div class="column" onClick={() => AllSection("Running Shoes")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/98af00ef-9261-4803-b460-da169b68a6e4/men-s-shoes-clothing-accessories.jpg"
                        alt="Snow" style={{ width: "100%" }} />
                    <div style={{color:"black"}} className='bottom-textkids'>Our Latest Running Shoes</div>
                    <button className='shope' >Shop</button>
                </div>}
                {data.gender==="Kids" &&
                <div class="column2" onClick={() => AllSection("FirstDay")}>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/1ada1bfb-1751-4651-bf11-aa988ce28d99/men-s-shoes-clothing-accessories.jpg"
                        alt="Forest" style={{ width: "100%" }} />
                    <div style={{color:"black"}} className='bottomkids'>Back to School: Essentials</div>
                    <button style={{background:"black", color:"white"}} className='shope'>Shop</button>
                </div>}

            </div>  
        </div>
    )
}

export default Tees