import css from './Modal.module.css';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount = () => {
    const { onClose } = this.props;
    window.addEventListener('keydown', onClose);
  };

  componentWillUnmount = () => {
    const { onClose } = this.props;
    window.removeEventListener('keydown', onClose);
  };
  
  render() {
    const { largeImage, onClose } = this.props;
    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img className={css.modalImage} src={largeImage} alt="" />
        </div>
      </div>
    );
  }
}
