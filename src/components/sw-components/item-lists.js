import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';


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

function mapPersonToProps(swapiService) {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(
    withData(withChildFunction( ItemList, renderName)),
    mapPersonToProps
);

function mapPlanetToProps(swapiService) {
    return {
        getData: swapiService.getAllPlanets
    }
}

const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList,renderName)),
    mapPlanetToProps
)

function mapStarshipToProps(swapiService) {
    return {
        getData: swapiService.getAllStarships
    }
}

const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderStarshipDetails )),
    mapStarshipToProps
)

export {
    PersonList,
    PlanetList,
    StarshipList
}