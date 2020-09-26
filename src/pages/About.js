import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import {Container,Col,Row} from 'react-bootstrap';
 

class About extends Component{
    constructor(props){
        super(props);

        this.state = [

        ]
    }
    render(){
        return(
            <div>
                <Navbar color="black"></Navbar>
                <Container style={{position:"relative",top:"14rem"}}>
                <Row>
                    <Col sm={7} style={{position:"relative",top:"7rem",marginBottom:"15rem"}}><img src="/images/AboutBackground.png"/></Col>
                    <Col sm={5}>
                        <h1>About Music Art Dance</h1>
                        <p>
                        My Talent Hunt is an initiative of Lamlord Ventures Private Limited registered with Ministry of Corporate Affairs, INDIA. My Talent Hunt is an interactive, talent discovery platform which allows users to represent their hyper local communities by showcasing their talent across categories in a fun way. The platform enables regional users to express their talent in the best possible way. It also helps create hyper local influencers across entertainment categories for people to be inspired by them. The platform pitches groups / users across categories against each other in a healthy competitive environment to bring out the best in them.
                        </p>
                        <p>
                        My Talent Hunt is the platform, where users can explore talents in a wider range and connect with them. Our world is full of abilities, but not everyone is getting a chance to showcase it to the broader audience. Mainly, the talents from rural areas do not even know how to showcase their talent. Many times, they miss excellent opportunities. We make sure that you do not miss any chance anymore to perform, showcase what you are good at, and win the contest. Our millennial segment will allow us to feature those young adults who are creatively gifted and have a passion for Fine Arts, Singing, Dancing, Photography, Modelling, Short Films.
                        </p>
                        <p>
                        We all know how important it is to highlight fine arts in our educational system. It helps to foster creativity in our young minds.
                        </p>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default About;