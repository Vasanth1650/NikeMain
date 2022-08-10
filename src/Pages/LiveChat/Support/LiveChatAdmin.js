import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../../Api/AuthenticationService'
import Footer from '../../Footer/Footer'
import Header from '../../Headers/Header'
import LiveService from  '../Services/LiveService'

function LiveChatAdmin() {
    const [lives,setLives] = useState([])
    const usenavigate = useNavigate()
    
    

    useEffect(()=>{
        getAllLives()
    },[])

    const getAllLives = () => {
        LiveService.getAllIds().then((response)=>{
            setLives(response.data)
            console.log(response.data)
        })
    }

    const deleteTunnel = (room) =>{
        LiveService.deletebytunnel(room).then((response)=>{
            getAllLives()
        }).catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div>
        <Header/>



        <div class="table-users">
                <div>LiveChat</div>


                <table className='table'>
                    <tr >

                        <th>Id</th>
                        <th>Username</th>
                        <th>Tunnel Id</th>
                        <th>Chat</th>
                        <th>Tunnel Clear</th>
                        <th width="230"></th>
                        <th width="230"></th>
                    </tr>
                    {
                        lives.map(lives =>
                            <tr>

                                <td>{lives.id}</td>
                                <td>{lives.username}</td>
                                <td>{lives.room}</td>
                                <td><a onClick={() => { navigator.clipboard.writeText(lives.room) }}  href='/livesupport'>Chat</a></td>
                                <td><a onClick={() => deleteTunnel(lives.room)} href=''>Clear Tunnel Under{lives.room}</a></td>
                                
                                
                            </tr>
                        )
                    }

                </table>

            </div>

                    <br/><br/>

        <Footer/>
    </div>
  )
}

export default LiveChatAdmin