import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator';
import ErrorGenerator from '../error-generator/error-generator';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';
import Row from '../row';

class App extends Component {

    constructor() {
        super();

        this.swapiService = new SwapiService();

        this.state = {
            showRandomPlanet: true,
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onRandPlanetBlock = () => {
        this.setState(() => {
            const { showRandomPlanet } = this.state;
            return {
                showRandomPlanet: !showRandomPlanet
            }
        })
    }

    render() {

        const randPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const personDetails = (
            <ItemDetails itemId={11}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage} />

        );

        return (
            <div>
                <Header />

                <Row left={personDetails} right={starshipDetails} />

                {/* {randPlanet}
                <button type="button" onClick={this.onRandPlanetBlock} >Toggle random planet</button>
                <ErrorGenerator /> */}

                {/* <PeoplePage /> */}

            </div>
        );
    }
};

export default App;