import React, { useEffect, useState } from 'react'
import './chatbot.css'
import ChatBot from 'react-simple-chatbot';
import Headers from '../Headers/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap';


function Chatbots() {
  const usenavigate = useNavigate()
  const [id,setId] = useState()
  

  useEffect(()=>{
    setId(localStorage.getItem("Userid"));
  },[])
  

  const OrderStatus = () =>{
    usenavigate('/checking');
  }

  const Delivery = () =>{
    usenavigate('/delivery')
  }

  const membership = () =>{
    usenavigate('/subscription')
  }

  const Tees = () =>{
    usenavigate('/section/T Shirt')
  }

  const AirJordanXXXVI = () =>{
    usenavigate('/AirJordanXXXVI')
  }

  const mostpopular = (value) =>{
    usenavigate('/mostpopular/'+value);
  }

  const mostpopularf = (value) =>{
    usenavigate('/mostpopular/'+value);
  }


  const steps = [
    {
      id: '1',
      message: 'Hi Feel Free To Get Your Required Search We Make It Easy For You',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'OrderStatus', trigger: '3' },
        { value: 2, label: 'View Delivery Information', trigger: '4' },
        { value: 3, label: 'Get Member', trigger: '5' },
        { value: 4, label: 'T-Shirts', trigger: '6'},
        { value: 5, label: 'Unlock Chat box Query', trigger: '7'},
        { value: 6, label: 'Jordan', trigger: '9'},
        { value: 7, label: 'Mens Collections', trigger: '10'},
        { value: 8, label: 'Womens Collections', trigger: '11'},
      ],
    },
    {
      id: '3',
      component:(
        <div>
          <div>View Your Order Status</div>
          <BootStrap.Button onClick={OrderStatus}>OrderStatus</BootStrap.Button>
        </div>
      ),
      trigger: '2',
    },
    {
      id: '4',
      component:(
        <div>
          <div>View Our Delivery Information</div>
          <BootStrap.Button onClick={Delivery}>Delivery Team</BootStrap.Button>
        </div>
      ),
      trigger: '2',
    },
    {
      id: '5',
      component:(
        <div>
          <div>View Our MemberShip Package</div>
          <BootStrap.Button onClick={membership}>Join us</BootStrap.Button>
        </div>
      ),
      trigger: '2',
    },
    {
      id: '6',
      component:(
        <div>
          <div>View Our Tees And Shorts</div>
          <BootStrap.Button onClick={Tees}>Shop</BootStrap.Button>
        </div>
      ),
      trigger: '2',
    },
    {
      id: '7',
      user: true,
      trigger: '8',
    },{
      id:'8',
      message: 'Hi No Other Option Currently Available',
      trigger:'2',
    },
    {
      id:'9',
      component:(
        <div>
          <div>View AirJordanXXXVI</div>
          <BootStrap.Button onClick={AirJordanXXXVI}>Shop</BootStrap.Button>
        </div>
      )
    },
    {
      id:'10',
      component:(
        <div>
          <div>Mens Collections</div>
          <BootStrap.Button onClick={() => mostpopular("Men's")}>Shop</BootStrap.Button>
        </div>
      )
    },
    {
      id:'11',
      component:(
        <div>
          <div>Womens Collections</div>
          <BootStrap.Button onClick={() => mostpopular("Women's")}>Shop</BootStrap.Button>
        </div>
      )
    }
  ]

  

  
  return (
    <div>
        <Headers/>
        
        <div className='chatbox'>
     
        <ChatBot steps={steps} />
        
        </div>
        <Footer/>
       
    </div>
        )
}

export default Chatbots