import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../../Api/AuthenticationService'
import DashboardService from '../Services/DashboardService'
import { MdCancel } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";



function AddComments() {
    const [data, setData] = useState("")
    const [product, setProduct] = useState([])
    const location = useLocation()
    const usenavigate = useNavigate()
    const [rating, setRating] = useState()
    const [ordered, setOrdered] = useState([])
    const [checker, setChecker] = useState(false)
    const [productid, setProductid] = useState(location.state.id)
    const [userid, setUserid] = useState()
    const [username, setUsername] = useState()
    const [title, setTitle] = useState()
    const [comments, setComments] = useState()

    console.log(rating)

    useEffect(() => {
        
        setUserid(data.id)
        setUsername(data.email)
    }, [data])

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data)
            setOrdered(response.data.ordered)
            console.log(response.data.ordered)
        }).catch((err) => {
            alert("Please Login To Add Comment On The Product")
            usenavigate("/login")
            console.log(err)
        })
    }, [])

    useEffect(() => {

        getOrderd()


    }, [ordered])

    const getOrderd = () => {


        var dummy = 0
        ordered.filter(ordered => {
            if (ordered.productid1 === location.state.id) {
                dummy++
            } else if (ordered.productid2 === location.state.id) {
                dummy++
            } else if (ordered.productid3 === location.state.id) {
                dummy++
            } else if (ordered.productid4 === location.state.id) {
                dummy++
            } else if (ordered.productid5 === location.state.id) {
                dummy++
            }
        })



        if (dummy > 0) {
            setChecker(true)
        }


    }

    console.log(checker)

    useEffect(() => {
        getting()
    }, [data])

    const getting = () => {
        DashboardService.getByIds(location.state.id).then((response) => {
            setProduct(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
           
        })
    }

    function helper(id) {
        usenavigate("/most/" + id)
    }

    const newcomment = () =>{
        const details = {productid,userid,username,comments,title,rating}
        if(checker===true){
            if(rating!=="Please Choose A Star"){
                fetch("https://nike-backend.herokuapp.com/comments/addComments",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(details)  
                }).then((response)=>{
                    if(response.ok){
                        console.log("Thank You For Adding Comments")
                        usenavigate(-2)
                    }
                    if(!response.ok){
                        alert("Seems Your Comment Already Provided")
                    }
                    
                }).catch((err)=>{
                    alert("Seems Your Comment Already Provided")
                })
            }else{
                alert("Please Choose Star For Your Product")
            }
        }else{
            alert("Buy This Product To Add Comments")
        }
        
    }


    return (
        <div style={{ backgroundColor: "white" }}>


            <nav class="navbar navbar-light" style={{ backgroundColor: "white", width: "100%" }}>

                <div class="navbar-brand mb-0 h1" >{product.productname}</div>

                <div class="navbar-brand mb-0 h1" style={{ marginLeft: "90%", position: "absolute", cursor: "pointer" }} onClick={() => helper(location.state.id)}><MdCancel /></div>
            </nav>


            <div style={{ fontFamily: "fantasy", textAlign: "center", fontSize: "xx-large", paddingTop: "5%" }}>Stars
                {
                    rating === "VERYGOOD" &&
                    <div class="rating-box" style={{ position: "absolute", marginTop: "-3.5%", marginLeft: "60%" }}>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                    </div>
                }

                {
                    rating === "GOOD" &&

                    < div class="rating-box" style={{ position: "absolute", marginTop: "-3.5%", marginLeft: "60%" }}>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                    </div>

                }


                {
                    rating === "OKAY" &&
                    < div class="rating-box" style={{ position: "absolute", marginTop: "-3.5%", marginLeft: "60%" }}>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                    </div>
                }

                {
                    rating === "BAD" &&
                    < div class="rating-box" style={{ position: "absolute", marginTop: "-3.5%", marginLeft: "60%" }}>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                    </div>
                }

                {
                    rating === "VERYBAD" &&
                    < div class="rating-box" style={{ position: "absolute", marginTop: "-3.5%", marginLeft: "60%" }}>
                        <span class="rating-star full-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                        <span class="rating-star empty-star" style={{ fontSize: "xx-large" }}></span>
                    </div>
                }</div>

            <div style={{ overflow: "scroll", height: "490px", overflowX: "hidden" }}>
                <div>
                    <div style={{ paddingLeft: "5%", marginTop: "5%" }}>

                        <label>Star</label>
                        <select class="form-control form-control-sm" style={{ width: "20%" }} onClick={(e) => setRating(e.target.value)}>
                            <option>Please Choose A Star</option>
                            <option value="VERYBAD">Very Bad(1 Star)</option>
                            <option value="BAD">Bad(2 Star)</option>
                            <option value="OKAY">Satisfied(3 Star)</option>
                            <option value="GOOD">Good(4 Star)</option>
                            <option value="VERYGOOD">Awesome(5 Star)</option>
                        </select>

                    </div>





                </div>


                <div style={{ paddingTop: "5%", paddingLeft: "5%" }}>
                    

                        <label>Title to represent your experience</label>
                        <input onChange={(e) => setTitle(e.target.value)} style={{ width: "20%" }} placeholder='tile' class="form-control" maxLength={20} minLength={3} ></input>


                        <label style={{ paddingTop: "5%" }}>Comments On Your Product</label>
                        <input onChange={(e) => setComments(e.target.value)} style={{ width: "20%" }} placeholder='comments' class="form-control" maxLength={255} minLength={3} ></input>


                        <div style={{ fontFamily: "fantasy", textAlign: "center", fontSize: "xx-large", paddingTop: "5%" }}>Comments Review</div>

                        <div style={{ textAlign: "center", fontSize: "small" }}>Review Contents Before Submitting Accept The Terms And Condition To Procedd Further</div>

                        <div style={{ paddingTop: "3%", textAlign: "center", paddingBottom: "5%" }}>
                            <button  onClick={newcomment} type='submit' style={{ paddingTop: "1%", paddingBottom: "1%", paddingLeft: "5%", paddingRight: "5%", border: "none", backgroundColor: "black", color: "white", borderRadius: "5px" }}>
                                Submit</button>
                        </div>


                    
                </div>







            </div>


        </div>
    )
}

export default AddComments