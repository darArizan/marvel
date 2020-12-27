import React, { Component } from 'react';
import {Hero} from '../Hero/Hero'
import './Heroes.css'

class Heroes extends Component {

   getCards=()=>{
       return(
           <div className='main'>
               {this.props.list.map(data=> <Hero data={data}/>)}
               
           </div>
       )
   }






    render() {
        return (
            <>
               {this.getCards()} 
            </>
        );
    }
}

export {Heroes};