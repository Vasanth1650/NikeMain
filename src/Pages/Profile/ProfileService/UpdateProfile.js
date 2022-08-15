import React, { useEffect, useState } from 'react'
import Service from '../Services/Service'
import { fetchUserData } from '../../../Api/AuthenticationService'
import { useNavigate } from 'react-router-dom'
import Header from '../../Headers/Header'
import Footer from '../../Footer/Footer'
import * as BootStrap from 'react-bootstrap'


function UpdateProfile() {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [subscription, setSubscription] = useState('')
    const [data, setData] = useState({})
    const [password, setPassword] = useState('')
    const usenavigate = useNavigate()


    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])




    const handleClick = (e) => {
        e.preventDefault()
        const addproduct = { username, email, address, city, state, phonenumber, password, subscription, gender }
        console.log(addproduct)
        if (data.id) {
            Service.updateUser(data.id, addproduct).then((response) => {
                usenavigate('/redering/setting..')
            }).catch((error) => {
                console.log(error)
            })
        } else {

        }
    }

    //data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN')




    let m = localStorage.getItem("Userid")

    useEffect(() => {
        Service.getUserById(data.id).then((response) => {
            setAddress(response.data.address)
            setCity(response.data.city)
            setGender(response.data.gender)
            setState(response.data.state)
            setPhonenumber(response.data.phonenumber)
            setUsername(response.data.username)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setSubscription(response.data.subscription)
        })
    }, [data])





    return (
        <div>
            <Header />
            <form onSubmit={handleClick}>
                <div>

                    <BootStrap.Form.Group style={{ width: "40%" }} className='profiledit' onChange={(e) => setGender(e.target.value)} required>

                        <BootStrap.Form.Select id='gender' name='gender' value={gender}>

                            <option>Men</option>
                            <option>Women</option>
                            <option>Kids</option>
                            <option>General</option>
                        </BootStrap.Form.Select>
                    </BootStrap.Form.Group>
                </div>

                

                <div class="form-group row">
                    <label for="address" class="col-4 col-form-label">Address*</label>
                    <div class="col-8">
                        <input id="address" name="address" placeholder="address" class="form-control here" onChange={(e) => setAddress(e.target.value)} value={address} required="required" type="text" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="address" class="col-4 col-form-label">State*</label>
                    <div class="col-8">
                        <input id="state" name="state" placeholder="state" class="form-control here" onChange={(e) => setState(e.target.value)} value={state} required="required" type="text" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="address" class="col-4 col-form-label">City*</label>
                    <div class="col-8">
                        <input id="city" name="city" placeholder="city" class="form-control here" onChange={(e) => setCity(e.target.value)} value={city} required="required" type="text" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="address" class="col-4 col-form-label">Phonenumber*</label>
                    <div class="col-8">
                        <input id="phonenumber" name="city" placeholder="phonenumber" class="form-control here" onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} required="required" type="text" />
                    </div>
                </div>


                


                <div class="form-group row">

                    <div class="col-8">
                        <BootStrap.Button type='submit'>Update</BootStrap.Button>
                    </div>
                </div>


            </form>

            <Footer />
        </div>
    )
}

export default UpdateProfile