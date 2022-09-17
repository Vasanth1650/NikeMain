import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/Most.scss'

function JordanMost() {
    const usenavigate = useNavigate()

    function category(value){
        usenavigate("/jordan/"+value)
    }
    return (
    <div>
        
        <div>

            <section class="section" style={{userSelect:"none"}}>
           
                <div class="grid">
                    <div class="itemingrid" onClick={()=>category("cricket")}>
                        <div class="item__details" style={{color:"white",fontFamily:"fantasy"}}>
                            Jordan Cricket
                        </div>
                    </div>
                    <div class="itemingrid" >
                        <div class="item__details" style={{color:"white",fontFamily:"fantasy"}}>
                            Jordan Soccer
                        </div>
                    </div>
                    <div class="itemingrid itemingrid--large" onClick={()=>category("basketball")}>
                        <div class="item__details" style={{color:"white",fontFamily:"fantasy"}}>
                            Jordan Basketball
                        </div>
                    </div>
                    <div class="itemingrid">
                        <div class="item__details" style={{color:"white",fontFamily:"fantasy"}}>
                            Jordan Baseball
                        </div>
                    </div>
                    <div class="itemingrid">
                        <div class="item__details" style={{color:"black",fontFamily:"fantasy"}}>
                            Jordan Football
                        </div>
                    </div>
                    <div class="itemingrid ">
                        <div class="item__details" style={{color:"white",fontFamily:"fantasy"}}>
                            Jordan Athlet
                        </div>
                    </div>
                   
                    <div class="itemingrid">
                        <div class="item__details" style={{color:"black",fontFamily:"fantasy"}}>
                            Jordan Tennis
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </div>
        
    </div >
  )
}

export default JordanMost