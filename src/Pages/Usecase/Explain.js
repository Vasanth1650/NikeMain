import React, { useEffect, useState } from 'react'
import './Styles/Explain.scss'
import mountainBehind from './Images/mountainsbehind.png'
import mountainFront from './Images/mountainsfront.png'
import stars from './Images/stars.png'
import socketioconnection from './Images/Chat.png'
import Dashboard from './Images/Generate.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Headers/Header';
import $ from 'jquery'

function Explain() {
    const [dummy, setDummy] = useState('')
    const [socketio, setSocketio] = useState('')
    const [subscription, setSubscription] = useState('')
    const [category, setCategory] = useState('')
    const [profile,setProfile] = useState('')
    const [signup,setSignup] = useState('')
    const [wishlist,setWishlist]=useState('')

    useEffect(() => {

        if (dummy === "1" || subscription === "1" || category === "1" || profile==="1" || signup==="1" || wishlist==="1") {
            setTimeout(() => {
                setDummy('0')
                setSubscription('0')
                setCategory('0')
                setProfile('0')
                setSignup('0')
                setWishlist('0')
                
            }, 5000)
        }

    }, [dummy, subscription,category,profile,signup,wishlist])




    window.addEventListener('scroll', () => {
        let mountainf = document.getElementById('mountainFront')
        let mountainb = document.getElementById('mountainBehind')
        let star = document.getElementById('stars')
        let text = document.getElementById('textss')
        let butn = document.getElementById('button')
        let card1 = document.getElementById('card1')
        let card2 = document.getElementById('card2')
        let card3 = document.getElementById('card3')
        let card4 = document.getElementById('card4')
        let card5 = document.getElementById('card5')
        let dashboard = document.getElementById('dashboard')
        let search = document.getElementById('search')

        let value = window.scrollY;
        star.style.left = value * 0.25 + 'px';
        text.style.left = value * 0.2 + 'px';
        text.style.marignTop = value * 1.5 + 'px';
        mountainb.style.top = value * 0.1 + 'px';
        mountainf.style.top = value * 0 + 'px'
        butn.style.marginTop = value * 1.5 + 'px'
        card1.style.right = value * 1 + 'px'
        card3.style.right = value * -0.25 + 'px'
        card4.style.right = value * +0.25 + 'px'
        card5.style.left = value * 0.12 + 'px'
        dashboard.style.left = value * +0.100 + 'px'
        search.style.right = value * -0.07 + 'px'
    })

    return (
        <div className='explaintop'>
            <Header />




            <div className='sectionimage'>
                <img id='stars' className='smallimages' src={stars}></img>
                <img id='mountainBehind' className='smallimages' src={mountainBehind}></img>
                <img id='mountainFront' className='smallimagesmountain' src={mountainFront}></img>
                <div className='detailsseting'>NIKE WORLD</div>
                <div id='textss' className='detailsset'>USE CASE</div>
                <Button id='button' href='#card1' class='btn' className='exploreinf'>Explore</Button>

            </div>




            <div className='sectonsparass'>

                <img id='stars' className='smallimages' src="https://wallpaper.dog/large/17158263.jpg"></img>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                {dummy === "1" &&
                    <>
                        <div className='card1texting'>Aes Encryption</div>
                        <div className='cardbottomtexting1'>AES (Advanced Encryption Standard) has become the encryption algorithm of choice for governments, financial institutions, and security-conscious enterprises
                            around the world. The U.S. National Security Agency (NSC) uses it to protect the country’s “top secret” information.</div>
                    </>
                }
                <div className='cradexlain'>
                    <div id='card1' className='card1'>
                        <Card style={{ width: '28rem' }} className='vardbac'>
                            <Card.Img variant="top" src="https://metamug.com/article/images/security/aes-algorithm-java.jpg" />
                            <Card.Body>
                                <Card.Title>Data</Card.Title>
                                <div>
                                    We care for your data the signup information are stored according to the aes encrytion standard
                                </div>
                                <br />
                                <button onClick={() => setDummy("1")} className='learnmore'>Learn More</button>
                            </Card.Body>
                        </Card>


                    </div>

                    <div className='nextbackground'>
                        <div id='card2' className='card2'>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <Card style={{ width: '28rem' }} className='vardbac'>
                                <Card.Img style={{ height: "25%" }} variant="top" src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" />
                                <Card.Body>
                                    <Card.Title>JWT</Card.Title>
                                    <div>
                                        JSON Web Token provides user the token login system if he his authenticated via spring security
                                    </div>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '28rem' }} className='vardbac'>
                                <Card.Img variant="top" src="https://miro.medium.com/max/705/1*d_7YQ1mMmCkuO2X-5BISsA.png" />
                                <Card.Body>
                                    <Card.Title>Spring Security</Card.Title>
                                    <div>
                                        Spring Security helps to keep track of requests and do the authentication for us and store the particular request in principal
                                    </div>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>






                </div>


            </div>


            <div className='sectonsparass22'>

                <div className='otherthan'>Other Than Rest We Have</div>


                <Card id='card3' style={{ width: '28rem' }} className='vardbac1'>
                    <Card.Img style={{ height: "85%" }} variant="top" src="https://www.kindpng.com/picc/m/133-1335602_excel-logo-transparent-background-hd-png-download.png" />
                    <Card.Body>
                        <Card.Title>Excel</Card.Title>
                        <div>
                            We can store our data from database to excel of the current record
                        </div>

                    </Card.Body>
                </Card>


                <Card id='card4' style={{ width: '28rem' }} className='vardbac1'>
                    <Card.Img style={{ height: "82%" }} variant="top" src="https://images.indianexpress.com/2019/10/gmail-copy.jpg" />
                    <Card.Body>
                        <Card.Title>GMAIL</Card.Title>
                        <div>
                            We can send email from spring via smpt to clients currently in single recipeint
                        </div>

                    </Card.Body>
                </Card>




            </div>

            <div className='sectonsparass222'>
                <div className='otherthanbottom'>We Have Temporavary Chatter</div>
                <Card id='card5' style={{ width: '28rem' }} className='vardbac2'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--G8quSBoh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/iewk3xsyvwrgxdfh9ora.png" />
                    <Card.Body>
                        <Card.Title>Socket Io</Card.Title>
                        <div>
                            Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers
                        </div>
                        <br />
                        {socketio !== "1" &&
                            <button onClick={() => setSocketio("1")} className='learnmore'>View Logic</button>}
                        {socketio === "1" &&
                            <button onClick={() => setSocketio("0")} className='learnmore'>Close Logic</button>}
                    </Card.Body>
                </Card>

                {socketio === "1" &&
                    <>
                        <img className='socketioimage' style={{ width: "70%", height: "35%" }} src={socketioconnection}></img>
                    </>
                }

            </div>

            <div className='sectonsparass2222' >
                <div className='otherthanbottom'>DashBoard</div>
                <div className='otherthanbottomsmall'>we are providing custom generated dashboard according to user login information
                    If user doesn't like the auto generated dashboard after login he can turn of this feature any time in profile.</div>
                <Card style={{ width: '28rem' }} className='vardbac2' id='dashboard'>
                    <br /><br /><br />
                    <Card.Img variant="top" src={Dashboard} />
                    <Card.Body>
                        <Card.Title>User Experience</Card.Title>
                        <div>
                            Custom genrated dashboard according to gender which will help users to get their needs immediatly
                        </div>
                        <br />
                        <form action='/login'>
                            <button className='learnmore'>Login</button>
                        </form>

                    </Card.Body>
                </Card>

            </div>


            <div className='sectonsparass22222'>
                <div className='otherthanbottom'>Search</div>
                <div className='otherthanbottomsmall'>none other than global search feature with single request we will be mapped in a single page request.</div>
                <Card id='search' style={{ width: '28rem' }} className='vardbac2'>
                    <br /><br /><br />
                    <Card.Img style={{ height: "30%", width: "50%", marginLeft: "25%" }} variant="top" src="https://cdn.pixabay.com/photo/2018/10/31/03/20/search-3785148_1280.png" />
                    <Card.Body>
                        <Card.Title>Searcher</Card.Title>
                        <div>
                            Search along all wide variety with instant click we will help you get the perfect match
                        </div>
                        <br />
                        <form action='/search/Nike Air Max'>
                            <button className='learnmore'>Search</button>
                        </form>

                    </Card.Body>
                </Card>

            </div>




            <div className='sectonsparass222222'>
            <div className='otherthanbottom'>Other Functionalities</div>
                <div className='mainkeluft'>
                    
                    <div className='smallsmall' onClick={() => setSubscription("1")}>◍Subscription</div>
                    <div className='smallsmall' onClick={() => setCategory("1")}>◍Category</div>
                    <div className='smallsmall' onClick={() => setProfile("1")}>◍Profile</div>
                    <div className='smallsmall' onClick={() => setSignup("1")}>◍Signup</div>
                    <div className='smallsmall' onClick={() => setWishlist("1")}>◍Wishlist</div>
                </div>

                
                <div className='bottomsfloating'>
               
                    {subscription === "1" &&
                        <div className='bottomfloatingtext'>
                        <br/>
                        ----------------------------------------------
                        <br/>
                            Providing Three Different Variety Of Subscription Which Is Life Time Subscription According To Subscription The Offer May Differs
                        </div>
                    }

                    {category === "1" &&
                        <div className='bottomfloatingtext'>
                        <br/>
                        ----------------------------------------------
                            <br />
                            We Are Providing Wide Number Of Category With Single Page Render
                        </div>
                    }

                    {profile === "1" &&
                        <div className='bottomfloatingtext'>
                        <br/>
                        ----------------------------------------------
                            <br />
                            User Can Update Their Profile At Any Time
                        </div>
                    }

                    {signup === "1" &&
                        <div className='bottomfloatingtext'>
                        <br/>
                        ----------------------------------------------
                            <br />
                            Now User Can Create An Account With Lower Detail Requirments
                        </div>
                    }

                    
                </div>

            </div>


           




        </div>
    )
}

export default Explain