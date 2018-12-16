import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";

import "./productDetailModal.scss";

export default class ProductDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModal: !this.state.isModal
    });
  }

  render() {
    return (
      <div>
        <a href="#" data-target="modal" data-toggle="modal" onClick={this.toggleModal}>
          {this.props.caption}
        </a>
        <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h2>{this.props.category}</h2>
          </ModalHeader>
          <ModalBody className="product__main">
            <h3>{this.props.caption}</h3>
            <img src={this.props.img} className="product__image" />
            <p>{this.props.description}</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
