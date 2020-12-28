import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Info.css'
const key = 'eeb200114d4232f6d7ebf237348414b0';
class Info extends Component {
    state = {
        char: [],
        comics: null
    }

    getChar = () => {

        const setUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.props.match.params.id + '?apikey=' + key
        fetch(setUrl)
            .then(data => data.json())
            .then(result => {
                this.setState({
                    char: result.data.results[0]
                }, () => this.getComics())
            })


    }

    componentDidMount = () => {

        this.getChar()

    }

    getComics = () => {
        const secondUrl = this.state.char.com

    }



    render() {

        return (
            <div className='red'>
                <h3>{this.state.char.name}</h3>
                {/* <div>
                    {this.state.char.thumbnail && <img src={this.state.char.thumbnail.path + '/portrait_medium.' + this.state.char.thumbnail.extension} />}
                </div>
                 */}
                <div id='char'>
                    <Link className='move' to='/'>Home</Link>
                    {this.state.char.thumbnail && <img className='oneChar' src={this.state.char.thumbnail.path + ".jpg"} />}
                </div>
                <div class='desc'>
                    {this.state.char.description}
                </div>

            </div>
        );
    }
}

export { Info };