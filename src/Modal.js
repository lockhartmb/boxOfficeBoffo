import React from 'react';

import './Modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="modalWrapper"
                style={{
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modalHeader">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modalBody">
                    <p>
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default modal;


