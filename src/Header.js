import React, {Component} from 'react';

//prevent button from refreshing on page



class Header extends Component {
    render() {
        return (
            <div className="hero">
            <div className="infoContainer">
                <i className="fas fa-info-circle"></i>
            </div>
            <div className="title">
                <img src={require("./assets/logo.png")} className="logo" alt="Logo"/>
            </div>
            <form action="" className="form" onSubmit={this.handleFormSubmit}>
                <select name="" id="" className="selectBtn">
                    <option value="">Rock</option>
                    <option value="">Pop</option>
                    <option value="">EDM</option>
                    <option value="">Hip-Hop</option>
                    <option value="">R&B</option>
                    <option value="">K-Pop</option>
                </select>

                <button className="startBtn">T.O. the Event</button>
            </form>
            </div>
        );
    }
}

export default Header;