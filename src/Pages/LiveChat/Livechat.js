import React, { useEffect } from 'react';
import { useState } from 'react';
import io from 'socket.io-client';
import Footer from '../Footer/Footer';
import Header from '../Headers/Header';
import Chat from './Chat';
import './Styles/Chat.css';
import ReactPlayer from 'react-player';
import { fetchUserData } from '../../Api/AuthenticationService';
import { useNavigate } from 'react-router-dom';

const socket = io.connect("https://nikelivechat.herokuapp.com");


function Livechat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [tunnelid, setTunnelId] = useState("")
  const [data,setData] = useState({})
  const usenavigate = useNavigate()
  

  useEffect(()=>{
    if(data.roleCode==="USER"){
      setRoom(data.id)
      setTunnelId(data.id)
      setUsername(data.username)
    }else if(data.roleCode==="ADMIN"){
      setUsername(data.username)
      setTunnelId(room);
    }
    
  },[data,room])

  useEffect(()=>{
    if(!localStorage.getItem("USER_KEY")){
      usenavigate('/login')
    }
  },[])


  React.useEffect(()=>{
    fetchUserData().then((response)=>{
      setData(response.data)
      console.log(response.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
      const createlive = { username, tunnelid }
      fetch("https://nike-backend.herokuapp.com/livechat/addnewrequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createlive)
      }).then((response) => {

      }).catch((error) => {

      })
    }
  };




  return (
    <div className="Apphjbj">
      <Header />
      <div>
        <br/>
        <div className='featuesa'>ONE VIDEO FOR SURE YOU GONNAA LOVE IT</div>

        <div className='knjdwanjdna' style={{ position: "static" }}>
          <ReactPlayer width={1100} height={600} controls muted type='video/mp4' url="https://youtu.be/BkMQXOJWlQk" playsinline />
        </div>
        <div className='mainrun'>THINK YOU'VE</div>
        <div className='mainrun'>SEEN IT ALL?</div>
        <div className='smalltext'>THE ONE THING THAT KEEP ME PUSHING AS A ENGINEER</div>
        <div className='smalltext'>IS GETTING THE RECOGNITION TO MY WORK</div>
      </div>

      <br/><br/>
      <div className='featuesa'>CUSTOMER SUPPORT CHANNEL THATS IT THE SITE ENDS HERE</div>
      <br/><br/>
      {data.roleCode==="ADMIN"&&
      <div className='bjdwawjnd'>
      {!showChat ? (
        <div className="joinChatContainer">
          {data.roleCode==="ADMIN" &&
          <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
            
          }}

        />}

          
          <button  onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      </div>}

      <br/><br/><br/><br/><br/>
      <Footer />
    </div>
  )
}

export default Livechat