import React from 'react';
import './item_showcase.css'

class Dashboard extends React.Component{
    render() {
        return(
            <div className="item_field">
                <div className="item_image" style={{ backgroundImage: `url(${this.props.image})` }}></div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.category}</h2>
                <h3>{this.props.price}</h3>
                <p>{this.props.quantity} на складе</p>
            </div>
    )}}

export default Dashboard;
