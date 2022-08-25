import React, { useState } from 'react'
import { fetchUserData } from '../../Api/AuthenticationService';
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Styles/Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Footer() {
    const [data, setData] = useState({});
    const usenavigate = useNavigate()

    function refresh() {
        window.location.reload(false);
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    const OrderUpdates = () => {
        localStorage.setItem("Role", "permit")
        usenavigate("/orderupdate")
        window.location.reload(false);
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_lc3a1or', 'template_it7jqmj', e.target, '0C3fg6Ghhl2fj0Jv4').then(response => {
            toast("Subscribed For New Launch Products Information")
        })
    }


    const RefundRequest = () => {
        usenavigate("/refund")
        window.location.reload(false);
    }



    return (
        <div>
            <div>
                <footer class="footer-section">
                    <div class="container">
                        <div class="footer-cta pt-5 pb-5">
                            <div class="row">
                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                    <BootStrap.Button onClick={RefundRequest} variant="warning" type="submit">Refund Requests</BootStrap.Button>}
                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 && <marquee>Check out The Latest Customer Orders</marquee>}
                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                    <BootStrap.Button onClick={OrderUpdates} variant="warning" type="submit">Order Updates</BootStrap.Button>}
                            </div>
                        </div>
                        <div class="footer-content pt-5 pb-5">
                            <div class="row">

                                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a onClick={refresh} href="/checking">Order Status</a></li>
                                            <li><a href="/delivery">Delivery</a></li>
                                            <li><a href="/livesupport">Returns</a></li>
                                            <li><a href="/paymentoptions">Payment Options</a></li>
                                            <li><a href="/livesupport">Contact Us</a></li>
                                            <li><a href="/usecase">About Site</a></li>

                                            <li><a href="/profile">Profile</a></li>
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                <li><a href='/chart/jordan' className='gradient-text'>Jordan Collection</a></li>}

                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                <BootStrap.Nav.Link href="/allsection/mainadd" type="submit">Add products</BootStrap.Nav.Link>}
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                <BootStrap.Button href='/admin/support' className='gradient-text'>Custome Support Channel</BootStrap.Button>}
                                                
                                        </ul>
                                    </div>

                                </div>
                                <div class="col-xl-4 col-lg-4 mb-50">
                                    <div class="footer-widget">


                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div class="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div class="subscribe-form">
                                            <form action="#" onSubmit={sendEmail}>
                                                <input name='user_email' type="text" placeholder="Email Address" />
                                                <button><i class="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="copyright-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div class="copyright-text">
                                        <p>Copyright &copy; 2022, All Right Reserved <h>Nike</h></p>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                    <div class="footer-menu">
                                        <ul>
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                <BootStrap.Button href='dashboard/add' className='gradient-text'>ADD</BootStrap.Button>}
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                <li><a href='/emailing'>Email</a></li>}
                                            
                                            <li><a href="https://www.eshopworld.com/shoppers/help/terms-and-conditions-of-sale-en/">Terms of Sale</a></li>
                                            <li><a href="https://agreementservice.svs.nike.com/sg/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=SG&language=en&requestType=redirect">Terms of Use</a></li>
                                            <li><a href="https://agreementservice.svs.nike.com/sg/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=SG&language=en&requestType=redirect">Nike Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Footer