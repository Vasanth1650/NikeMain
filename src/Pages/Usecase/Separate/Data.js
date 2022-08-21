import React, { useEffect, useState } from 'react'
import Header from '../../Headers/Header'
import '../Styles/Explain.scss'
import mountainBehind from '../Images/mountainsbehind.png'
import mountainFront from '../Images/mountainsfront.png'
import stars from '../Images/stars.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Data() {
    const [dummy, setDummy] = useState('')

    window.addEventListener('scroll', () => {
        let mountainf = document.getElementById('mountainFront')
        let mountainb = document.getElementById('mountainBehind')
        let star = document.getElementById('stars')
        let text = document.getElementById('textss')
        let butn = document.getElementById('button')
        let card1 = document.getElementById('card1')


        let value = window.scrollY;
        text.style.right = value * 1.8 + 'px';
        text.style.marignTop = value * 1.5 + 'px';
        mountainb.style.top = value * 0.1 + 'px';
        mountainf.style.top = value * 0 + 'px'
        butn.style.marginTop = value * 1.5 + 'px'
        card1.style.right = value * 1 + 'px'

    })


    useEffect(() => {

        if (dummy === "1") {
            setTimeout(() => {
                setDummy('0')
            }, 10000)
        }

    }, [dummy])
    return (
        <div className='explaintop'>
            <Header />
            <div className='cradexlain'>
            <div className='sectonsparass'>

                    <img id='stars' className='smallimages' src="https://wallpapercave.com/wp/9fqDDuk.jpg"></img>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    {dummy === "1" &&
                        <>
                            <div className='card1texting'>Aes Encryption</div>
                            <div className='cardbottomtexting1'>AES (Advanced Encryption Standard) has become the encryption algorithm of choice for governments, financial institutions, and security-conscious enterprises
                                around the world. The U.S. National Security Agency (NSC) uses it to protect the country’s “top secret” information.</div>
                        </>
                    }

                </div>
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

                

            </div>
        </div>
    )
}

export default Data