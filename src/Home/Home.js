import React, { Component } from 'react';
import './style.css'

import { Header } from '../components/Header/Header'
import { Search } from '../components/Search/Search'
import { Hero } from '../components/Hero/Hero'
import { MyTeam } from '../components/My team/MyTeam'


class Home extends Component {
    state = {
        cards: [],
        inputValue: '',
        filteredHeroes: [],
        favoriteHeroes: []
    }




    getData = () => {
        const key = 'eeb200114d4232f6d7ebf237348414b0'
        const baseUrl = ' http://gateway.marvel.com/v1/public/characters?apikey=' + key
        fetch(baseUrl)
            .then(data => data.json())
            .then(results => {
                this.setState({
                    cards: results.data.results,
                    filteredHeroes: results.data.results
                })

            })

    }

    componentDidMount = () => {
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

    setValue = (data) => {
        this.setState({
            inputValue: data
        })

    }

    favoriteHeroes = (hero) => {
        this.setState({
            favoriteHeroes: [...this.state.favoriteHeroes, hero]
        })

    }

    onHeroDelete = id => {
        const favourite = [...this.state.favoriteHeroes].filter(hero => hero.id !== id);

        this.setState({
            favoriteHeroes: favourite
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Search onSearch={this.setValue} />
                <div className='main'>
                    <div className="heroes">{this.state.filteredHeroes.map(data => <Hero addHeroes={this.favoriteHeroes} data={data} />)}</div>
                    <MyTeam data={this.state.favoriteHeroes} onDelete={this.onHeroDelete} />

                </div>



            </div>
        );
    }
}

export { Home };