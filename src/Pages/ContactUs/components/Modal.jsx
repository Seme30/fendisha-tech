import React from 'react'
import '../styles/modal.css'

const Modal = ({ text, setIsOpen }) => {
  return (
    <div className='darkBG' onClick={() => setIsOpen(false)}>
        <div className="centered">
            <div className="modal">
                <div className='modalHeader'>
                    <h2 className='heading'>Message</h2>          
                </div>
                <div className = 'closeBtn' onClick={() => setIsOpen(false)} style={{ marginBottom: "-3px" }}><i class="ri-close-fill"></i></div>
                <div className="modalContent">
                <p>{text}: Email Sent successfully</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal