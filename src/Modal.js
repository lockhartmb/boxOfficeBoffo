import React from 'react';
import './Modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="modalWrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modalHeader">
                    <h3>How to play</h3>
                    <span className="closeModalBtn" onClick={props.close}>
                        <i className="fas fa-times"></i>
                        <span className="visuallyHidden">Close Modal</span>
                    </span>
                </div>
                <div className="modalBody">
                    <p>Predict the top ten highest grossing summer blockbusters! Compete against your friends.</p>
                    <ol>
                        <li>Select a year to see all the movies released that summer</li>
                        <li>Start adding movies to your list, highest grossing at the top, lowest grossing at the bottom</li>
                        <li>Click and drag movie names to reorder your list</li>
                        <li>Once you've added 10, lock in your list! Check your friend's lists to see who knows their stuff</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

// Thank you to https://dev.to/achowba/building-a-modal-in-react-15hg for the Modal info which was adapted for our needs!

export default modal;


