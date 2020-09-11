import React, {Component} from 'react';
import Trending from './Trending.js';
import Dance from './Dance.js';
import Spotlight from './Spotlight.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

class App extends Component {
   
  constructor(props){
    super(props);
    this.state =[
      
	]
  }

  render(){
    return (
	<div>
		<Navbar/>
        <div class="topPoster">
            <img src="/images/blackRed.jpg" style={{maxWidth: "100%", height: "auto"}} />
        </div>
        <div class="topPoster2">
            <img src="/images/blackRedTall.jpg" style={{maxWidth: "100%", height: "auto"}} />
        </div>
        <Trending/>
        <Trending/>
        <Trending/>
<div class="movie-items">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-8">
				<Dance/>
			</div>
			{/* <Spotlight/> */}
		</div>
	</div>
</div>
        <Footer/>
</div>
    )
  }
}

export default App;