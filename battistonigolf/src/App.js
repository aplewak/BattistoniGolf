import './App.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import tst from '../src/IMAGES/bg.svg'
import golfvid from '../src/IMAGES/golf.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse} from 'react-collapse';
import DetailsForAbout from './DetailsForAbout.js'
import DetailsForLessons from './DetailsForLessons.jsx'
import DetailsForMedia from './DetailsForMedia.js'
import DetailsForSimulator from './DetailsForSimulator.jsx'


class App extends Component {
  constructor (){
    super();


    this.state ={
      
      aboutModalIsOpen:false
     , lessonsModalIsOpen:false
     , mediaModalIsOpen:false
     , openSimModal:false

    };

    this.getDetailsforAbout = this.getDetailsforAbout.bind(this);
    this.closeAboutModal = this.closeAboutModal.bind(this);

    this.getDetailsforLessons = this.getDetailsforLessons.bind(this);
    this.closeLessonsModal = this.closeLessonsModal.bind(this);

    this.getDetailsforMedia = this.getDetailsforMedia.bind(this);
    this.closeMediaModal = this.closeMediaModal.bind(this);

    this.getDetailsforSimulator = this.getDetailsforSimulator.bind(this);
    this.closeSimulatorModal = this.closeSimulatorModal.bind(this);

   
  }


  getDetailsforAbout(){
    this.setState({
      aboutModalIsOpen:!this.state.aboutModalIsOpen
    });
  }

  closeAboutModal(){
     this.setState({
      aboutModalIsOpen:!this.state.aboutModalIsOpen
    });
  }  

  getDetailsforLessons(){
     this.setState({
      lessonsModalIsOpen:!this.state.lessonsModalIsOpen
    });
  }
  
  closeLessonsModal(){
     this.setState({
      lessonsModalIsOpen:!this.state.lessonsModalIsOpen
    });
  }


  getDetailsforMedia(){
    this.setState({mediaModalIsOpen:!this.state.mediaModalIsOpen})

  }

  closeMediaModal(){
    this.setState({mediaModalIsOpen:!this.state.mediaModalIsOpen})
  }

  getDetailsforSimulator(){
    this.setState({openSimModal:true})
  }

  closeSimulatorModal(){
    this.setState({openSimModal:!this.state.openSimModal})
  }


  render() {
  return (
    <div className="App">


        <video
        autoPlay={true}
        loop={true}
        muted={true}
        style={{
          position:"absolute",
          width:"100%",
          left:"50%",
          top:"50%",
          height:"100%",
          objectFit:"cover",
          transform: "translate(-50%,-50%)",
          zIndex:"-1",
           }}>
          <source src={golfvid} type="video/mp4" />
        </video>
        
        <img className="" src={tst}   style={{width:"350px",maxWidth:'250px',height:'auto',alt:"Responsive image"}} alt="Logo" />
        <h4 style={{color:"white"}}><a href="#">716-810-9000</a></h4>
     
          <Button  style={{height:'30px' }} variant="outline-success" onClick={this.getDetailsforAbout}>About</Button>{' '}
          <Button  style={{height:'30px' }} variant="outline-success" onClick={this.getDetailsforMedia}>Media</Button>{' '}
          <Button  style={{height:'30px' }} variant="outline-success" onClick={this.getDetailsforSimulator}>Simulator</Button>{' '}
          <Button  style={{height:'30px' }} variant="outline-success" onClick={this.getDetailsforLessons}>Lessons </Button>{' '}
     
          
            <DetailsForAbout
              ModalIsOpen={this.state.aboutModalIsOpen}
              closeAboutModal ={this.closeAboutModal}
            >
            </DetailsForAbout>

            <DetailsForLessons
              lessonsModalIsOpen={this.state.lessonsModalIsOpen}
              closeLessonsModal={this.closeLessonsModal}
            >
            </DetailsForLessons>

              <DetailsForMedia
                mediaModalIsOpen={this.state.mediaModalIsOpen}
                closeMediaModal={this.closeMediaModal}
              >
              </DetailsForMedia>


              <DetailsForSimulator

              openSimModal={this.state.openSimModal}
              closeSimModal={this.closeSimulatorModal}

              >
              </DetailsForSimulator>
           
            
          
    </div>
  );
}
}
export default App;
