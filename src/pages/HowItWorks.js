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
                <Container>
                    <Row style={{backgroundColor:"teal"}}>
                        <Col md={4}>
                            <img src="/images/HowItWorks/1a.png"></img>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}<img src="/images/HowItWorks/1b.png"></img></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HowitWorks;