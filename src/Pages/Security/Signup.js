import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import * as BootStrap from 'react-bootstrap'
import emailjs from 'emailjs-com';

function Signup() {
    const form = useRef();
    const usenavigate = useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [password,setPassword] = useState('')
    const [address,setAddress] = useState("-")
    const [gender,setGender] = useState('')
    const [state,setState] = useState("-")
    const [city,setCity] = useState("-")
    const authorities = [{roleCode:"USER",roleDescription:"USER"}]
    const [verify,setVerify] = useState("")
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')
    const [subject, setSubject] = useState('')
    const [data,setData] = useState('')

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_d3gyrxg', 'template_10oi03j', form.current, 'OIRjUZ6EK9lCffxee').then(response => {
           
        })
    }


    useEffect(()=>{
        setSubject("Verify Your Nike Account")
        setRecipient(username)
        setMsgBody("Use This Link To Verify The Account"+" "+"https://nikeworld.herokuapp.com/verifyaccount/"+verify)
    },[username])

    useEffect(()=>{
        setVerify(Math.floor(Math.random() * 1000000000000000))
    },[])



    const handleClick = (e) =>{
        e.preventDefault()
        const adddetails = {username,email,phonenumber,password,address,state,city,authorities,gender,verify}
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
                
                console.log("User Added")
                emailjs.sendForm('service_d3gyrxg', 'template_10oi03j', form.current, 'OIRjUZ6EK9lCffxee').then((response) => {
                    
                        console.log("Mail Has Been Send To The Recipients")
                        
                        usenavigate('/redirecter')
                    
                }).catch((err) => {
                    alert(err)
                })
            }
        }).catch((error)=>{
            console.log("User Already Present")
        })
        console.log(adddetails)
    }


    console.log("Gender",gender)



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
                                                    <a  href="/login" role="tab">Login</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a  href="/signup" role="tab" aria-selected="true">Signup</a>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <h4 className="gradient">Signup</h4>

                                            <form className="my-login-validation" ref={form}  onSubmit={handleClick}   noValidate={false}>
                                                <div className="gradient">
                                                    
                                                    <input style={{cursor:"pointer"}} id="username" type="email" minLength={5}
                                                       placeholder='Enter Email' name='user_email' value={recipient} onChange={(e)=>setUsername(e.target.value)} required />

                                                    <div className="invalid-feedback">
                                                        UserId is invalid
                                                    </div>



                                                </div>

                                                <div className="gradient">
                                                    <input style={{cursor:"pointer"}} id="username" type="username" minLength={5}
                                                       placeholder='Enter Username' onChange={(e)=>setEmail(e.target.value)} value={email} required />
                                                    <div className="invalid-feedback">
                                                        Username is required
                                                    </div>
                                                </div>
                                                <br/>
                                                <div style={{cursor:"pointer"}} className="gradient" onChange={(e)=>setGender(e.target.value)}>
                                                <BootStrap.Form.Group className="mb-3"  required>
                                                <BootStrap.Form.Select id='category1' name='category1'>
                                                    <option></option>
                                                    <option>Men</option>
                                                    <option>Women</option>
                                                    <option>Kids</option>
                                                </BootStrap.Form.Select>
                                                </BootStrap.Form.Group>
                                                    <div className="invalid-feedback">
                                                        Username is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input style={{cursor:"pointer"}} id="phonenumber" type="phonenumber" minLength={10}
                                                       placeholder='Enter Phonenumber' onChange={(e)=>setPhonenumber(e.target.value)} value={phonenumber} required />
                                                    <div className="invalid-feedback">
                                                        Phonenumber is required
                                                    </div>
                                                </div>


                                                <div className="gradient">
                                                    <input style={{cursor:"pointer"}} id="password" type="password" minLength={8}
                                                       placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} required />
                                                    <div className="invalid-feedback">
                                                        Password is required
                                                    </div>
                                                </div>
                                                
                                               
                                                <div style={{backgroundColor:"transparent",width:"0.1%",marginLeft:"68%",position:"absolute"}}>
                                                    <input style={{cursor:"pointer",color:"transparent"}} id="password" type="hidden" minLength={8}
                                                       name='message' value={msgBody} required />
                                                    
                                                </div>






                                                <div className="form-group m-0">
                                                    <button type="submit" className="btn btn-primary">

                                                        Register


                                                    </button>
                                                </div>
                                                
                                                <br/>
                                                    
                                                   <div>Already Have An Account?<a href="/login" >Login.</a></div> 
                                                
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