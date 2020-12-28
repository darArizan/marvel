import React, { Component } from 'react';
import './TeamHeroes.css'

class TeamHeroes extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.data.name}</h3>
                <img src={this.props.data.thumbnail.path + '.jpg'} />
            </div>
        );
    }
}

export { TeamHeroes };