import React from 'react';
import $ from 'jquery';
import formReset from 'jquery';
import { useEffect } from 'react';
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService'
import Headers from '../Headers/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainDBAdd() {
    const usenavigate = useNavigate();
    const [data, setData] = useState({});
    const [check, setCheck] = useState('');
    const[productname,setProductname] = useState('');
    const[productdescription,setProductdescription] = useState('')
    const[productprice,setProductprice] = useState('')
    const[size1,setSize1] = useState('')
    const[size2,setSize2] = useState('')
    const[size3,setSize3] = useState('')
    const[size4,setSize4] = useState('')
    const[size5,setSize5] = useState('')
    const[productspecification1,setProductspecification1] = useState('')
    const[productspecification2,setProductspecification2] = useState('')
    const[productspecification3,setProductspecification3] = useState('')
    const[productspecification4,setProductspecification4] = useState('')
    const[productspecification5,setProductspecification5] = useState('')
    const[delivery,setDelivery] = useState('')
    const[productimage1,setProductimage1] = useState('')
    const[productimage2,setProductimage2] = useState('')
    const[productimage3,setProductimage3] = useState('')
    const[productimage4,setProductimage4] = useState('')
    const[productimage5,setProductimage5] = useState('')
    const[productimage6,setProductimage6] = useState('')
    const[productimage7,setProductimage7] = useState('')
    const[productimage8,setProductimage8] = useState('')
    const[productimage9,setProductimage9] = useState('')
    const[productimage10,setProductimage10] = useState('')
    const[productimage11,setProductimage11] = useState('')
    const[productimage12,setProductimage12] = useState('')
    const[gender,setGender] = useState('')
    const[category1,setCategory1] = useState('')
    const[category2,setCategory2] = useState('')
    const[category3,setCategory3] = useState('')
    const[collection,setCollection] = useState('')
    const [buyingoption,setBuyingoption] = useState('')

    const handleClick = (e)=>{
        e.preventDefault()
        const addproduct={productname,productdescription,productprice,size1,size2,size3,size4,size5,
        productspecification1,productspecification2,productspecification3,productspecification4,productspecification5,productimage1
        ,productimage2,productimage3,productimage4,productimage5,productimage6,productimage7,productimage8,productimage9,productimage10,productimage11,productimage12,gender,category1,category2,category3,
        delivery,collection,buyingoption}
        fetch("https://nike-backend.herokuapp.com/product/save",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(addproduct)
        }).then((res)=>{
            if(!res.ok){
                throw Error("Some Error Has Occured While Adding Product")
            }
            if(res.ok){
                usenavigate('/dashboard')
                console.log("New Product Added")
                toast("Hello New Product Added"+productname)
            }
        }).catch(err=>{
            alert("Something Went Wrong")
            console.log(err)
        })
    }


   


    


    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    var $body = $('body');
    var $progressBar = $('progress');
    var value = 0;
    var transitionEnd = 'webkitTransitionEnd transitionend';



    function setupClickHandlers() {
        $('.next').on('click', function () {

            var $currentForm = $(this).parents('section');
            showNextForm($currentForm);
        });

        $('.previous').on('click', function () {
            var $currentForm = $(this).parents('section');
            showPreviousForm($currentForm);
        });

        return false;
    }



    function showNextForm($currentForm) {
        var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
        var $nextForm = $('section[data-step="' + (currentFormStep + 1) + '"]');

        console.log('Current step is ' + currentFormStep);
        console.log('The next form is # ' + $nextForm.attr('data-step'));


        $('html, body').animate({
            scrollTop: $body.offset().top
        }, 'fast');


        $currentForm.addClass('hidden');

        $nextForm.removeClass('hidden');

        $(".plane").animate({
            left: "+=260",


        }, 0, "linear");


        value += 33;

        if (value >= 100) {
            formReset();
        } else {
            $('.form-progress')
                .find('.form-progress-indicator.active')
                .next('.form-progress-indicator')
                .addClass('active');



            $progressBar.val(value);
        }


        $('.js-form-progress-completion').html($progressBar.val() + '% complete');



        return false;
    }


    function showPreviousForm($currentForm) {
        var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
        var $previousForm = $('section[data-step="' + (currentFormStep - 1) + '"]');


        console.log('The previous form is # ' + $previousForm.attr('data-step'));

        $('html, body').animate({
            scrollTop: $body.offset().top
        }, 'fast');

        $currentForm.addClass('hidden');

        $previousForm.removeClass('hidden');

        $(".plane").animate({
            left: "-=260",

        }, 0);

        value -= 33;

        if (value >= 100) {
            formReset();
        } else {
            $('.form-progress')
                .find('.form-progress-indicator.active')
                .last('.form-progress-indicator')
                .removeClass('active');

            $progressBar.val(value);
        }

        $('.js-form-progress-completion').html($progressBar.val() + '% complete');



        return false;
    }


    function init() {
        setupClickHandlers();
        formReset()
    }


    function logout() {
        localStorage.clear();
        usenavigate('/')
    }


    useEffect(() => {
        init()
        value += 35
    }, [])


    return (
        <div className='adding'>

            <Headers/>
            <div class="container">

                <div class="form-progress">
                    <div><img src="http://res.cloudinary.com/rinma/image/upload/v1497391324/airplane-takeoff-5252_orwmj3.png" class="plane" alt="" /></div>
                    <progress class="form-progress-bar" min="0" max="100" value="0" step="33" aria-labelledby="form-progress-completion"></progress>
                    <div class="form-progress-indicator one active"></div>
                    <div class="form-progress-indicator two"></div>
                    <div class="form-progress-indicator three"></div>
                    <div class="form-progress-indicator four"></div>
                    <br />

                </div>


                <form class="container" id="claim" onSubmit={handleClick} noValidate={false}>
                    <section id="step1" class="form-step" data-step="1">
                        <fieldset>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12">
                                    <h2>Just In / Most Searched Items</h2>
                                    <h5>1/4</h5>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productname' name='productname' 
                                        onChange={(e)=>setProductname(e.target.value)} required/>
                                        <label>Product Name</label>

                                        
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productdescription' name='productdescription' 
                                        onChange={(e)=>setProductdescription(e.target.value)} required/>
                                        <label>Product Description</label>

                                        
                                    </div>
                                </div>


                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text"id='productprice' name='productprice' 
                                        onChange={(e)=>setProductprice(e.target.value)} required/>
                                        <label>Product Price</label>
                                        
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='size1' name='size1' 
                                        onChange={(e)=>setSize1(e.target.value)} required/>
                                        <label>Available Size</label>
                                    </div>
                                </div>
                                
                                
                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='size2' name='size2' 
                                        onChange={(e)=>setSize2(e.target.value)} required/>
                                        <label>Available Size</label>
                                    </div>
                                </div>


                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='size3' name='size3' 
                                        onChange={(e)=>setSize3(e.target.value)} required/>
                                        <label>Available Size</label>                                      
                                    </div>                                   
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='size4' name='size4' 
                                        onChange={(e)=>setSize4(e.target.value)} required/>
                                        <label>Available Size</label>                                       
                                    </div>                                    
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='size5' name='size5' 
                                        onChange={(e)=>setSize5(e.target.value)} required/>
                                        <label>Available Size</label>      
                                    </div>   
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='delivery' name='delivery' 
                                        onChange={(e)=>setDelivery(e.target.value)} required/>
                                        <label>Delivery Expected</label> 
                                    </div>                                 
                                </div>


                                <div class="col-xs-12 col-sm-12 right">
                                    <button type="submit" id="korak2" class="btn next">Next</button></div>
                            </div>

                        </fieldset>
                    </section>



                    <section id="step2" class="form-step hidden" data-step="2">
                        <fieldset>
                            <div class="row">
                                <div >
                                    <h2>Additional Information</h2>
                                    <h5>2/5</h5>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productspecification1' name='productspecification1' 
                                        onChange={(e)=>setProductspecification1(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                        <label>Color Shown</label>
                                        <div className='invalid-feedback'>
                                            Required
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productspecification2' name='productspecification2' 
                                        onChange={(e)=>setProductspecification2(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                        <label>Style</label>
                                        <div className='invalid-feedback'>
                                            Required
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productspecification3' name='productspecification3' 
                                        onChange={(e)=>setProductspecification3(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                        <label>Product Materials</label>
                                        <div className='invalid-feedback'>
                                            Required
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productspecification4' name='productspecification4' 
                                        onChange={(e)=>setProductspecification4(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                        <label>Roads Inspired</label>
                                        <div className='invalid-feedback'>
                                            Required
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <input type="text" id='productspecification5' name='productspecification5' 
                                        onChange={(e)=>setProductspecification5(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                        <label>Extra Details</label>
                                        <div className='invalid-feedback'>
                                            Required
                                        </div>
                                    </div>
                                </div>

                                <div className='buyingoption' style={{width:"45%"}} onChange={(e)=>setBuyingoption(e.target.value)}>
                                    <BootStrap.Form.Group className="mb-3"  required>
                                        <BootStrap.Form.Select id='category1' name='category1'>
                                                    <option></option>
                                                    <option>Membership</option>
                                                   
                                        </BootStrap.Form.Select>
                                    </BootStrap.Form.Group>
                                </div>

                                <div class="col-xs-12 col-sm-12 right">
                                    <button type="button" id="nazad1" class="btn previous">Previous</button>
                                    <button type="submit" id="korak2" class="btn next">Next</button>

                                </div>
                            </div>
                        </fieldset>
                    </section>

                    <section id="step3" class="form-step hidden" data-step="3">
                        <fieldset>
                            <div class="row">
                                <div >
                                    <h2>Additional Information</h2>
                                    <h5>3/5</h5>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group" onChange={(e)=>setGender(e.target.value)}>
                                        <BootStrap.Form.Label htmlFor="gender">Select Gender Category</BootStrap.Form.Label>
                                        <br />
                                        <br />
                                        <BootStrap.Form.Group className="mb-3"  required>

                                            <BootStrap.Form.Select id='gender' name='gender' 
                                        >
                                                <option></option>
                                                <option>Men's</option>
                                                <option>Women's</option>
                                                <option>Kids's</option>
                                            </BootStrap.Form.Select>
                                        </BootStrap.Form.Group>
                                        <div className='invalid-feedback'>
                                            Required
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group" onChange={(e)=>setCategory1(e.target.value)}>
                                        <BootStrap.Form.Label htmlFor="category">Select Category</BootStrap.Form.Label>
                                        <br />
                                        <br />
                                        <BootStrap.Form.Group className="mb-3"  required>

                                            <BootStrap.Form.Select id='category1' name='category1' 
                                        >
                                                <option></option>
                                                <option>Jordan Men's</option>
                                                <option>Jordan Womens</option>
                                                <option>Men's Shoes</option>
                                                <option>Women's Shoes</option>
                                                <option>Kids's Shoes</option>
                                                <option>Mens training</option>
                                                <option>Womens training</option>
                                                <option>Kids training</option>
                                                <option>Slides And Sandals</option>
                                                <option>Nike Air Max</option>
                                                <option>Kids leggings</option>
                                                <option>Clothing</option>
                                                <option>Gear</option>
                                                <option>Football</option>
                                                <option>BasketBall</option>
                                                <option>Sneakers</option>
                                                <option>T Shirt</option>
                                                <option>Pants</option>
                                                <option>Tops</option>
                                                <option>Shorts</option>
                                                <option>Socks</option>
                                            </BootStrap.Form.Select>
                                        </BootStrap.Form.Group>
                                        
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group" onChange={(e)=>setCollection(e.target.value)}>
                                        <BootStrap.Form.Label htmlFor="collection">Collection</BootStrap.Form.Label>
                                        <br />
                                        <br />
                                        <BootStrap.Form.Group className="mb-3"  required>

                                            <BootStrap.Form.Select id='collection' name='collection' 
                                        >
                                                <option></option>
                                                <option>Jordan</option>
                                                
                                            </BootStrap.Form.Select>
                                        </BootStrap.Form.Group>
                                        
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group" onChange={(e)=>setCategory2(e.target.value)}>
                                        <BootStrap.Form.Label htmlFor="category">Color Options</BootStrap.Form.Label>
                                        <br />
                                        <br />
                                        <BootStrap.Form.Group className="mb-3"  required>

                                            <BootStrap.Form.Select id='category2' name='category2' 
                                        >
                                                <option></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </BootStrap.Form.Select>
                                        </BootStrap.Form.Group>
                                        
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group" onChange={(e)=>setCategory3(e.target.value)}>
                                        <BootStrap.Form.Label htmlFor="category">Select Status Of Product</BootStrap.Form.Label>
                                        <br />
                                        <br />
                                        <BootStrap.Form.Group className="mb-3"  required>

                                            <BootStrap.Form.Select id='category3' name='category3' 
                                        >
                                                <option></option>
                                                <option>Trend</option>
                                                <option>Most Popular</option>
                                                <option>Just In</option>
                                            </BootStrap.Form.Select>
                                        </BootStrap.Form.Group>
                                        
                                    </div>
                                </div>


                                <div class="col-xs-12 col-sm-12 right">
                                    <button type="button" id="nazad1" class="btn previous">Previous</button>
                                    <button type="submit" id="korak3" class="btn next">Next</button>

                                </div>
                            </div>
                        </fieldset>
                    </section>


                    <section id="step4" class="form-step hidden" data-step="4">
                        <fieldset>
                            <div class="row">
                                <div >
                                    <h2>Product Image In URL Format</h2>
                                    <h5>4/4</h5>
                                    <br />
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage1' name='productimage1' 
                                                onChange={(e)=>setProductimage1(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 1</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage2' name='productimage2' 
                                                onChange={(e)=>setProductimage2(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 2</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage3' name='productimage3' 
                                                onChange={(e)=>setProductimage3(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 3</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage4' name='productimage4' 
                                                onChange={(e)=>setProductimage4(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 4</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage5' name='productimage5' 
                                                onChange={(e)=>setProductimage5(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 5</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage6' name='productimage6' 
                                                onChange={(e)=>setProductimage6(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 6</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage7' name='productimage7' 
                                                onChange={(e)=>setProductimage7(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 7</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage8' name='productimage8' 
                                                onChange={(e)=>setProductimage8(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 8</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage9' name='productimage9' 
                                                onChange={(e)=>setProductimage9(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 9</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage10' name='productimage10' 
                                                onChange={(e)=>setProductimage10(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 10</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage11' name='productimage11' 
                                                onChange={(e)=>setProductimage11(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 11</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-6">
                                    <div class="group">
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="group">
                                                <input type="text" id='productimage12' name='productimage12' 
                                                onChange={(e)=>setProductimage12(e.target.value)} required /><span class="highlight"></span><span class="bar"></span>
                                                <label>Image 12</label>
                                                <div className='invalid-feedback'>
                                                    Required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-12 right">
                                    <button type="button" id="nazad1" class="btn previous">Previous</button>
                                    
                                    
        
                                </div>
                            </div>
                        </fieldset>
                    </section>

                    <button type="submit"  class="btn">Submit</button>

                </form>
            </div>
            <ToastContainer/>
            
        </div>
    )
}


export default MainDBAdd