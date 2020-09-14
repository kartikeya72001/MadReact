import React, {Component} from 'react';
import Navbar from '../components/Navbar';

class Video extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar color="black" />
                <div class="trailers">
                    <div class="container">
                        <div class="row ipad-width">
                            <div class="col-md-12">
                                <div class="title-hd">
                                    <h2>Video Name</h2>
                                    <a href="#" class="viewall">View all <i class="ion-ios-arrow-right"></i></a>
                                </div>
                                <div class="videos">
                                    <div class="slider-for-2 video-ft">
                                        <div>
                                            <iframe class="item-video" src="" data-src="https://www.youtube.com/embed/1Q8fG0TtVAY"></iframe>
                                            <div class="title-hd">
                                                <h3 class="vname">Video Name</h3>
                                                <div class="vidbtns">
                                                    <i class="ion-heart like"/>
                                                    <i class="ion-share share"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <iframe class="item-video" src="" data-src="https://www.youtube.com/embed/w0qQkSuWOS8"></iframe>
                                            <div class="vidbtns">
                                                <i class="ion-heart like"/>
                                                <i class="ion-share share"/>
                                            </div>
                                        </div>
                                        <div>
                                            <iframe class="item-video" src="" data-src="https://www.youtube.com/embed/44LdLqgOpjo"></iframe>
                                            <div class="vidbtns">
                                                <i class="ion-heart like"/>
                                                <i class="ion-share share"/>
                                            </div>
                                        </div>
                                        <div>
                                            <iframe class="item-video" src="" data-src="https://www.youtube.com/embed/gbug3zTm3Ws"></iframe>
                                            <div class="vidbtns">
                                                <i class="ion-heart like"/>
                                                <i class="ion-share share"/>
                                            </div>
                                        </div>
                                        <div>
                                            <iframe class="item-video" src="" data-src="https://www.youtube.com/embed/e3Nl_TCQXuw"></iframe>
                                            <div class="vidbtns">
                                                <i class="ion-heart like"/>
                                                <i class="ion-share share"/>
                                            </div>
                                        </div>
                                        <div>
                                            <iframe class="item-video" src="" data-src="https://www.youtube.com/embed/NxhEZG0k9_w"></iframe>
                                            <div class="vidbtns">
                                                <i class="ion-heart like"/>
                                                <i class="ion-share share"/>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="slider-nav-2 thumb-ft">
                                        <div class="item">
                                            <div class="trailer-img">
                                                <img src="images/uploads/trailer7.jpg"  alt="photo by Barn Images" width="4096" height="2737" />
                                            </div>
                                            <div class="trailer-infor">
                                                <h4 class="desc">Wonder Woman</h4>
                                                <p>2:30</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="trailer-img">
                                                <img src="images/uploads/trailer2.jpg"  alt="photo by Barn Images" width="350" height="200" />
                                            </div>
                                            <div class="trailer-infor">
                                                <h4 class="desc">Oblivion: Official Teaser Trailer</h4>
                                                <p>2:37</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="trailer-img">
                                                <img src="images/uploads/trailer6.jpg" alt="photo by Joshua Earle" />
                                            </div>
                                            <div class="trailer-infor">
                                                <h4 class="desc">Exclusive Interview:  Skull Island</h4>
                                                <p>2:44</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="trailer-img">
                                                <img src="images/uploads/trailer3.png" alt="photo by Alexander Dimitrov" width="100" height="56" />
                                            </div>
                                            <div class="trailer-infor">
                                                <h4 class="desc">Logan: Director James Mangold Interview</h4>	
                                                <p>2:43</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="trailer-img">
                                                <img src="images/uploads/trailer4.png"  alt="photo by Wojciech Szaturski" width="100" height="56" />
                                            </div>
                                            <div class="trailer-infor">
                                                <h4 class="desc">Beauty and the Beast: Official Teaser Trailer 2</h4>	
                                                <p>2: 32</p>
                                            </div>	
                                        </div>
                                        <div class="item">
                                            <div class="trailer-img">
                                                <img src="images/uploads/trailer5.jpg"  alt="photo by Wojciech Szaturski" width="360" height="189" />
                                            </div>
                                            <div class="trailer-infor">
                                                <h4 class="desc">Fast&Furious 8</h4>	
                                                <p>3:11</p>
                                            </div>	
                                        </div>

                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            /*Comment Section*/
                    <div class="container">
                        <div class="row">
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
                        </div>
                    </div>
				</div>   
        )
    }

}

export default Video;