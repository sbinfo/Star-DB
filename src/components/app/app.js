import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            showRandomPlanet: true,
            selectedPerson: 1,
        }
    }

    onRandPlanetBlock = () => {
        this.setState( () => {
            const { showRandomPlanet } = this.state;
            return { 
                showRandomPlanet: !showRandomPlanet
             }
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
            loadingPerson: true
        })
    }

    render() {

        const randPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div>
                <Header />
                {/* <RandomPlanet /> */}
                { randPlanet }
                <button type="button" onClick={ this.onRandPlanetBlock } >Toggle random planet</button>


                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={ this.onPersonSelected } />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails 
                            personId={ this.state.selectedPerson }
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default App;