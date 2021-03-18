import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';




class DetailsForSimulator extends Component {
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
          isOpen={this.props.openSimModal}
        >
            <Button  onClick={this.props.closeSimModal} variant="outline-danger">X</Button>{' '}
              <h4>DetailsForSimulator</h4>
      
        </Modal>
    </div>
    );
  }
}

export default DetailsForSimulator;