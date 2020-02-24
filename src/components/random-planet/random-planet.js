import React, { Component } from "react";
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


export default class RandomPlanet extends Component {
    swapi_service = new SwapiService();

    constructor() {
        super()

        this.state = {
            planet: {},
            loading: true,
            error: false,
        }

        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet() {
        const id = 1222 //Math.floor(Math.random() * 20) + 2;

        this.swapi_service
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }


    render() {

        const { planet, loading, error } = this.state

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const loadingBlock = loading ? <Spinner /> : null
        const planetBlock = hasData ? <PlanetView planet={ planet } /> : null

        return (
            <div className="random-planet jumbotron rounded">
               { loadingBlock }
               { planetBlock }
               { errorMessage }
            </div>

        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}