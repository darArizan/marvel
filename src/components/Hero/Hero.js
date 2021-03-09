import React, { Component } from 'react';
import './Hero.css'
import { Link } from 'react-router-dom'

class Hero extends Component {
    render() {
        return (
            <div className='card'>
                <h3 className='pageName'>{this.props.data.name}</h3>
                {/* <img src={this.props.data.thumbnail.path + '/portrait_medium.' +this.props.data.thumbnail.extension}/> */}
                <img className='heroPic'src={this.props.data.thumbnail.path + '.jpg'} />
                <div className='add'>
                    <Link to={'/hero/' + this.props.data.id}>Info</Link>
                    <button className='team' type='button' onClick={() => this.props.addHeroes(this.props.data)}>Add</button>
                </div>

            </div>
        );
    }
}

export { Hero };