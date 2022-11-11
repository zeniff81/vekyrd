import React from "react";
import reactDom from "react-dom";
import tick from "../assets/img/tick.svg";
import { motion } from "framer-motion";

const modalVariants = {
  from: {
    y: 50,
    opacity: 0
  },
  to: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2
    }
  }
};

function Modal({ children, title, setIsOpen }) {
  const close = () => {
    setIsOpen(false);
  };

  return reactDom.createPortal(
    <div className={`modal-overlay`}>
      <div className={`modal`}>
        <motion.div
          className={`modal-container `}
          variants={modalVariants}
          initial='from'
          animate='to'
        >
          <div className='header'>
            <img src={tick} alt='cotejo' />
          </div>

          <div className='title'>{title}</div>
          <div className='message'>{children}</div>
          <div className='buttons'>
            <button className='btn-close' onClick={close}>
              Cerrar
            </button>
          </div>
        </motion.div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
