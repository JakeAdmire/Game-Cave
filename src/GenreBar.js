import React, { Component } from 'react';
import CheckBox from './CheckBox.js';
import './GenreBar.css'


export default class GenreBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresToFilter: [], 
            showGenres: false
        }
    }
    updateGenres = () => {
        let checked = [];
        const checkboxes = document.querySelectorAll('.genre-check-box')
        checkboxes.forEach((elem) => {
            if (elem.checked === true) {
                checked.push(elem.id)
            }
        })
        this.setState({genresToFilter: checked}, () => {
            this.props.updateState({filteredGames: this.filterGames()})
        });
    }
    filterGames = () => {
        let genres = this.state.genresToFilter;
        return this.props.games.filter(val => {
            return genres.every(elem => val.genres.includes(elem))
        })
    }
    toggleGenres = () => {
        if (this.state.showGenres) {
            this.setState({showGenres: false})
        } else {
            this.setState({ showGenres: true });   
        }
    }
    render() {
        let hideGenres = "";
        if (this.state.showGenres) {
            hideGenres = "genre-check";
        } else {
            hideGenres = "genre-check hide"
        }
        return (
            <div className="genre-bar search-section">
                <form onChange={this.updateGenres} className={hideGenres}>
                {
                    this.props.genres.map((val, i) => {
                        return <CheckBox {...this.props}
                                         name={val}
                                         class="genre-check-box"
                                         key={i}/>
                    })
                }
                </form>
                <button onClick={this.toggleGenres} className="button">GENRES</button>
            </div>
        )
    }
}