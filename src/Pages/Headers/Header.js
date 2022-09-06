import React, { useEffect, useState } from 'react'
import * as BootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { SiNike } from "react-icons/si";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { fetchUserData } from '../../Api/AuthenticationService';
import { BiLogOut } from "react-icons/bi";
import './Styles/Header.css';
import { SiJordan } from "react-icons/si";
import './Styles/Header.scss';
import $ from 'jquery';
import { ImSearch } from "react-icons/im";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Circle from './Circle';


function Header() {
    const usenavigate = useNavigate();
    const [data, setData] = useState({});
    const [element, setElement] = useState("")
    const { elements } = useParams()
    const [search,setSearch] = useState("")
    const [userid,setUserid] = useState("")
    localStorage.setItem("Userid", data.id)

    const AllSection = (value) => {
        console.log(value)

        usenavigate('/section/' + value);
        window.location.reload(false);
    }


    function logout() {
        localStorage.clear();
        window.location.reload(false);
        usenavigate('/')

    }


    useEffect(()=>{
        setUserid(data.id)
        setSearch(element)
    },[element])

    function popupOpenClose(popup) {

        if ($(".wrapper").length === 0) {
            $(popup).wrapInner("<div class='wrapper'></div>");
        }


        $(popup).show();


        $(popup).click(function (e) {
            if (e.target === this) {
                if ($(popup).is(':visible')) {
                    $(popup).hide();
                }
            }
        });


        $(popup).find("button[name=close]").on("click", function () {
            if ($(".formElementError").is(':visible')) {
                $(".formElementError").remove();
            }
            $(popup).hide();
        });
    }

    $(document).ready(function () {
        $("[data-js=open]").on("click", function () {
            popupOpenClose($(".popup"));
        });
    });





    $(document).ready(function () {
        $('.popup-btn').click(function (e) {
            $('.popup-wrap').fadeIn(500);
            $('.popup-box').removeClass('transform-out').addClass('transform-in');

            e.preventDefault();
        });

        $('.popup-close').click(function (e) {
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');

            e.preventDefault();
        });
    });


    const handleSubmit = e => {
        e.preventDefault();
        const details = {search,userid}
        fetch("https://nike-backend.herokuapp.com/search/addRecent",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(details)
        }).then((response)=>{
            console.log(response)
            
        }).catch((err)=>{
            console.log(err)
            
        })
        usenavigate('/search/' + element)
    };

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };


    return (
        <div className='headerss'>
            <BootStrap.Navbar className='bg'>
                <BootStrap.Container className='cont'>
                    <BootStrap.Navbar.Brand href="/Jordan"><SiJordan /></BootStrap.Navbar.Brand>




                    
                        <div class="nav justify-content-end">
                            <BootStrap.Nav.Link data-js="open" class="container" style={{color:"black",fontSize:"small"}}>Help</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href='/subscription' style={{color:"black",fontSize:"small"}}>JoinUs</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link  href='/login' style={{color:"black",fontSize:"small"}}>SignIn</BootStrap.Nav.Link>
                        </div>
                    
                </BootStrap.Container>
            </BootStrap.Navbar>
            <BootStrap.Navbar collapseOnSelect expand="lg" className='mainnav'>
                <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="/"><SiNike className='nikesymbol' /></BootStrap.Navbar.Brand>
                    <BootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav" className='mainnavitems'>
                        <BootStrap.Nav className="me-auto">

                           
                                <BootStrap.Nav.Link className='mainnavtext' href='/mens'>Men</BootStrap.Nav.Link>
                                <BootStrap.Nav.Link href='/womens'>Women</BootStrap.Nav.Link>
                                <BootStrap.Nav.Link href='/kids' >Kids</BootStrap.Nav.Link>
                                <BootStrap.Nav.Link href='/gift'>Gift</BootStrap.Nav.Link>
                              
                                    <BootStrap.Nav.Link href='/sale'>Sale<div style={{marginLeft:"60%",width:"190%",marginTop:"-90%"}}><Circle/></div></BootStrap.Nav.Link>
                                    
                                
                                
                            




                        </BootStrap.Nav>

                        <div className='formsearch1'>
                            <form className='formsearch'>
                                <MDBInputGroup >
                                    <MDBInput placeholder={elements} onChange={(e) => setElement(e.target.value)} onKeyPress={handleKeypress} className='formsearch' />
                                    <MDBBtn className='formsearchbutton' rippleColor='dark' onClick={handleSubmit} type="submit">
                                        <ImSearch />
                                    </MDBBtn>
                                </MDBInputGroup>
                            </form>
                        </div>


                        <BootStrap.Nav.Link href="/wishlist" className='dum'><AiOutlineHeart /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="/checkout" className='dum'><BsHandbag /></BootStrap.Nav.Link>



                    </BootStrap.Navbar.Collapse>
                </BootStrap.Container>
            </BootStrap.Navbar>








            <div className='popup'>
                <h6>Help</h6>
                <a href="/checking" className='dum'>Order Status</a>
                <br />
                <a href='/delivery' className='dum'>Dispatch And Delivery</a>
                <br />
                <a href='/livesupport' className='dum'>Returns</a>
                <br />
                <a href='/nikesupport' className='dum'>Guide Tour</a>
                <br />

                <a onClick={() => logout()} href='' className='dum'>logout</a>
            </div>




        </div >
    )
}

export default Header