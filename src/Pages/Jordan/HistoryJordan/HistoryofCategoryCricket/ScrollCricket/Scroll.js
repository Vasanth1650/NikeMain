import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import * as BootStrap from 'react-bootstrap'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom'
import { FcLock } from "react-icons/fc";

function Scroll() {
    const usenavigate = useNavigate()

  



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


                if (bodyWidth >= 2000) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 1592) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 968) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / incno;
                }else if(bodyWidth >= 700){
                    incno = itemsSplit[0];
                    itemWidth = sampwidth / incno;
                }
                else {
                    incno = itemsSplit[0];
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
                <div className='similarsbudwaw'>Nike Representing Players</div>
                <br /><br />

                

                <div>
                    <div class="containeriknjein" style={{height:"510px"}}>
                        <div  style={{height:"420px",overflowY:"hidden"}} class="scrollbar-default" >
                            <div  class="MultiCarousel" data-items="1,3,5,6" data-slide="2" id="MultiCarousel" data-interval="2" >
                                <div  className="MultiCarousel-inner" >

                                    
                                    
                                            <div className="item">                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/948c0152610973.5915ea9472c63.png' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname'>Virat Kohli</div>
                                                                    <div className='mensproductgender'>Batsman</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>INDIA</div>
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>

                                            <div className="item">                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://www.behindwoods.com/news-shots-slideshow/10-things-you-didnt-know-about-ab-de-villiers/images/10-things-you-didnt-know-about-ab-de-villiers-2.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname'>AB de Villiers</div>
                                                                    <div className='mensproductgender'>Batsman</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>South Africa</div>
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div><div className="item">                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='data:image/jpeg;base64,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' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname'>Brendon McCullum</div>
                                                                    <div className='mensproductgender'>Batsman</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>NEW ZEALAND</div>
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div><div className="item">                                       
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>                                                       
                                                            <div class="pad15">
                                                                <BootStrap.Card.Img variant="top" src='https://i.pinimg.com/736x/39/2d/66/392d66fbcb4e8998fecbe4bebd651575.jpg' />
                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname'>Brett Lee</div>
                                                                    <div className='mensproductgender'>Bowler</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>AUSTRAILA</div>
                                                                </BootStrap.Card.Body>
                                                            </div>                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                            </div>
                                            


                                            <div className="item">

                                                
                                                    <div className='cardcarsol1111'>
                                                    <BootStrap.Card className='cardcarsol'>
                                                        
                                                            <div class="pad15">


                                                                <BootStrap.Card.Img style={{width:"80%"}} variant="top" src='https://magazineclonerepub.azureedge.net/mcepub/3144/223076/image/9b20ab31-fd95-4d23-9487-ecf6070627f6.jpg' />

                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname'>Steve Smith</div>
                                                                    <div className='mensproductgender'>Batsman</div>
                                                                    <div className='mensproductgender' style={{fontFamily:"fantasy"}}>AUSTRAILA</div>

                                                                </BootStrap.Card.Body>
                                                            </div>
                                                        
                                                    </BootStrap.Card>
                                                    </div>
                                                


                                            </div>
                                </div>
                                <button class="btn btn-primary leftLsts" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> ← </button>
                                <button class="btn btn-primary rightLsts" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> → </button>


                            </div>
                        </div>
                    </div>
                </div>

            </div>


    

        </div>
    )
}

export default Scroll