import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

    const deleteTunnel = (tunnelid) =>{
        LiveService.deletebytunnel(tunnelid).then((response)=>{
            getAllLives()
        }).catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div>
        <Header/>



        <div class="table-users">
                <div class="header">LiveChat</div>


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
                                <td>{lives.tunnelid}</td>
                                <td><a onClick={() => { navigator.clipboard.writeText(lives.tunnelid) }}  href='/livesupport'>Chat</a></td>
                                <td><a onClick={() => deleteTunnel(lives.tunnelid)} href=''>Clear Tunnel Under{lives.tunnelid}</a></td>
                                
                                
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