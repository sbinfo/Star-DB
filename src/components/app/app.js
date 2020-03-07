import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import TestService from '../../services/test-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


class App extends Component {

    constructor() {
        super();

        this.state = {
            hasError: false,
            swapiService: new SwapiService(),
        }
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? TestService : SwapiService;
            console.log('changed to ', Service.name);

            return {
                swapiService: new Service()
            };
        });
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact />
                            <Route path="/people" component={ PeoplePage } />
                            <Route path="/planets" component={ PlanetsPage } />
                            <Route path="/starships" exact component={ StarshipsPage } />
                            {/* <Route path="/starships/:id" 
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={ id }/>;
                            }} /> */}

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};

export default App;