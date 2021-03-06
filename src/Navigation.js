import { Navbar, Container, Nav } from "react-bootstrap"
import logo from './images/default-monochrome-white.svg';
import Vivus from 'vivus';
import { useEffect } from 'react';
import './Navigation.css';
import { Link, Redirect } from 'react-router-dom';

export default function Navigation(props) {
    
    const drawLogo = () => {
        new Vivus('logo', {
            type: 'sync',
            duration: 300,
            animTimingFunction: Vivus.EASE_IN,
            file: logo,
            start: 'autostart'
          })
        }

    useEffect(drawLogo);
    
    return (
        <Navbar variant="dark" className=''>
            <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#home"><svg id='logo'>
                <use xlinkHref={logo}></use>
            </svg></Navbar.Brand>
            </Link>
            <Nav className="me-auto">

            { props.user == null && <Redirect to='/'></Redirect> }
            { props.user == null && <Link to='/login' className='nav-link'>Login</Link> }
            { props.user == null && <Link to='/register' className='nav-link'>Register</Link> }

            { props.user != null && <Nav.Link id='logout' onClick={() => submitLogout(props.setUser)}>Logout</Nav.Link> }
            { props.user != null && <Link to='/profile' className='nav-link'>Profile</Link> }
            
            </Nav>
            </Container>
        </Navbar>
    );
}

const submitLogout = (setUser) => {
    setUser(null);
    window.sessionStorage.removeItem('userInfo');
    window.localStorage.removeItem('userInfo');
}