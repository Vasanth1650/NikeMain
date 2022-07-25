import React from 'react';
import { useState } from 'react';
import io from 'socket.io-client';
import Footer from '../Footer/Footer';
import Header from '../Headers/Header';
import Chat from './Chat';
import './Styles/Chat.css';

const socket = io.connect("https://nikelivechat.herokuapp.com");


function Livechat() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [tunnelid, setTunnelId] = useState("")

    
  
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
        const createlive = {username,tunnelid}
        fetch("https://nike-backend.herokuapp.com/livechat/addnewrequest",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(createlive)
        }).then((response)=>{
           
        }).catch((error)=>{
           
        })
      }
    };

    

  
    return (
      <div className="App">
      <Header/>
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
                setTunnelId(event.target.value);
              }}
              
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
        <Footer/>
      </div>
    )
}

export default Livechat