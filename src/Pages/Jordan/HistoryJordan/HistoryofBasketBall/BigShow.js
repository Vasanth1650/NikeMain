import React from 'react'
import { useNavigate } from 'react-router-dom'

function BigShow() {
    const usenavigate = useNavigate()

    function helper(id){
        usenavigate("/most/"+id)
    }
    return (
        <div style={{userSelect:"none"}}>
            <div style={{ textAlign: "center", backgroundColor: "white", paddingTop: "5%", paddingBottom: "5%",cursor:"pointer"}} onClick={()=>helper(28)}>
                <img style={{ width: "90%", height: "10%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/48405ac8-cafa-4445-bfe3-37705bf97ecc/welcome-to-jordan-basketball.jpg' />
                <div style={{color:"black",fontSize:"xxx-large",fontFamily:"fantasy"}}>AIR JORDANXXXVI</div>
                <div style={{fontSize:"small"}}>The latest in a long line of greatness with a look that's ahead of its time</div>
                <br/>
                <button style={{width:"10%",border:"none",backgroundColor:"black",color:"white",borderRadius:"30px",paddingTop:"1%",paddingBottom:"1%"}}>Shop</button>
            </div>
        </div>
    )
}

export default BigShow