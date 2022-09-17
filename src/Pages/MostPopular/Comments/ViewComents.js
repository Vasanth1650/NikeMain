import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashboardService from '../Services/DashboardService'
import './Styles/Comments.scss'
import { MdCancel } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";

function ViewComents() {
    const location = useLocation()
    const [product, setProduct] = useState([])
    const [comments, setComments] = useState([])
    const [star1, setStar1] = useState()
    const [star2, setStar2] = useState()
    const [star3, setStar3] = useState()
    const [star4, setStar4] = useState()
    const [star5, setStar5] = useState()
    const usenavigate = useNavigate()

    let size = comments.length

    useEffect(() => {
        getting()
    }, [])

    const getting = () => {
        DashboardService.getByIds(location.state.id).then((response) => {
            setProduct(response.data)
            setComments(response.data.comments)
        }).catch(err => {
            console.log(err)
            usenavigate(-1)
        })
    }

    useEffect(() => {
        calculator()
    }, [comments])


    function calculator() {
        var verybad = 0;
        var bad = 0;
        var okay = 0;
        var good = 0;
        var verygood = 0
        comments.filter(comments => {
            if (comments.rating === "VERYGOOD") {
                verygood++

            } else if (comments.rating === "OKAY") {
                okay++
            } else if (comments.rating === "GOOD") {
                good++
            } else if (comments.rating === "BAD") {
                bad++
            } else if (comments.rating === "VERYBAD") {
                verybad++
            }
        })
        var calc = Math.round((5 * verygood + 4 * good + 3 * okay + 2 * bad + 1 * verybad) / (verygood + okay + verybad + bad + good))
        var doublecalc = (5 * verygood + 4 * good + 3 * okay + 2 * bad + 1 * verybad) / (verygood + okay + verybad + bad + good)
        console.log("VERRYGOOD", verygood, calc)
        if (calc === 5) {
            if (doublecalc >= 4.5) {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star full-star")
                setStar4("rating-star full-star")
                setStar5("rating-star full-star")
            } else {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star full-star")
                setStar4("rating-star full-star")
                setStar5("rating-star half-star")
            }

        } else if (calc === 4) {
            if (doublecalc >= 3.5) {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star full-star")
                setStar4("rating-star full-star")
                setStar5("rating-star empty-star")
            } else {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star full-star")
                setStar4("rating-star half-star")
                setStar5("rating-star empty-star")
            }

        } else if (calc === 3) {
            if (doublecalc >= 4.5) {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star full-star")
                setStar4("rating-star empty-star")
                setStar5("rating-star empty-star")
            } else {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star half-star")
                setStar4("rating-star empty-star")
                setStar5("rating-star empty-star")
            }

        } else if (calc === 2) {
            if (doublecalc >= 4.5) {
                setStar1("rating-star full-star")
                setStar2("rating-star full-star")
                setStar3("rating-star empty-star")
                setStar4("rating-star empty-star")
                setStar5("rating-star empty-star")
            } else {
                setStar1("rating-star full-star")
                setStar2("rating-star half-star")
                setStar3("rating-star empty-star")
                setStar4("rating-star empty-star")
                setStar5("rating-star empty-star")
            }

        } else if (calc === 1) {
            if (doublecalc >= 4.5) {
                setStar1("rating-star full-star")
                setStar2("rating-star empty-star")
                setStar3("rating-star empty-star")
                setStar4("rating-star empty-star")
                setStar5("rating-star empty-star")
            } else {
                setStar1("rating-star half-star")
                setStar2("rating-star empty-star")
                setStar3("rating-star empty-star")
                setStar4("rating-star empty-star")
                setStar5("rating-star empty-star")
            }

        } else {
            setStar1("rating-star empty-star")
            setStar2("rating-star empty-star")
            setStar3("rating-star empty-star")
            setStar4("rating-star empty-star")
            setStar5("rating-star empty-star")
        }
    }


    function helper(id) {
        usenavigate("/most/" + id)
    }

    function addReview(id){
        usenavigate('/addComments',{state:{id}})
    }

    return (
        <div style={{ backgroundColor: "white" }}>

           
                <nav class="navbar navbar-light" style={{ backgroundColor: "white", width: "100%" }}>

                    <div class="navbar-brand mb-0 h1" >{product.productname}</div>

                    <div class="navbar-brand mb-0 h1" style={{ marginLeft: "90%", position: "absolute", cursor: "pointer" }} onClick={() => helper(location.state.id)}><MdCancel /></div>
                </nav>
            


            <div className='starrs'>
                <div class="rating-box">
                    <span class={star1}></span>
                    <span class={star2}></span>
                    <span class={star3}></span>
                    <span class={star4}></span>
                    <span class={star5}></span>
                    <a href='' onClick={()=>addReview(location.state.id)}>Add Reviews</a>
                </div>
            </div>

            <div style={{ textAlign: "center" }}>
                <div class="navbar-brand mb-0 h1" >{size} REVIEWS</div>
            </div>


            <div class="overflow-auto" style={{ paddingTop: "5%", overflow: "scroll", height: "420px" }}>
                {comments.map(comments =>
                    <>
                        <div>
                            <div class="card" style={{ width: "75rem", backgroundColor: "white", border: "none", boxShadow: "none", textAlign: "left" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{comments.title}!</h5>
                                    <div class="card-text" style={{ paddingRight: "60%" }}>{comments.comments}</div>
                                    <a href="#" style={{ color: "black" }} class="card-link">{comments.date}</a>

                                    <a href="#" style={{ color: "black" }} class="card-link">{comments.username}<MdOutlineVerifiedUser />Verified</a>

                                    {
                                        comments.rating === "VERYGOOD" &&
                                        <div class="rating-box" style={{ position: "absolute", marginTop: "-7%", marginLeft: "60%" }}>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                        </div>
                                    }

                                    {
                                        comments.rating === "GOOD" &&

                                        < div class="rating-box" style={{ position: "absolute", marginTop: "-7%", marginLeft: "60%" }}>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                        </div>

                                    }


                                    {
                                        comments.rating === "OKAY" &&
                                        < div class="rating-box" style={{ position: "absolute", marginTop: "-7%", marginLeft: "60%" }}>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                        </div>
                                    }

                                    {
                                        comments.rating === "BAD" &&
                                        < div class="rating-box" style={{ position: "absolute", marginTop: "-7%", marginLeft: "60%" }}>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                        </div>
                                    }

                                    {
                                        comments.rating === "VERYBAD" &&
                                        < div class="rating-box" style={{ position: "absolute", marginTop: "-7%", marginLeft: "60%" }}>
                                            <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                            <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                                        </div>
                                    }


                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>



        </div >
    )
}

export default ViewComents