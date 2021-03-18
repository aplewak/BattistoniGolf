import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';




class DetailsForAbout extends Component {
   constructor() {
      super();
      this.state = {
     }
     //bind functions
  }
  render() {
    return (
    <div>
       <Modal
       classname="aboutModal"
          isOpen={this.props.ModalIsOpen}
          
        >
            <Button  onClick={this.props.closeAboutModal} variant="outline-danger">X</Button>{' '}
       <h3>About Us</h3>
          <h6 style={{maxWidth:''}}>Battistoni is your complete practice facility to help maintain and improve your performance on and off the golf course</h6>
          <br></br>
          
          <h4>What We offer</h4>
           <li>We offer upto 290 yards of distance labeled target greens on our range</li>
           <li>Groomed put and chip area with with a practice bunker</li>
           <li>Indoor training facility with top of the line simulator technology</li>
          <br></br>
        
          <h4>Location: </h4>
          <h6>9030 Main St, Clarence, NY 14031</h6>
          <h4>Hours</h4>
            <h6>Daily: 8 a.m. - 10 p.m.</h6>
        </Modal>
    </div>
    
    );
  }
}

export default DetailsForAbout;