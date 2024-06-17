import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './Animation - 1718309800882.json'; 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const lottieRef = useRef(null);

    useEffect(() => {
        lottieRef.current = Lottie.loadAnimation({
            container: document.querySelector('#lottie'), 
            animationData: animationData,
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });

        return () => {
            lottieRef.current.destroy(); 
        };
    }, []);

    useEffect(() => {
        const animation = lottieRef.current;

        if (username.startsWith('admin')) {
            animation.playSegments([136, 150], true); // Frames for the first 5 characters match
        } else if (username.startsWith('admi')) {
            animation.playSegments([61, 136], true); // Frames for the first 4 characters match
        } else if (username.startsWith('adm')) {
            animation.playSegments([53, 61], true); // Frames for the first 3 characters match
        } else if (username.startsWith('ad')) {
            animation.playSegments([45, 53], true); // Frames for the first 2 characters match
        } else if (username.startsWith('a')) {
            animation.playSegments([26, 45], true); // Frames for the first character match
        } else {
            animation.goToAndStop(0, true); // Stop animation otherwise
        }
    }, [username]);

    useEffect(() => {
        const animation = lottieRef.current;

        if (password === 'admin') {
            animation.playSegments([26, 0], true); // Frames for the full password match
        } else if (password.startsWith('admin')) {
            animation.playSegments([45, 26], true); // Frames for the first 4 characters match
        } else if (password.startsWith('admi')) {
            animation.playSegments([53, 45], true); // Frames for the first 4 characters match
        } else if (password.startsWith('adm')) {
            animation.playSegments([61, 53], true); // Frames for the first 3 characters match
        } else if (password.startsWith('ad')) {
            animation.playSegments([136, 61], true); // Frames for the first 2 characters match
        } else if (password.startsWith('')) {
            animation.playSegments([150, 136], true); // Frames for the first character match
        }
        else {
            animation.goToAndStop(0, true); // Stop animation otherwise
        }
    }, [password]);

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div>
            <Container className="bg-container p-4 d-flex flex-column align-items-center">
                <Row className="w-100" >
                    <Col className="d-flex justify-content-center align-items-center">
                        <div id="lottie" style={{ width: '300px', height: '300px',marginTop:'-35px' }}></div>
                    </Col>
                </Row>

                <Row className="w-100" >
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Form style={{ width: '100%' }}>
                            <Form.Group className="mb-4" controlId="formBasicEmail" style={{ width: '100%' }}>
                                <Form.Label className="form-label">Enter Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    className="form-control-modern"
                                    style={{ width: '100%' }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword" style={{ width: '100%' }}>
                                <Form.Label className="form-label">Enter Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={handleChange}
                                    className="form-control-modern"
                                    style={{ width: '100%' }}
                                />
                            </Form.Group>
                            <Button variant="success" style={{ width: '100%', borderRadius: '10px' }}>Login</Button>
                            <hr />
                            <div style={{ textAlign: 'center' }}>Or sign in with social media</div>

                            <div className="social-icons mt-3" style={{ textAlign: 'center' }}>
                                <a href="#" className="mx-3 text-primary"><FaFacebook size={30} /></a>
                                <a href="#" className="mx-3 text-info"><FaTwitter size={30} /></a>
                                <a href="#" className="mx-3 text-danger"><FaGoogle size={30} /></a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
