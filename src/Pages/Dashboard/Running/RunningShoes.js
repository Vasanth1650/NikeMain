import React, { useEffect, useState } from 'react'
import './Styles/Running.css'
import * as BootStrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import DashboardService from '../../MostPopular/Services/DashboardService'
import './Styles/Running.scss'
import { fetchUserData } from '../../../Api/AuthenticationService'

function RunningShoes() {
  const usenavigate = useNavigate()
  const [data, setData] = useState([])




  React.useEffect(() => {
    fetchUserData().then((response) => {
      setData(response.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])




  const Options = (variable) => {
    console.log(variable);
    usenavigate('/section/' + variable);
  }

  const Jordan = (variable) => {
    usenavigate('/mostpopular/' + variable)
  }



  return (
    <div className='bad'>
      <div className='trendingfont'>Training</div>


      {localStorage.getItem("USER_KEY") &&
        <>
          {data.gender === "Men" &&
            <div onClick={() => Options("Soccer")}>

              <div className='Running'>
                <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/288b8a91-9660-4985-98c7-a64cd44658b2/men-s-shoes-clothing-accessories.jpg' />
              </div>
              <div className='mainrun3mens'>GET SET GO.</div>

              <div className='mainrun'>GET IN.</div>

              <div className='smalltext'>With our new football shoes you wont think of stop playing with this smoothnes</div>

              <div className='smalltext'>yet.</div>

              <div className='explorebuttoncenter'>
                <button className='exploremensbutton'>Explore</button>
              </div>
            </div>}
        </>}

      {localStorage.getItem("USER_KEY") &&
        <>
          {data.gender === "Women" &&
            <div onClick={() => Options("Womens training")}>

              <div className='Running'>
                <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/3caec76b-0055-4398-9c90-a3fe7c5d31de/women-s-shoes-clothing-accessories.png' />
              </div>
              

              <div className='mainrun'>GET IN.</div>

              <div className='smalltext'>Train like a succesor with our training shoes</div>

              <div className='smalltext'>The best yet to come.</div>

              <div className='explorebuttoncenter'>
                <button className='exploremensbutton'>Shop</button>
              </div>
            </div>}
        </>}

      {localStorage.getItem("USER_KEY") &&
        <>
          {data.gender === "Kids" &&
            <div onClick={() => Options("Soccer")}>

              <div className='Running'>
                <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/65786c71-ebf8-478b-a87b-0f83496e69ea/nike-kids.png' />
              </div>
              <div className='mainrun3mens'>GET SET GO.</div>

              <div className='mainrun'>GET IN.</div>

              <div className='smalltext'>With our new football shoes you wont think of stop playing with this smoothnes</div>

              <div className='smalltext'>yet.</div>

              <div className='explorebuttoncenter'>
                <button className='exploremensbutton'>Explore</button>
              </div>
            </div>}
        </>}

      {!localStorage.getItem("USER_KEY") &&
        <>
          {!data.gender &&

            <>

              <div className='Running'>
                <img style={{ width: "90%" }} src='https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/eba50b3e-2c09-4fbb-820e-005a44cfb704/jordan.jpg' />
              </div>



              <div className='mainrun' style={{fontSize:"large"}}>Howard University.</div>

              <div className='mainrun'>WELCOME TO THE FAMILY.</div>

              <div className='smalltext' style={{paddingLeft:"30%",paddingRight:"30%",fontSize:"small",fontWeight:"bolder"}}>We're proud to partner with HowardUniversity,one of the most
              iconic and esteemed Historically Black College and University(HBCUs) and the newest member of the Jordan family</div>



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
            </>}
        </>}



        {localStorage.getItem("USER_KEY") &&
        <>
          {data.gender==="General" &&

            <>

              <div className='Running'>
                <img style={{ width: "90%" }} src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/5d1abfbd-9ffc-4c06-be30-1090ed533247/pdp-replace.jpg' />
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
            </>}
        </>}





    </div>
  )
}

export default RunningShoes