import React, { useState } from 'react'
import './Styles/Tees.scss'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../Api/AuthenticationService'

function Tees() {

    const usenavigate = useNavigate()
    const [data, setData] = useState({})



    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }


    return (
        <div className='bodying'>
            <div className='titlesssssss'>Trending</div>
            <div class="row">
                {!localStorage.getItem("USER_KEY") &&
                    <>
                        {!data.gender &&
                            <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ee46b872-af07-4fa4-8fdf-35a8858c20ef/nike-just-do-it.png"
                                    alt="Snow" style={{ width: "100%" }} />
                                <div className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}
                {!localStorage.getItem("USER_KEY") &&
                    <>
                        {!data.gender &&
                            <div class="column2" onClick={() => AllSection("Running Clothing")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/101cff35-26d5-410e-8715-784d63eebb43/nike-just-do-it.png"
                                    alt="Forest" style={{ width: "100%" }} />
                                <div className='bottom'>Our Latest Running Clothing</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}

                    {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender==="General" &&
                            <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/ee46b872-af07-4fa4-8fdf-35a8858c20ef/nike-just-do-it.png"
                                    alt="Snow" style={{ width: "100%" }} />
                                <div className='bottom-text'>The Air Zoom Alphafly NEXT% 2</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}
                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender==="General" &&
                            <div class="column2" onClick={() => AllSection("Running Clothing")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/101cff35-26d5-410e-8715-784d63eebb43/nike-just-do-it.png"
                                    alt="Forest" style={{ width: "100%" }} />
                                <div className='bottom'>Our Latest Running Clothing</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}
                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender === "Men" &&
                            <div class="column" onClick={() => AllSection("Road Racing Shoes")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/54ffd14b-2c8f-4a4c-8f89-02a2e92ab2be/nike-just-do-it.jpg"
                                    alt="Snow" style={{ width: "100%" }} />
                                <div className='bottom-text'>Nike Air Zoom Structure 24</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}
                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender === "Men" &&
                            <div class="column2" onClick={() => AllSection("Running Clothing")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/49f84fb8-6b37-435b-a6a5-e24ef9d7137a/nike-just-do-it.jpg"
                                    alt="Forest" style={{ width: "100%" }} />
                                <div className='bottom'>The New ZoomX Zegama Trail</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}

                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender === "Women" &&
                            <div class="column" onClick={() => AllSection("Under 100$")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/5e4cc6da-31bd-4eb1-857b-2dfe897f7680/women-s-shoes-clothing-accessories.jpg"
                                    alt="Snow" style={{ width: "100%" }} />
                                <div style={{color:"black"}} className='bottom-text'>Shoes Always Under 100$</div>
                                <button className='shope' style={{background:"black", color:"white"}}>Shop</button>
                            </div>}
                    </>}
                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender === "Women" &&
                            <div class="column2" onClick={() => AllSection("Running Clothing")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/f7bd470d-479e-4088-9b55-19616f58f15c/women-s-shoes-clothing-accessories.png"
                                    alt="Forest" style={{ width: "100%" }} />
                                <div className='bottom'>Our Latest Running Clothing</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}
                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender === "Kids" &&
                            <div class="column" onClick={() => AllSection("Running Shoes")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/98af00ef-9261-4803-b460-da169b68a6e4/men-s-shoes-clothing-accessories.jpg"
                                    alt="Snow" style={{ width: "100%" }} />
                                <div style={{ color: "black" }} className='bottom-textkids'>Our Latest Running Shoes</div>
                                <button className='shope' >Shop</button>
                            </div>}
                    </>}
                {localStorage.getItem("USER_KEY") &&
                    <>
                        {data.gender === "Kids" &&
                            <div class="column2" onClick={() => AllSection("FirstDay")}>
                                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_578,c_limit/1ada1bfb-1751-4651-bf11-aa988ce28d99/men-s-shoes-clothing-accessories.jpg"
                                    alt="Forest" style={{ width: "100%" }} />
                                <div style={{ color: "black" }} className='bottomkids'>Back to School: Essentials</div>
                                <button style={{ background: "black", color: "white" }} className='shope'>Shop</button>
                            </div>}
                    </>}

            </div>
        </div>
    )
}

export default Tees