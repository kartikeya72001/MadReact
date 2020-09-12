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
            <img src="/images/blackRed.webp" style={{maxWidth: "100%", height: "auto"}} />
        </div>
        <div class="topPoster2">
            <img src="/images/blackRedTall.webp" style={{maxWidth: "100%", height: "auto"}} />
        </div>
        <Trending title="Dance" text="Dance is a performing art form consisting of purposefully selected sequences of human movement."/>
        <Trending title="Music" text="Music is an art form, and cultural activity, whose medium is sound."/>
        <Trending title="Acting" text="Acting is an activity in which a story is told by means of its enactment by an actor"/>
        <Trending title="Rapping" text="Rapping is a musical form of vocal delivery that incorporates rhyme and rhythmic speech"/>
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