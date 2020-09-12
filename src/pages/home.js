import React, {Component} from 'react';
import Trending from '../components/home/Trending';
import Dance from '../components/home/Dance';
import Footer from '../components/Footer';
import Spotlight from '../components/home/Spotlight';
// import Trending from './Trending.js';
// import Dance from './Dance.js';
// import Spotlight from './Spotlight.js';
// import Footer from './Footer.js';

class App extends Component {
  render(){
    return (
	<div>
        <div class="topPoster">
            <img src="/images/blackRed.jpg" style={{maxWidth: "100%", height: "auto"}} alt=''/>
        </div>
        <div class="topPoster2">
            <img src="/images/blackRedTall.jpg" style={{maxWidth: "100%", height: "auto"}} alt='' />
        </div>

        <div>
            <Trending/>
            <Trending/>
            <Trending/>
        </div>

        <div class="movie-items">
          <div class="container">
            <div class="row ipad-width">
              <div class="col-md-8">
                <Dance/>
              </div>
              {/* <Spotlight /> */}
            </div>
          </div>
        </div>
        
        <Footer/>
    </div>
    )
  }
}

export default App;