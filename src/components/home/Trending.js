import React, {Component} from 'react';

class Trending extends Component {
   
  constructor(props){
    super(props);
    this.state =[
      
    ]
  }

  render(){
    return (
      <h1>
        <div class="slider movie-items">
	<div class="container">
		<div class="row">
			<div class="title-hd">
	<h2 style={{textAlign:"left",position:"relative",left:"3rem",color:"black"}}>{this.props.title}</h2>
			</div>
            <div>
            <h6 class="title-hd" style={{textAlign:"left",position:"relative",left:"3rem"}}>{this.props.text}</h6>
            </div>
	    	<div  class="slick-multiItemSlider">
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<a href="#"><img src="/images/uploads/slider1 (3).jpg" width="285" height="437" /><i class="ion-ios-play play"></i></a>

	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="blue views"><i class="ion-ios-eye"></i>1M</span>
	    				</div>
	    				<h6><a href="#">Interstellar</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
				<div class="movie-item">
	    			<div class="mv-img">
	    				<a href="#"><img src="/images/uploads/slider1 (1).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i></a>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="yell views"><i class="ion-ios-eye">1M</i></span>
	    				</div>
	    				<h6><a href="#">The revenant</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<a href="#"><img src="/images/uploads/slider1 (2).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i></a>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="green views"><i class="ion-ios-eye">1M</i></span>
	    				</div>
	    				<h6><a href="#">Die hard</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<a href="#"><img src="/images/uploads/slider1 (3).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i></a>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="blue views"><i class="ion-ios-eye">1M</i></span> 
	    				</div>
	    				<h6><a href="#">The walk</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<a href="#"><img src="/images/uploads/slider1 (2).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i></a>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="blue views"><i class="ion-ios-eye">1M</i></span>
	    				</div>
	    				<h6><a href="#">Interstellar</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
				<div class="movie-item">
	    			<div class="mv-img">
	    				<a href="#"><img src="/images/uploads/slider1 (1).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i></a>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="yell views"><i class="ion-ios-eye">1M</i></span>
	    				</div>
	    				<h6><a href="#">The revenant</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<img src="/images/uploads/slider1 (2).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="green views"><i class="ion-ios-eye">1M</i></span>
	    				</div>
	    				<h6><a href="#">Die hard</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<img src="/images/uploads/slider1 (3).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="blue views"><i class="ion-ios-eye">1M</i></span> 
	    				</div>
	    				<h6><a href="#">The walk</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    		<div class="movie-item">
	    			<div class="mv-img">
	    				<img src="/images/uploads/slider1 (1).jpg" alt="" width="285" height="437" /><i class="ion-ios-play play"></i>
	    			</div>
	    			<div class="title-in">
	    				<div class="cate">
	    					<span class="green views"><i class="ion-ios-eye">1M</i></span>
	    				</div>
	    				<h6><a href="#">Die hard</a></h6>
	    				<p><i class="ion-heart"></i><span>16K</span></p>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	</div>
</div>
      </h1>
    )
  }
}

export default Trending;