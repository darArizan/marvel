import React, { Component } from 'react';
import './TeamHeroes.css'

class TeamHeroes extends Component {

    render() {
        return (
            <div className='timHero'>
                <h3>{this.props.data.name}</h3>
                <img className='cardHero' src={this.props.data.thumbnail.path + '.jpg'} />
                <button className='delete' onClick={() => this.props.onDelete(this.props.data.id)}>delete</button>
            </div>
        );
    }
}

export { TeamHeroes };