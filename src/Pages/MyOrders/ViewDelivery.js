import React, { useEffect, useState } from 'react';
import './Styles/Order.scss';
import './Styles/Order.css';
import Myorderservice from './Service/Myorderservice';
import { useLocation, useParams } from 'react-router-dom';
import { fetchUserData } from '../../Api/AuthenticationService'
import { useNavigate } from 'react-router-dom'
import Headers from '../Headers/Header';
import NormalProductService from '../NormalProducts/Services/NormalProductService';
import DashboardService from '../Dashboard/Service/DashboardService';










function ViewDelivery() {
    const usenavigate = useNavigate()
    const location = useLocation()
    const [product1, setProduct1] = useState("")
    const [product2, setProduct2] = useState("")
    const [product3, setProduct3] = useState("")
    const [product4, setProduct4] = useState("")
    const [product5, setProduct5] = useState("")
    const [data, setData] = useState({})
    const [userid, setUserid] = useState('')
    const [product, setProduct] = useState([])

    let m = localStorage.getItem("Userid")

    useEffect(() => {
        getByUserid()
    }, [])

    useEffect(() => {
        getProductUnderId()
    }, [product])

    const getProductUnderId = () => {
        if (product1 === "") {
            if (product.productid1reference === "normal") {
                NormalProductService.productbyID(product.productid1).then((response) => {
                    setProduct1(response.data);
                })
            } else if (product.productid1reference === "most") {
                DashboardService.getByIds(product.productid1).then((response) => {
                    setProduct1(response.data);
                })
            }

        } if (product2 === "") {
            if (product.productid2reference === "normal") {
                NormalProductService.productbyID(product.productid2).then((response) => {
                    setProduct2(response.data);
                })
            } else if (product.productid2reference === "most") {
                DashboardService.getByIds(product.productid2).then((response) => {
                    setProduct2(response.data);
                })
            }

        } if (product3 === "") {
            if (product.productid3reference === "normal") {
                NormalProductService.productbyID(product.productid3).then((response) => {
                    setProduct3(response.data);
                })
            } else if (product.productid3reference === "most") {
                DashboardService.getByIds(product.productid3).then((response) => {
                    setProduct3(response.data);
                })
            }
        } if (product4 === "") {
            if (product.productid4reference === "normal") {
                NormalProductService.productbyID(product.productid4).then((response) => {
                    setProduct4(response.data);
                })
            } else if (product.productid4reference === "most") {
                DashboardService.getByIds(product.productid4).then((response) => {
                    setProduct4(response.data);
                })
            }

        } if (product5 === "") {
            if (product.productid5reference === "normal") {
                NormalProductService.productbyID(product.productid5).then((response) => {
                    setProduct5(response.data);
                })
            } else if (product.productid5reference === "most") {
                DashboardService.getByIds(product.productid5).then((response) => {
                    setProduct5(response.data);
                })
            }

        }

    }

    console.log(product.productid1)

    const getByUserid = () => {

        Myorderservice.finderById(location.state.id).then((response) => {
            setProduct(response.data);

        }).catch((error) => {
            console.log(error);
        })


    }



    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    function navigator(id) {
        usenavigate('/nextsteps/' + id)
    }

    function navigator2(id){
        usenavigate('/most/'+id)
    }


    return (
        <div>


            <Headers />





            <div className='order'>
                <div class="tableingss">
                    <div class="table-cell">
                        <div class="box">
                            <div class="row">
                                <div class="col4 sidebar" style={{ backgroundColor: "orange", cursor: "pointer" }}>
                                    <ul>
                                        <li class={product.status1}><span>Order Is Being Processed</span></li>
                                        <li class={product.status2}><span>Pick up</span></li>
                                        <li class={product.status3}><span>In transit</span></li>
                                        <li class={product.status4}><span>Out for delivery</span></li>
                                        <li class={product.status5}><span>Delivered</span></li>
                                    </ul>

                                </div>
                                <div class="col8 mapbox">

                                    <div class="map">

                                    </div>



                                    <div id="number"><div>Payment ID:</div> {product.paymentid} </div>
                                    <br /><br /><br /><br /><br /><br />
                                    <div style={{ color: "transparent" }}>------------------------------------------------</div>
                                    <div>Status: {product.status}</div>
                                    <div style={{ color: "transparent" }}>------------------------------------------------</div>
                                    {product.productid1reference === "normal" &&
                                        <>
                                            <img onClick={() => navigator(product1.id)} style={{ width: "20%", cursor: "pointer" }} src={product1.image1} />
                                        </>
                                    }
                                    {product.productid2reference === "normal" &&
                                        <>
                                            {product2 !== "" &&
                                                <img onClick={() => navigator(product2.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product2.image1} />}
                                        </>
                                    }
                                    {product.productid3reference === "normal" &&
                                        <>
                                            {product3 !== "" &&
                                                <img onClick={() => navigator(product3.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product3.image1} />}
                                        </>
                                    }
                                    {product.productid4reference === "normal" &&
                                        <>
                                            {product4 !== "" &&
                                                <img onClick={() => navigator(product4.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product4.image1} />}
                                        </>
                                    }
                                    {product.productid4reference === "normal" &&
                                        <>
                                            {product5 !== "" &&
                                                <img onClick={() => navigator(product5.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product5.image1} />}
                                        </>
                                    }


                                    {product.productid1reference === "most" &&
                                        <>
                                            <img onClick={() => navigator2(product1.id)} style={{ width: "20%", cursor: "pointer" }} src={product1.productimage1} />
                                        </>
                                    }
                                    {product.productid2reference === "most" &&
                                        <>
                                            {product2 !== "" &&
                                                <img onClick={() => navigator2(product2.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product2.productimage1} />}
                                        </>
                                    }
                                    {product.productid3reference === "most" &&
                                        <>
                                            {product3 !== "" &&
                                                <img onClick={() => navigator2(product3.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product3.productimage1} />}
                                        </>
                                    }
                                    {product.productid4reference === "most" &&
                                        <>
                                            {product4 !== "" &&
                                                <img onClick={() => navigator2(product4.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product4.productimage1} />}
                                        </>
                                    }
                                    {product.productid4reference === "most" &&
                                        <>
                                            {product5 !== "" &&
                                                <img onClick={() => navigator2(product5.id)} style={{ width: "20%", marginLeft: "2%", cursor: "pointer" }} src={product5.productimage1} />}
                                        </>
                                    }

                                    <div style={{ color: "transparent" }}>------------------------------------------------</div>
                                    <div>Paid : {product.payment}Rupees</div>
                                    <div style={{ color: "transparent" }}>------------------------------------------------</div>
                                    <div>Size : {product.size}</div>
                                    <div style={{ color: "transparent" }}>------------------------------------------------</div>

                                </div>


                            </div>
                            <div class="row">
                                <div class="col6"><h2>From</h2>
                                    <div class="address">Nike Corporation<br />
                                        Suite 1450<br />
                                        California, IL 60606-2806</div>
                                </div>
                                <div class="col6"><h2>To</h2>
                                    <div class="address">{product.address}<br />{product.state}<br />
                                        {product.city}</div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        </div>
    )
}

export default ViewDelivery