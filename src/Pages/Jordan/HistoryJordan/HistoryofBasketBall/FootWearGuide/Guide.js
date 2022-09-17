import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import * as BootStrap from 'react-bootstrap'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom'
import { FcLock } from "react-icons/fc";

function Guide() {
    const usenavigate = useNavigate()
    
  
  
    function helper(id){
        usenavigate("/most/"+id)
    }
  



    $(document).ready(function () {
        var itemsMainDiv = ('.MultiCarousel');
        var itemsDiv = ('.MultiCarousel-inner');
        var itemWidth = "";

        $('.leftLsts, .rightLsts').click(function () {
            var condition = $(this).hasClass("leftLsts");
            if (condition)
                click(0, this);
            else
                click(1, this)
        });

        ResCarouselSize();




        $(window).resize(function () {
            ResCarouselSize();
        });


        function ResCarouselSize() {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function () {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", "MultiCarousel" + id);

                let dummy = 2.5
                let dummy1 = 0.8
                if (bodyWidth >= 2000) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 1592) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 968) {
                    incno = dummy
                    itemWidth = sampwidth / incno;
                }else if(bodyWidth >= 700){
                    incno = dummy;
                    itemWidth = sampwidth / incno;
                }
                else {
                    incno = dummy1;
                    itemWidth = sampwidth / incno;
                }
                $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                $(this).find(itemClass).each(function () {
                    $(this).outerWidth(itemWidth);
                });

                $(".leftLsts").addClass("over");
                $(".rightLsts").removeClass("over");

            });
        }



        function ResCarousel(e, el, s) {
            var leftBtn = ('.leftLsts');
            var rightBtn = ('.rightLsts');
            var translateXval = '';
            var divStyle = $(el + ' ' + itemsDiv).css('transform');
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);
            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            }
            else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }
            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }


        function click(ell, ee) {
            var Parent = "#" + $(ee).parent().attr("id");
            var slide = $(Parent).attr("data-slide");
            ResCarousel(ell, Parent, slide);
        }

    });

    

    return (
        <div className='bodyd' style={{userSelect:"none"}}>
            <div>
                <br /><br /><br />
                <div className='similarsbudwaw'>BasketBall FOOTWEAR GUIDE</div>
                <br /><br />

                

                <div>
                    <div class="containeriknjein" style={{height:"810px"}}>
                        <div  style={{height:"680px",overflowY:"hidden"}} class="scrollbar-default" >
                            <div  class="MultiCarousel" data-items="1,3,5,6" data-slide="2" id="MultiCarousel" data-interval="2" >
                                <div  className="MultiCarousel-inner" >

                                    
                                    
                                            <div className="item">                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol' >                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/2836cd84-c3d9-49cc-ad41-9f1d11833cff/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>ZOOM SEPARATE</div>
                                                                    <div className='mensproductgender' style={{color:"black",fontSize:"large"}}>Build For:Space Creators 
                                                                    Equipped With:Forefoot Zoom +Foam
                                                                    Traction Style:Step-Back ready
                                                                    Key Feature: Versatile x Responive</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>


                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'   onClick={()=>helper(69)}>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/5505ade0-aaf9-46cc-b0f4-dea0f0b1538b/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>ZOOM SEPARATE</div>
                                                                    <div className='mensproductgender' style={{color:"black",fontSize:"large"}}>Build For:Space Creators 
                                                                    Equipped With:Forefoot Zoom +Foam
                                                                    Traction Style:Step-Back ready
                                                                    Key Feature: Versatile x Responive</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>


                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/5b256332-51fe-48d5-b38b-4824e6840183/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>ZOOM SEPARATE</div>
                                                                    <div className='mensproductgender' style={{color:"black",fontSize:"large"}}>Build For:Space Creators 
                                                                    Equipped With:Forefoot Zoom +Foam
                                                                    Traction Style:Step-Back ready
                                                                    Key Feature: Versatile x Responive</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>



                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/b5d58074-ae0f-4703-8b10-8cfbf4332f40/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>ZOOM SEPARATE</div>
                                                                    <div className='mensproductgender' style={{color:"black",fontSize:"large"}}>Build For:Space Creators 
                                                                    Equipped With:Forefoot Zoom +Foam
                                                                    Traction Style:Step-Back ready
                                                                    Key Feature: Versatile x Responive</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>



                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/1ca39a6e-63dc-4353-a5b1-98d44988667e/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>ZOOM SEPARATE</div>
                                                                    <div className='mensproductgender' style={{color:"black",fontSize:"large"}}>Build For:Space Creators 
                                                                    Equipped With:Forefoot Zoom +Foam
                                                                    Traction Style:Step-Back ready
                                                                    Key Feature: Versatile x Responive</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>



                                           

                                            
                                </div>
                                <button class="btn btn-primary leftLsts" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%",marginTop:"-10%"}}> ← </button>
                                <button class="btn btn-primary rightLsts" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> → </button>


                            </div>
                        </div>
                    </div>
                </div>

            </div>


    

        </div>
    )
}

export default Guide