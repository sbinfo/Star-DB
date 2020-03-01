import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
            loadingPerson: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople} >

                {(i) => (
                    `${i.name},( ${i.birthYear} )`
                )}

            </ItemList>
        );

        // const personDetails = (
        //     <ItemDetails id={this.state.selectedPerson} />
        // );

        return (
            <ErrorBoundry>
                <Row left={itemList} right="test" />
            </ErrorBoundry>
        )
    }
}

export default PeoplePage;