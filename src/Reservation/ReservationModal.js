import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default class ReservationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle} className="btn btn-outline-primary">
          Reservations
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h4>Book Reservation</h4>
          </ModalHeader>
          <ModalBody>
            <form>
              <div class="form-group">
                <label>Name</label> <input type="text" class="form-control" placeholder="Namen..." />
              </div>
              <div class="form-group">
                <label>Datum</label> <input type="text" class="form-control" placeholder="Datum..." />
              </div>
              <div class="form-group">
                <label>Gäste</label> <input type="text" class="form-control" placeholder="Anzahl an Gästen..." />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.toggle}>
              Schließen
            </Button>
            <Button color="success">Abschicken</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
