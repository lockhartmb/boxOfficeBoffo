import React, { Component } from 'react';
import { render } from 'react-dom';
// import ReactSVG from 'react-svg';
import boffoLogo from './assets/boffoLogo.svg'
import './UserArea.css';
import './Global.css';

class UserArea extends Component {
    render(){
        return(
            <div className="userArea">
                <img className="boffoLogo clear" src={boffoLogo} alt=""/>
                <p className="user">{this.props.userName}</p>
            </div>
        )
    }
}

// render(<ReactSVG src="logo.svg" />, document.getElementById('root'))
export default UserArea;