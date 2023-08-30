import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import appAndroid from '../../Assets/footerImg/google.png';
import appApple from '../../Assets/footerImg/apple.png';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    const newsletterSubscribe = ()=>{
        console.log('click to button')
    }
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;