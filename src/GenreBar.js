import React, { Component } from 'react';
import CheckBox from './CheckBox.js';
import './styles/GenreBar.css'


export default class GenreBar extends Component {
    constructor(props) {
        super(props);
        this.state = {showGenres: false}
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
                <form className={hideGenres}>
                {
                    this.props.genres.map((val, i) => {
                        return <CheckBox name={val}
                                  updateChecks= {this.props.updateChecks}
                          class="genresToFilter check-box"
                                  key={i}/>
                    })
                }
                </form>
                <button onClick={this.toggleGenres} className="button">GENRES</button>
            </div>
        )
    }
}