import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, closeModal, children }) => (
  <div className="modal-container" title={title}>
    <div className="modal">
      <button type="button" onClick={closeModal}>
        &times;
      </button>
      {children}
    </div>
    <style jsx global>{`
      body {
        overflow: hidden;
      }
      .modal-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
      }
      .modal {
        position: relative;
        background: #fff;
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
      }
      .modal > button {
        font-weight: 600;
        font-family: Arial, sans-serif;
        font-size: 2em;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        background: transparent;
        cursor: pointer;
        color: #1e7d74;
      }

      button:hover,
      button:focus,
      button:active {
        color: #2ec4b6;
      }
    `}</style>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
