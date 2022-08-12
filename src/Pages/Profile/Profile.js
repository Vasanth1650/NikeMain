import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import { fetchUserData } from '../../Api/AuthenticationService';
import * as BootStrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const [data,setData] = useState('')
    const usenavigate = useNavigate()
    
    
    useEffect(()=>{
        if(!localStorage.getItem("USER_KEY")){
            localStorage.clear()
            usenavigate('/login')
        }
    },[])


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
            
        }).catch((e) => {
            localStorage.clear();
        })
    },[])


    console.log(data.roleCode)
  
    
   

    
    
    
  return (
    <div>
        <Header/>

        <div class="container">
                <div class="row">
                    <div class="col-md-3 ">
                        <div class="list-group ">
                            <a href="#" class="list-group-item list-group-item-action ">Profile</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 className="gradient">Your Profile</h4>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form>
                                            <div class="form-group row">
                                                <label for="username" class="col-4 col-form-label">User Name*</label>
                                                <div class="col-8">
                                                    <input id="username" name="username" placeholder="Username" class="form-control here" value={data && `${data.email} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="email" class="col-4 col-form-label">Email*</label>
                                                <div class="col-8">
                                                    <input id="email" name="email" placeholder="Email" class="form-control here" value={data && `${data.username} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="email" class="col-4 col-form-label">Gender*</label>
                                                <div class="col-8">
                                                    <input id="email" name="email" placeholder="Email" class="form-control here" value={data && `${data.gender} `} required="required" type="text" />
                                                </div>
                                                
                                            </div>

                                            <div class="form-group row">
                                                <label for="phonenumber" class="col-4 col-form-label">Phonenumber*</label>
                                                <div class="col-8">
                                                    <input id="phonenumber" name="phonenumber" placeholder="PhoneNumber" class="form-control here" value={data && `${data.phonenumber} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="phonenumber" class="col-4 col-form-label">Address*</label>
                                                <div class="col-8">
                                                    <input id="phonenumber" name="phonenumber" placeholder="PhoneNumber" class="form-control here" value={data && `${data.address} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="phonenumber" class="col-4 col-form-label">State*</label>
                                                <div class="col-8">
                                                    <input id="phonenumber" name="phonenumber" placeholder="PhoneNumber" class="form-control here" value={data && `${data.state} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="phonenumber" class="col-4 col-form-label">City*</label>
                                                <div class="col-8">
                                                    <input id="phonenumber" name="phonenumber" placeholder="PhoneNumber" class="form-control here" value={data && `${data.city} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="subscription" class="col-4 col-form-label">subscription*</label>
                                                <div class="col-8">
                                                    <input id="subscription" name="subscription" placeholder="subscription" class="form-control here" value={data && `${data.subscription} `} required="required" type="text" />
                                                </div>
                                            </div>

                                            
                                            <div>*To disable the dashboard auto customization select general in update of gender</div>
                                            <br/>
                                            <div class="form-group row">
                                                <label for="phonenumber" class="col-4 col-form-label">Update Profile*</label>
                                                <div class="col-8">
                                                    <BootStrap.Button href="/updateprofile">Update</BootStrap.Button>
                                                </div>
                                            </div>
                                            

                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



            

            





        <Footer/>
    </div>
  )
}

export default Profile