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
    buttonA = () =>{
        document.getElementById("contain1").style.display = "block";
        document.getElementById("contain2").style.display = "none";
    }
    buttonB = () =>{
        document.getElementById("contain1").style.display = "none";
        document.getElementById("contain2").style.display = "block";
    }
    render(){
        return(
            <div>
                <Navbar color="black"></Navbar>
                <Container className="buttons">
                    <Row>
                        <Col md={6}><button className="b" id="b1" onClick ={this.buttonA}>How it Works</button></Col>
                        <Col md={6}><button className="b" id="b2" onClick ={this.buttonB}>Participate in Contests</button></Col>
                    </Row>
                </Container>
                <Container className="contain" id="contain1">
                    <Row className="imgRow" id="img1">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/1a.png"></img>
                        </Col>
                        <Col md={4} className="image"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/1b.png"></img></Col>
                    </Row>
                    <Row className="imgRow" id="img2">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/2a.png"></img>
                        </Col>
                        <Col md={4} className="image"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/2b.png"></img></Col>
                    </Row>
                    <Row className="imgRow" id="img3">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/3a.png"></img>
                        </Col>
                        <Col md={4} className="image"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/3b.png"></img></Col>
                    </Row>
                    <Row className="imgRow" id="img4">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/4a.png"></img>
                        </Col>
                        <Col md={4} className="image"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/4b.png"></img></Col>
                    </Row>
                    <Row className="imgRow" id="img5">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/5a.png"></img>
                        </Col>
                        <Col md={4} className="image"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/5b.png"></img></Col>
                    </Row>
                    <Row className="imgRow" id="img6">
                        <Col md={4} className="images">
                            <img src="/images/HowItWorks/6a.png"></img>
                        </Col>
                        <Col md={4} className="image"></Col>
                        <Col md={4} className="images"><img src="/images/HowItWorks/6b.png"></img></Col>
                    </Row>
                </Container>
                <Container id="contain2" style={{display:"none"}}>
                    <Row className="imgRow">
                        <Col className="images">
                            <img src="/images/HowItWorks/p2.png"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HowitWorks;