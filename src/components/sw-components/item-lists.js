import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';


// Функция которая на любой указанный компонент (Wrapper),
// устанавливает указанную child-функцию (fn)
const withChildFunction = (fn) => (Wrapped) => {
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

function mapPersonToProps(swapiService) {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(mapPersonToProps)(
                     withData(
                         withChildFunction( renderName )( ItemList )));

function mapPlanetToProps(swapiService) {
    return {
        getData: swapiService.getAllPlanets
    }
}

const PlanetList = withSwapiService(mapPlanetToProps)(
                withData(withChildFunction(renderName)(ItemList)));

function mapStarshipToProps(swapiService) {
    return {
        getData: swapiService.getAllStarships
    }
}

const StarshipList = withSwapiService(mapStarshipToProps)(
    withData(withChildFunction(renderStarshipDetails)(ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
}