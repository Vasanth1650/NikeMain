import React from 'react'
import './Magics/Magic.css'
import $ from 'jquery'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";




function Magic() {



    return (
        <div>
            <div class="drop">
                <div class="drop_container" id="drop-items">
                    <div class="drop_card">
                        <div class="drop_data">
                            <img className='whatsapp' src="https://pps.whatsapp.net/v/t61.24694-24/294659456_5595586197153341_8123743333505911618_n.jpg?ccb=11-4&oh=01_AVzd2z8j03WSc7YPe5ACYeZPlcv1Qt7u4XRX0q0Z0ZNZzA&oe=62E837B9" alt="img1" class="drop_img"/>

                                <div>
                                    <h1 class="drop_name">Vasanth S</h1>
                                    <span class="drop_profession">Nike Organizer</span>
                                </div>
                        </div>

                        <div>
                            <a href="https://www.instagram.com/lelouch_shanmu/" class="drop_social"><AiOutlineInstagram/></a>
                            <a href="https://www.facebook.com/profile.php?id=100007534816896" class="drop_social"><AiOutlineFacebook/></a>
                            <a href="https://twitter.com/6286V" class="drop_social"><AiFillTwitterCircle/></a>
                        </div>
                    </div>

                    

                    
                </div>
            </div>
        </div>
    )
}

export default Magic