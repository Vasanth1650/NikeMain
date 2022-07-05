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
            
            <img onClick={() => AllSection("Men's")} className='imgsis' style={{width:"28%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/54238927-c5aa-46a3-abff-25162b3b1fd7/nike-just-do-it.png'/>
          
      
            <img onClick={() => AllSection("Women's")} className='imgsis' style={{width:"28%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/e64cc521-c652-49bd-bf62-f04cf9cb6b60/nike-just-do-it.png'/>
            <img onClick={() => AllSection("Kid's")}  className='imgsis' style={{width:"28%"}} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/aa8d60e4-d556-4022-9f83-9058601c20a4/nike-just-do-it.png'/>
        </div>

        <div className='adwa'>
        <button onClick={() => AllSection("Men's")} className='firt'>Men's</button>
        <button onClick={() => AllSection("Women's")} className="seond">Women's</button>
        <button onClick={() => AllSection("Kids's")} className='thrd'>Kid's</button>
        </div>
        

        

    </div>
  )
}

export default Gender