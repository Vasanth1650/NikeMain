import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import * as BootStrap from 'react-bootstrap'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom'
import { FcLock } from "react-icons/fc";

function ScrollBas() {
    const usenavigate = useNavigate()
  
    function helper(){
        usenavigate("/most/"+69)
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
                <div className='similarsbudwaw'>JORDAN BRAND FEATURED ATHLETES</div>
                <br /><br />

                

                <div>
                    <div class="containeriknjein" style={{height:"810px"}}>
                        <div  style={{height:"680px",overflowY:"hidden"}} class="scrollbar-default" >
                            <div  class="MultiCarousel" data-items="1,3,5,6" data-slide="2" id="MultiCarousel" data-interval="2" >
                                <div  className="MultiCarousel-inner" >

                                    
                                    
                                            <div className="item">                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/79474335-76bc-4294-8775-e3d201095ebb/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>RUSSELL WESTBROOK</div>
                                                                    <div className='mensproductgender'>Guard</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>Los Angeles Lakers</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>


                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol' >                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top"  src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/0ca8573d-3aae-4cd1-a0eb-16ea0ad548b8/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>ZION WILLIAMSON</div>
                                                                    <div className='mensproductgender'>Forward</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>New Orleans Pelicans</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>


                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/60bc03e1-3de1-40c7-acba-91b89e123366/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>LUKA DONČIĆ</div>
                                                                    <div className='mensproductgender'>Forward/Guard</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>Dallas Mavericks</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>



                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c0eb2e29-f2ea-474d-90ae-cd9a7f7de5a3/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>JAYSON TATUM</div>
                                                                    <div className='mensproductgender'>Forward/Guard</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>Boston Celtics</div>
                                                                    
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>



                                            <div className="item" >                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/a524e303-1e14-402f-a3c8-11bb0fc563bd/welcome-to-jordan-basketball.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname' style={{fontWeight:"bolder",paddingTop:"5%",paddingBottom:"5%"}}>RUI HACHIMURA</div>
                                                                    <div className='mensproductgender'>Batsman</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>AUSTRAILA</div>
                                                                    
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

export default ScrollBas