import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import {Container,Col,Row} from 'react-bootstrap';
import "./HowItWorks.css"

class HowitWorks extends Component{
    constructor(props){
        super(props);

        this.state = [

        ]
    }
    render(){
        return(
            <div>
                <Navbar color="black"></Navbar>
                <Container className="contain">
                    <Row className="imgRow">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/1a.png"></img>
                        </Col>
                        <Col md={4} className="images"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/1b.png"></img></Col>
                    </Row>
                    <Row className="imgRow">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/2a.png"></img>
                        </Col>
                        <Col md={4} className="images"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/2b.png"></img></Col>
                    </Row>
                    <Row className="imgRow">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/3a.png"></img>
                        </Col>
                        <Col md={4} className="images"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/3b.png"></img></Col>
                    </Row>
                    <Row className="imgRow">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/4a.png"></img>
                        </Col>
                        <Col md={4} className="images"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/4b.png"></img></Col>
                    </Row>
                    <Row className="imgRow">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/5a.png"></img>
                        </Col>
                        <Col md={4} className="images"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/5b.png"></img></Col>
                    </Row>
                    <Row className="imgRow">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/6a.png"></img>
                        </Col>
                        <Col md={4} className="images"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/6b.png"></img></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HowitWorks;