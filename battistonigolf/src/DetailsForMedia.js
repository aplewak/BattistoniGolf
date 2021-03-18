import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';




class DetailsForMedia extends Component {
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
          isOpen={this.props.mediaModalIsOpen}
        >
            <Button  onClick={this.props.closeMediaModal} variant="outline-danger">X</Button>{' '}
              <h4>Follow us on <a href="https://www.facebook.com/battistonigolf/">facebook</a></h4>
      
        </Modal>
    </div>
    );
  }
}

export default DetailsForMedia;