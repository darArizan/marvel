import React, { Component } from 'react';
import './MyTeam.css'
import { TeamHeroes } from '../TeamHeroes/TeamHeroes'

class MyTeam extends Component {
    render() {
        return (
            <div className='myTeam'>
                <h3 className='teamListName'> My team</h3>
                {this.props.data.map(hero => <TeamHeroes data={hero} onDelete={this.props.onDelete} />)}
            </div>
        )
    }
}

export { MyTeam };