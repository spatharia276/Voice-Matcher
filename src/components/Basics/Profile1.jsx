import React, { Component } from 'react'
import contact from './contactlogo.png';
import mailme from './mailmeimg.png';
import  './Style.css'
import biologo from './Piyush.jpeg'
import song from "./Sunny.mp3";

class Profile1 extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };
  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

    render() {
        return <><div className="bgg">
            <div id="home">   
                <h1 className="header-h1">Profile Page</h1>
            </div>
            <section id="container-about" className="container-about">
            <h1>About Me</h1> 

            <img src={biologo} width="180" height="180" alt="abtimg"/>
            <p>Piyush Pandey is a Chief Creative Officer Worldwide and Executive Chairman India, Ogilvy (agency). Ogilvy is a Indian AD company at a top level. Piyush Pandey has given his voice to Fevicol (‘Lagao Lagao, Aur Zor Lagao’), SBI (‘Taaki Rishton Ke Beech Dooriyan Na Aayein’), and Asian Paints (‘Har Ghar Kuch Kheta Hai’) He is honoured with Padma Shri in the year 2016 by the Government Of India. He has done voice-overs for many ads and sang several jingles, too.
            </p>
        
            <div>
            {/* Show state of song on website */}
            <p className="bthoo">
              {this.state.isPlaying ? 
                "Audio is Playing" : 
                "Audio is Paused"}
            </p>
    
            {/* Button to call our main function */}
            <button onClick={this.playPause} className="btho">
              Play | Pause
            </button>
            <div className="bthogy">Matched 87% with Sunny Deol</div>
          </div>

    </section>

    <section className="container-1">

    <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
    <h3> <strong>Piyush Pandey</strong></h3>
     <h4>Email Id: info0000@gmail.com</h4>
    <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=info0000@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
    <h4>Contant Info: 19200999394/2999839902</h4> 
</section>
</div>
        </>
    }
}
export default Profile1;
