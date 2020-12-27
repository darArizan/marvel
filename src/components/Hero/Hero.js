import React, { Component } from 'react';
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div className='card'>
                <h3>{this.props.data.name}</h3>
                {/* <img src={this.props.data.thumbnail.path + '/portrait_medium.' +this.props.data.thumbnail.extension}/> */}
                <img src={this.props.data.thumbnail.path + '.jpg'}/>
                <div className='add'>
                <button className='info' type='button'>Info</button>
                <button  className='team' type='button'>Add</button>
                </div>
               
            </div>
        );
    }
}

export  {Hero};