import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

// Функция которая на любой указанный компонент (Wrapper),
// устанавливает указанную child-функцию (fn)
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} >
                { fn }
            </Wrapped>
        )
    }
}

const renderName = ({ name }) =>  <span>{ name }</span>;
const renderStarshipDetails = ({ name, model }) => <span>{ name } - { model }</span>;

const PersonList = withData(withChildFunction( ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList,renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderStarshipDetails ), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}