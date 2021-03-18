import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import {Button,Card,Table} from 'react-bootstrap';
import gary from '../src/IMAGES/gary.jpg';
import {Collapse} from 'react-collapse';



class DetailsForLessons extends Component {
   constructor() {
      super();
      this.state = {
        instructorInfoOpen:false
     }
     //bind functions
     this.openCloseMoreInfo = this.openCloseMoreInfo.bind(this);

  }


  openCloseMoreInfo(){
    this.setState({instructorInfoOpen:!this.state.instructorInfoOpen})
  }
  render() {
    return (
    <div>
       <Modal classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
          isOpen={this.props.lessonsModalIsOpen} 
        >

          <Button  onClick={this.props.closeLessonsModal} variant="outline-danger">X</Button>{' '}
        <center><h3>Golf Lessons/Packages</h3></center>

        <h4>Instructor</h4>

         
              <Card.Title>Gary Battistoni</Card.Title>
              <Button  onClick={this.openCloseMoreInfo} variant="outline-primary" >Instructor Info</Button>
                <Card.Text>
              <Collapse isOpened={this.state.instructorInfoOpen}>
                  <li>Named one of Golf Digest top instructors in the Northeast for 2005</li>
                  <li>Western New York PGA teacher of the year in 1999 </li>
                  <li> Recognized as one of the top instructors in New York State.</li>
                  <li> 2500 lessons per year at his teaching facility </li>
                  <li> He has taught NYS amateur champions Kyle Hess and John Gaffney. Many of his junior students are receiving scholarships to continue their golf careers in college.</li>
              </Collapse>
              </Card.Text>
          
          <div style={{float:'center',display:'responsive'}}><h3>Rates</h3>
          <Table  striped bordered hover size="sm" variant="dark" >
  <thead>
    <tr>
      <th>Type</th>
      <th>Rates</th>
      <th># of lessons</th>
      <th>Duration of Lesson</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Individual</td>
      <td>105.00$</td>
      <td>1</td>
      <td>45 minutes</td>
    </tr>
    <tr>
      <td>5 pack Indv.</td>
      <td>500.00$</td>
      <td>5</td>
      <td>limit 5 any day</td>
    </tr> 
    <tr>
      <td>Corporate Clinic 1hr</td>
      <td>500.00$</td>
      <td>1</td>
      <td>1hr minutes up to 20 people</td>
    </tr>
    <tr>
      <td>Corporate Clinic 2hr</td>
      <td>1,000.00$</td>
      <td>1</td>
      <td>2hr minutes up to 20 people</td>
    </tr>
    <tr>
      <td>18 hole round lesson</td>
      <td>TBD</td>
      <td>1</td>
      <td>18 holes</td>
    </tr>
   
  </tbody>
</Table>
</div>
        
       
       
        </Modal>

    </div>
    
    );
  }
}

export default DetailsForLessons;