import React, { Component } from 'react';
import './MyTeam.css'
import { TeamHeroes } from '../TeamHeroes/TeamHeroes'

class MyTeam extends Component {
    render() {
        return (
            <ul className='myTeam'>
                {this.props.data.map(hero => <TeamHeroes data={hero} onDelete={this.props.onDelete} />)}
            </ul>
        );
    }
}

export { MyTeam };