import React, { useEffect, useState } from 'react'
import './Styles/Chart.scss'
import {CChart} from '@coreui/react-chartjs'
import JordanService from './Services/JordanService'
import Header from '../Headers/Header'
import Footer from '../Footer/Footer'

function JordanCollection() {
    const [skyblue, setSkyblue] = useState("")
    const [pink, setPink] = useState("")
    const [green, setGreen] = useState('')
    const [black,setBlack] = useState("")
    const [brown,setBrown] = useState("")
    const [goldenrod,setGoldenrod] = useState("")
    const [red,setRed] = useState("")
    const [grey,setGrey] = useState("")
    const [gray,setGray] = useState("")
    const[blue,setBlue] = useState("")
    const [darkcyan,setDarkcyan] = useState("")
    const [white,setWhite] = useState("")
    const[purple,setPurple] = useState("")
    const [indigo,setIndigo] = useState("")
    const [orchid,setOrchid]=useState("")


    useEffect(() => {
        getByValues()
    }, [])



    const getByValues = () => {
        JordanService.getByCHart().then((response) => {
            setSkyblue(response.data.skyblue)
            setPink(response.data.pink)
            setGreen(response.data.green)
            setBlack(response.data.black)
            setBrown(response.data.brown)
            setGoldenrod(response.data.goldenrod)
            setRed(response.data.red)
            setGrey(response.data.grey)
            setGray(response.data.gray)
            setBlue(response.data.blue)
            setDarkcyan(response.data.darkcyan)
            setWhite(response.data.white)
            setPurple(response.data.purple)
            setIndigo(response.data.indigo)
            setOrchid(response.data.orchid)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className='chart' style={{userSelect:"none"}}>
            <Header/>
            <div className='analysis'>Analysis</div>
            <div className='avaliablejordan'>Colors Available In Jordan Section</div>
            <CChart style={{height:"30%",width:"50%",marginLeft:"22%"}}
                type="bar"
                data={{
                    labels: ['skyblue', 'pink', 'green','black','brown','goldenrod','red','grey','gray','blue',
                    'darkcyan','white','purple','indigo','orchid'],
                    datasets: [
                        {
                            label: 'Color',
                            backgroundColor: ['skyblue', 'pink', 'green','black','brown','goldenrod','red','grey','gray','blue',
                    'darkcyan','white','purple','indigo','orchid'],
                            data: [skyblue, pink, green,black,brown,goldenrod,red,grey,gray,blue,
                    darkcyan,white,purple,indigo,orchid],
                        },
                    ],
                }}
                labels="variety"
            />
            <Footer/>
        </div>
    )
}

export default JordanCollection