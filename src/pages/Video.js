import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import {Container,Col,Row} from 'react-bootstrap';

class Video extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar color="black" />
                <Container className="videocontainer">
                    <Row>
                        <Col sm={9}>
                            <video controls>
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <div>
                                <span>
                                    Video name
                                </span>
                                <div>
                                    <i class="ion-thumbs-up" style={{color:"black"}}></i>
                                </div>

                            </div>
                            <div class="col-md-8 commentSection">
                                <div class="post-content">
                                  <div class="post-container">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" class="profile-photo-md pull-left"/>
                                    <div class="post-detail">
                                      <div class="user-info">
                                        <h5><a href="#" class="profile-link">Alexis Clark</a> <span class="following">following</span></h5>
                                        <p class="text-muted">Published a photo about 3 mins ago</p>
                                      </div>
                                      <div class="reaction">
                                        <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 13</a>
                                        <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 0</a>
                                      </div>
                                      <div class="line-divider"></div>
                                      <div class="post-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                                      </div>
                                      <div class="line-divider"></div>
                                      <div class="post-comment">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="profile-photo-sm"/>
                                        <p><a href="#" class="profile-link">Diana </a><i class="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                      </div>
                                      <div class="post-comment">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="profile-photo-sm"/>
                                        <p><a href="#" class="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                      </div>
                                      <div class="post-comment">
                                        <img src="/images/Icons.png" alt="" class="profile-photo-sm"/>
                                        <input type="text" class="form-control" placeholder="Post a comment"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                        <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Slidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                            <video className="Sidebar">
                                <source src="/images/video.mp4" type="video/mp4" />

                                Your browser does not support the video.
                            </video>
                        </Col>
                    </Row>
                </Container>
				</div>   
        )
    }

}

export default Video;