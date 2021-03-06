import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    state = {
        search: ''
    }

    searchOnChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    submitSearch = () => {
        this.props.onSearch(this.state.search)
    }



    render() {
        return (
            <div className='search'>
                <input type='text' className='text' value={this.state.search} placeholder='Search' onChange={this.searchOnChange}></input>
                <button type='button' className='buttonSearch' onClick={this.submitSearch}></button>
            </div>
        );
    }
}

export { Search };