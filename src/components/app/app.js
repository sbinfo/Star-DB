import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator';
import ErrorGenerator from '../error-generator/error-generator';
import SwapiService from '../../services/swapi-service';
import testFun from '../item-details';
import Row from '../row';
import ItemList from '../item-list';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';
import ErrorBoundry from '../error-boundry';

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



        return (

            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={4} />
                        <StarshipDetails itemId={5} />

                        <PersonList />
                        <StarshipList />
                        <PlanetList />

                        {/* <Row left={personDetails} right={personDetails} /> */}

                        {/* {randPlanet}
                <button type="button" onClick={this.onRandPlanetBlock} >Toggle random planet</button>
                <ErrorGenerator /> */}

                        {/* <PeoplePage /> */}

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};

export default App;