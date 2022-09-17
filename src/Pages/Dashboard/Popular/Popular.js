import React, { useState } from 'react'
import './Styles/Popular.scss'
import * as BootStrap from 'react-bootstrap'
import { fetchUserData } from '../../../Api/AuthenticationService'
import { useNavigate } from 'react-router-dom'

function Popular() {
    const [data, setData] = useState({})
    const usenavigate = useNavigate()


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function navigatior(){
        usenavigate("/subscription")
    }

    function genderMale(){
        usenavigate("/section/FirstDay")
    }

    return (
        <div className='pointereventcanceller'>

            {!localStorage.getItem("USER_KEY") &&
            <>
            {!data.gender &&
                <div>
                    
                        <div className='popularthings' onClick={()=>navigatior()}>

                            <img style={{ width: "90%",userSelect:"none"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/3adf3bf6-ed9f-4b78-aa3c-dd292c4e103a/nike-just-do-it.jpg' />

                        </div>
                        <div className='mainrunforkids' style={{color:"black",userSelect:"none"}}>SETS FOR</div>
                        <div className='mainrunforkidss' style={{color:"black",userSelect:"none"}}>SUCCESS</div>
                        <div className='smalltextkidsd'   style={{color:"black",userSelect:"none",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Matching sets that'll carry your year in effortless style</div>
                        <div className='butonseefs11'>
                            <BootStrap.Button className='smallsdas11'>Shop</BootStrap.Button>
                        </div>
                    
                </div>}

                
                </>}


                {localStorage.getItem("USER_KEY") &&
            <>
            {data.gender==="General" &&
                <div>
                   
                        <div className='popularthings' onClick={()=>navigatior()}>

                            <img style={{ width: "90%",userSelect:"none"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/59e9f4f2-eea0-4836-bcad-98b9326af2b0/nike-just-do-it.jpg' />

                        </div>
                        <div className='mainrun'>WHAT ARE YOU WORKING ON?</div>
                        <div className='smalltext11'>When pro cricketer Smriti Mandhana's home, she focuses on recharging</div>
                        <div className='butonseefs'>
                            <BootStrap.Button className='smallsdas'>Learn More</BootStrap.Button>
                        </div>
                    
                </div>}

                
                </>}





                {localStorage.getItem("USER_KEY") &&
                <>
                {data.gender==="Women" &&
                <div>
                    <a href='/nextsteps/85'>
                        <div className='popularthings' >

                            <img style={{ width: "90%",userSelect:"none"}} src='https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/75b616b6-7711-45eb-a1bc-56af1bf33cd0/image.png' />

                        </div>
                        <div className='mainrun'>KD15 Community "Napheesa Collier"</div>
                        <div className='smalltext11'>Basketball Shoes</div>
                        <div className='butonseefs'>
                            <BootStrap.Button className='smallsdas'>Buy Now</BootStrap.Button>
                        </div>
                    </a>
                </div>}
                </>}

                {localStorage.getItem("USER_KEY") &&
                <>
                {data.gender==="Men" &&
                <div>
                        <div className='popularthings' >

                            <img onClick={genderMale} style={{ width: "90%",userSelect:"none"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/bd8249a0-112d-48ac-8f45-f0b77f1a3df8/nike-just-do-it.jpg' />

                        </div>
                        <div className='mainrunformens'>HERE FOR</div>
                        <div className='mainrunformens111'>DAY ONE</div>
                        <div className='smalltext1111'>Everything you'll need for the most exciting day of school</div>
                       
                        <div className='butonseefs11'> 
                            <BootStrap.Button className='smallsdas11' onClick={genderMale}>Explore</BootStrap.Button>
                        </div>
                    
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>}</>}


                {localStorage.getItem("USER_KEY") &&
                <>
                {data.gender==="Kids" &&
                <div>
                    <a href="/section/Kids Play">
                        <div className='popularthings' >

                            <img style={{ width: "90%",userSelect:"none"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/f71e97b9-bbed-4b0f-92db-dcbcd005dd54/nike-kids-shoes-clothing-and-accessories-nike-com.jpg' />

                        </div>
                        <div className='mainrunforkids'>FITS FOR</div>
                        <div className='mainrunforkidss'>NONSTOP FUN</div>
                        <div className='smalltextkidsd'>Jump into summer with dynamic looks that go the distance</div>
                        <div className='butonseefs11'>
                            <BootStrap.Button className='smallsdas11'>Shop</BootStrap.Button>
                        </div>
                    </a>
                    
                </div>}
                </>}

        </div>
    )
}

export default Popular