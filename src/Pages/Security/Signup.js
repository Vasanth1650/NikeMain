import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';

function Signup() {
    const usenavigate = useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [password,setPassword] = useState('')
    const [address,setAddress] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const authorities = [{roleCode:"USER",roleDescription:"USER"}]

    const handleClick = (e) =>{
        e.preventDefault()
        const adddetails = {username,email,phonenumber,password,address,state,city,authorities}
        fetch("https://nike-backend.herokuapp.com/addnew/save",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adddetails)
        }).then((response)=>{
            console.log(response);
            if(!response.ok){
                alert("User Already Exists try Logining in")
                throw Error("User Already Exists With The Emailid")
                
            }
            if(response.ok){
                usenavigate('/')
                console.log("User Added")
            }
        }).catch((error)=>{
            console.log("User Already Present")
        })
        console.log(adddetails)
    }


    



    return (
        <div >
            <Header/>

            <div className='login'>
            <section>
                <div class="container">
                    <div class="user signinBx">
                        <div class="imgBx"><img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c804f931-0c54-4be7-b286-f0e0f9fca67b/nike-just-do-it.png" alt="" /></div>
                        <div class="formBx">


                            <div >
                                <div >

                                    <div >
                                        <div >
                                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link " id="home-tab" data-toggle="tab" href="/login" role="tab" aria-controls="home" aria-selected="true">Login</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="/signup" role="tab" aria-controls="home" aria-selected="true">Signup</a>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <h4 className="gradient">Signup</h4>

                                            <form className="my-login-validation" onSubmit={handleClick}   noValidate={false}>
                                                <div className="gradient">
                                                    
                                                    <input id="username" type="email" minLength={8}
                                                       placeholder='Enter Email' onChange={(e)=>setUsername(e.target.value)} value={username} required />

                                                    <div className="invalid-feedback">
                                                        UserId is invalid
                                                    </div>



                                                </div>

                                                <div className="gradient">
                                                    <input id="username" type="username" minLength={5}
                                                       placeholder='Enter Username' onChange={(e)=>setEmail(e.target.value)} value={email} required />
                                                    <div className="invalid-feedback">
                                                        Username is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="phonenumber" type="phonenumber" minLength={10}
                                                       placeholder='Enter Phonenumber' onChange={(e)=>setPhonenumber(e.target.value)} value={phonenumber} required />
                                                    <div className="invalid-feedback">
                                                        Phonenumber is required
                                                    </div>
                                                </div>


                                                <div className="gradient">
                                                    <input id="password" type="password" minLength={8}
                                                       placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} required />
                                                    <div className="invalid-feedback">
                                                        Password is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="state" type="state" minLength={4}
                                                       placeholder='Enter State' onChange={(e)=>setState(e.target.value)} value={state} required />
                                                    <div className="invalid-feedback">
                                                        State is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="city" type="city" minLength={4}
                                                       placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} value={city} required />
                                                    <div className="invalid-feedback">
                                                        City is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="address" type="address" minLength={8}
                                                       placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)} value={address} required />
                                                    <div className="invalid-feedback">
                                                        Address is required
                                                    </div>
                                                </div>






                                                <div className="form-group m-0">
                                                    <button type="submit" className="btn btn-primary">

                                                        Login


                                                    </button>
                                                </div>
                                                <p class="signup">
                                                    Have account? Login
                                                    <a href="/login" onclick="toggleForm();">Sign Up.</a>
                                                </p>
                                            </form>
                                            


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>



















               
            
        </div>
    )
}

export default Signup