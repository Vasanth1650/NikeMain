import React, { useEffect, useState } from 'react'
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
import { BsSearch } from "react-icons/bs";


function Header() {
    const usenavigate = useNavigate();
    const [data, setData] = useState({});

    localStorage.setItem("Userid",data.id)

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

    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    function popupOpenClose(popup) {

        /* Add div inside popup for layout if one doesn't exist */
        if ($(".wrapper").length === 0) {
            $(popup).wrapInner("<div class='wrapper'></div>");
        }

        /* Open popup */
        $(popup).show();

        /* Close popup if user clicks on background */
        $(popup).click(function (e) {
            if (e.target === this) {
                if ($(popup).is(':visible')) {
                    $(popup).hide();
                }
            }
        });

        /* Close popup and remove errors if user clicks on cancel or close buttons */
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


    localStorage.setItem("Userid",data.id)

    
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

    


    return (
        <div className='headerss'>
            <BootStrap.Navbar className='bg'>
                <BootStrap.Container className='cont'>
                    <BootStrap.Navbar.Brand href="/Jordan"><SiJordan /></BootStrap.Navbar.Brand>
                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                        <BootStrap.Button href='dashboard/add' className='gradient-text'>ADD</BootStrap.Button>}
                    
                    
                    
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <div className='navtext'>
                            <BootStrap.Nav.Link data-js="open" class="container" className='navtext'>Help</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href='/subscription' className='navtext1'>JoinUs</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link className='navtext2' href='/login'>SignIn</BootStrap.Nav.Link>
                        </div>
                    </BootStrap.Navbar.Collapse>
                </BootStrap.Container>
            </BootStrap.Navbar>
            <BootStrap.Navbar collapseOnSelect expand="lg" className='mainnav'>
                <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="/"><SiNike className='nikesymbol' /></BootStrap.Navbar.Brand>
                    <BootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav" className='mainnavitems'>
                        <BootStrap.Nav className="me-auto">
                        
                            <BootStrap.Nav.Link className='mainnavtext' onClick={() => AllSection("Men's")} >MEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Women's")} >WOMEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Kids's")} >KIDS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Sport's")}>SPORTS</BootStrap.Nav.Link>
                            
                            
                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                <BootStrap.Button href="/allsection/mainadd" variant="warning" type="submit">ADD PRODUCTS</BootStrap.Button>}


                        </BootStrap.Nav>

                        <BootStrap.Nav.Link href="/wishlist" className='dum'><AiOutlineHeart /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="/checkout" className='dum'><BsHandbag /></BootStrap.Nav.Link>

                        <BootStrap.Nav.Link href='/search' className='dum'><BsSearch /></BootStrap.Nav.Link>
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




        </div>
    )
}

export default Header