import React, { Component } from 'react';
import './Search.css'

class Search extends Component {

      getValue=(event)=>{
          const value=event.target.value
            if(event.charCode===13){
                this.props.onSearch(value)
     }
    
  }

         

      

    render() {
        return (
            <div className='search'>
               <input type='text' placeholder='Search' onKeyPress={this.getValue}></input>
               <button type='button' >go</button> 
            </div>
        );
    }
}

export  {Search};