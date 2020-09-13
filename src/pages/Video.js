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
            </div>
        )
    }

}

export default Video;