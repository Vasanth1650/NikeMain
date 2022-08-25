import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/Gender.css'

function Gender() {

    const usenavigate = useNavigate()



    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }
  return (
    <div className='gendering'>
        <div className='gendertect'> More Nikes</div>
        <div className='aranimg'>
            
            <img onClick={() => AllSection("Football")} className='imgsis' style={{width:"28%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/74ab1ecb-e312-4d29-8669-8264c9ef79ba/nike-just-do-it.jpg'/>
          
      
            <img onClick={() => AllSection("Soccer")} className='imgsis' style={{width:"28%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/4e3bd1bf-7769-484e-aa39-83380ce6be1e/nike-just-do-it.jpg'/>
            <img onClick={() => AllSection("Volleyball")}  className='imgsis' style={{width:"28%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/04833b2d-f7b1-47bd-aabe-775a3a2dfc11/nike-just-do-it.jpg'/>
        </div>

        <div className='adwa'>
        <div onClick={() => AllSection("Football")} className='firt'>Football</div>
        <div onClick={() => AllSection("Soccer")} className="seond">Soccer</div>
        <div onClick={() => AllSection("Volleyball")} className='thrd'>Volleyball</div>
        </div>
        

        

    </div>
  )
}

export default Gender