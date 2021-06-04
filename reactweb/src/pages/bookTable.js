import React, {Component , useState} from 'react';
import {Button , Modal, ModalBody, ModalHeader, Container,Row, Col, Input, Form , Label, FormGroup} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Book extends Component {


  constructor(props){
    super(props);

    this.state= {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render(){
    return(

      <div className="home">
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader>Reserve a table</ModalHeader>
      <ModalBody>
      <FormGroup>
      <Label >No of Guest</Label>
      <Input type="select" name="select" id="">
      <option>1</option>
        <option>2</option>
          <option>3</option>
            <option>4</option>
              <option>6</option>
                <option>6</option>
      </Input>
      </FormGroup>

      <FormGroup>
      <Label>Date</Label>
      <Input type="date"></Input>
      </FormGroup>

      <FormGroup>
      <Label>Date</Label>
      <Input type="time"></Input>
      </FormGroup>
      <Container>
      <Row>
      <Button color="primary"><span >Reserve</span></Button>

        <Col md={{size:'auto', offset:0}}>
        <Button><span>Cancel</span></Button>
        </Col>
        </Row>
        </Container>
      </ModalBody>
      </Modal>
        <Button className="button" color="warning" onClick={this.toggleModal}>
        <span> Reserve table</span></Button>
      </div>

    );
  }
}

export default Book;
