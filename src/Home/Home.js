import React, { Component } from 'react';

import {Header} from '../components/Header/Header'
import {Search} from '../components/Search/Search'
import {Heroes} from '../components/Heroes/Heroes'


class Home extends Component {
    state={
        cards:[],
        inputValue:'',
        filteredHeroes:[]
    }




  getData=()=>{
      const key='eeb200114d4232f6d7ebf237348414b0'
      const baseUrl=' http://gateway.marvel.com/v1/public/characters?apikey='+key
     fetch(baseUrl)
     .then(data=>data.json())
     .then(results=>{
         this.setState({
             cards:results.data.results,
             filteredHeroes:results.data.results
         })
         
     })

 }

  componentDidMount=()=>{
      this.getData()
  }

  componentWillUpdate = (nextProps, nextState) => {
    if (nextState.inputValue !== this.state.inputValue) {
        const filterHeroes = this.state.cards.filter(card => (
            card.name.toLowerCase().includes(nextState.inputValue.toLowerCase())
        ))

        this.setState({
            filteredHeroes: filterHeroes
        
        })
     
    }
   
}

  setValue=(data)=>{
  this.setState({
      inputValue:data
  })

  }


    render() {
        return (
            <div>
               <Header/>
               <Search onSearch={this.setValue}/>
               <Heroes list={this.state.filteredHeroes}/> 
            </div>
        );
    }
}

export {Home};