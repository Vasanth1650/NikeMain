import React from 'react'
import './Styles/Running.css'
import * as BootStrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Styles/Running.scss'

function RunningShoes() {
  const usenavigate = useNavigate()

  const Options = (variable) => {
    console.log(variable);
    usenavigate('/section/' + variable);
  }

  const Jordan = (variable) => {
    usenavigate('/mostpopular/'+variable)
  }



  return (
    <div className='bad'>
      <div className='Running'>
        <img style={{ width: "90%" }} src='https://static01.nyt.com/images/2021/03/30/multimedia/28xp-shoes-09/28xp-shoes-09-videoSixteenByNine3000.jpg?year=2021&h=1687&w=3000&s=706011e2ec021596519858a40f7eae578a545278bd568ae9f5cc2a723bd89ee1&k=ZQJBKqZ0VN&tw=1' />
      </div>
      <div className='mainrun'>LOOKS GOOD. RUNS GOOD.</div>
      <div className='mainrun'>FEELS GOOD.</div>
      <div className='smalltext'>A smooth with an endless amount of comfort, the Nike React Infinity Run Flyknit 3 is the first
        step towards your best run</div>
      <div className='smalltext'>yet.</div>


      <div className='butns'>
        <BootStrap.Dropdown>
          <BootStrap.Dropdown.Toggle id="dropdown-button-dark-example1" className='bikes'>
            Shop
          </BootStrap.Dropdown.Toggle>

          <BootStrap.Dropdown.Menu className='dropin'>
            <BootStrap.Dropdown.Item className='dawd' onClick={() => Options("Mens training")}>Shop Men's</BootStrap.Dropdown.Item>
            <BootStrap.Dropdown.Item className='dawd' onClick={() => Options("Womens training")}>Shop Women's</BootStrap.Dropdown.Item>
            <BootStrap.Dropdown.Item className='dawd' onClick={() => Options("Kids training")}>Shop Kids's</BootStrap.Dropdown.Item>
            <BootStrap.Dropdown.Item className='dawd' onClick={() => Jordan("Womens training")}>Explore Jordan Womens Training</BootStrap.Dropdown.Item>
            <BootStrap.Dropdown.Item className='dawd' onClick={() => Jordan("Mens training")}>Explore Jordan Mens Training</BootStrap.Dropdown.Item>
            <BootStrap.Dropdown.Item className='dawd' onClick={() => Jordan("Kids training")}>Explore Jordan Kids Training</BootStrap.Dropdown.Item>
          </BootStrap.Dropdown.Menu>
        </BootStrap.Dropdown>


      </div>



    </div>
  )
}

export default RunningShoes