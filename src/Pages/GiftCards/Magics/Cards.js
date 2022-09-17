import React, { useState } from 'react'
import $ from 'jquery'
import GiftCard from './Services/GiftCard'
import * as BootStrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Cards() {
    const [cards,setCard] = useState([])


    React.useEffect(()=>{
        GiftCard.getAllGiftCard().then((response)=>{
            setCard(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

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
                else if (bodyWidth >= 768) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / 2.4;
                }
                else {
                    incno = itemsSplit[8];
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

    const usenavigate = useNavigate()

    function useme(id){
        usenavigate('/gift/'+id)
    }

    
  return (
    <div className='bodyd' style={{userSelect:"none"}}>
            <div>
                <br /><br /><br />
                
                <br /><br />

                <div>
                    <div class="containeriknjein">
                        <div class="row">
                            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="2">
                                <div class="MultiCarousel-inner">

                                    
                                    
                                <div>
                                    {
                                        cards.map(gentle =>
                                            <>
                                            
                                            <div className="item">

                                               

                                                    <BootStrap.Card className='cardcarsol' style={{ width: '100%' }} onClick={()=>useme(gentle.id)}>
                                                        
                                                            <div class="pad15">


                                                                <BootStrap.Card.Img variant="top" src={gentle.image} />

                                                                <BootStrap.Card.Body>
                                                                    <div className='mensproductname'>{gentle.cardname}</div>
                                                                    <div style={{marginLeft:"-32.5%"}}>Emailed in 2 Hours or Less</div> 
                                                                    <div style={{marginLeft:"90%",marginTop:"-15%"}}>0$</div>

                                                                </BootStrap.Card.Body>
                                                            </div>
                                                        
                                                    </BootStrap.Card>

                                                


                                            </div>
                                            
                                            </>
                                        )
                                    }
                                    </div>




                                </div>
                                <button style={{marginTop:"-110%",color:"black",backgroundColor:"lightgray"}} class="btn btn-primary leftLsts"> ← </button>
                                <button style={{marginTop:"-115.3%",color:"black",backgroundColor:"lightgray"}} class="btn btn-primary rightLsts"> → </button>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br />

        </div>
  )
}

export default Cards