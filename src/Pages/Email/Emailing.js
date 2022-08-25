import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Headers/Header'
import EmailService from './Service/EmailService'
import './Styles/Emailing.scss'

function Emailing() {
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')
    const [subject, setSubject] = useState('')
    const [attachment, setAttachment] = useState('')
    const [user,setUsers] = useState({})
    const [total,setTotal] = useState()

    const getAllUsersEmail = () =>{
        let emails = ""
        user.map(user=>
            (emails += user.username+",")
        )
        setTotal(emails)
    }

    useEffect(()=>{
        gettter()
    },[])

    const gettter = () =>{
        EmailService.sendNormal().then((response)=>{
            setUsers(response.data)
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }


    const Emailer = (e) => {
        e.preventDefault()
        const details = { recipient, msgBody, subject, attachment }
        fetch("https://nike-backend.herokuapp.com/email/sendMail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        }).then((response) => {
            if (response.ok) {
                alert("Mail Has Been Send To The Recipients")
            }
        }).catch((err) => {
            alert(err)
        })
    }


    return (
        <div className='emailer'>
            <Header />
            <button className='btunemail' onClick={getAllUsersEmail}>Get All User Emails</button>
            
            <div className='mailerinf'>
                <input value={total} className='inputmailer' onChange={(e) => setRecipient(e.target.value)} placeholder='Send Recipent Mail'></input>
                <input className='inputmailer' onChange={(e) => setSubject(e.target.value)} placeholder='subject'></input>
                <input className='inputmailer' onChange={(e) => setMsgBody(e.target.value)} placeholder='Message'></input>
                <br/><br/>
                <button className='btunemail' onClick={Emailer}>Submit</button>
            </div>

            <Footer />
        </div>
    )
}

export default Emailing