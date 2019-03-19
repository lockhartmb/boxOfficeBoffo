import React, { Component } from 'react';
import boffoLogo from './assets/boffoLogo.svg'
import './UserArea.css';
import './Global.css';

class UserArea extends Component {
    render() {
        return (
            <div className="userArea">
                <img className="boffoLogo clear" src={boffoLogo} alt="" />
                <p className="user">List Name: {this.props.userName}</p>
            </div>
        )
    }
}

export default UserArea;