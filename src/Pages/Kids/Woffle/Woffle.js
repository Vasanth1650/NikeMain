import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import * as BootStrap from 'react-bootstrap'
import DashboardService from '../../MostPopular/Services/DashboardService'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom'
import NormalProductService from '../../NormalProducts/Services/NormalProductService';
import { FcLock } from "react-icons/fc";

function Woffle() {
    const [product, setProduct] = useState([])
    const [gentle, setGentle] = useState([])
    const [bottom, setBottom] = useState([])
    const [similar, setSimilar] = useState([])
    const usenavigate = useNavigate()

    useEffect(() => {
        getTrend()
    }, [])

    const getTrend = () => {
        NormalProductService.allProducts().then((response) => {
            setGentle(response.data)
        }).catch((err) => {
            console.log(err)
        })
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

    const Nextsteps = (ids) => {
        console.log(ids);
        usenavigate('/nextsteps/' + ids);
    }


    return (
        <div className='bodyd'>
            <div>
                <br /><br /><br />
                <div className='similarsbudwaw'>Nike Air Apparel</div>
                <br /><br />

                <div>
                    <div class="containeriknjein">
                        <div class="row">
                            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="2" id="MultiCarousel" data-interval="2">
                                <div class="MultiCarousel-inner">


                                    {
                                        gentle.map(gentle =>
                                            
                                            <div className="item" onClick={() => Nextsteps(gentle.id)}>
                                                {gentle.gender === "Kids's" &&
                                                    <BootStrap.Card className='cardcarsol' style={{ width: '100%' }}>
                                                        <div class="pad15">
                                                        <BootStrap.Card.Img variant="top" src={gentle.image1} />
                                                            <BootStrap.Card.Body>
                                                                <div className='mensproductname'>{gentle.productname}</div>
                                                                <div className='mensproductgender'>{gentle.gender}{gentle.buyingoption === "Membership" &&
                                                                    <FcLock />
                                                                }</div>
                                                                <div className='mensproductprice' style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>₹{gentle.price}</div>
                                                            </BootStrap.Card.Body>
                                                        </div>
                                                    </BootStrap.Card>
                                                }
                                            
                                            </div>
                                        )
                                    }


                                    

                                </div>
                                <button class="btn btn-primary leftLsts" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> ← </button>
                                <button class="btn btn-primary rightLsts" style={{backgroundColor:"whitesmoke",color:"black",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"1.5%",paddingRight:"1.5%"}}> → </button>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br />
            
        </div>
    )
}

export default Woffle