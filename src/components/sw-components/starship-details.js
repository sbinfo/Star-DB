import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';


const StarshipDetails = ( props ) => {
    return (
        <ItemDetails { ...props } >

            <Record field="model" label="Model" />
            <Record field="passengers" label="Passengers" />
            <Record field="length" label="Length" />

        </ItemDetails>
    );
}

function mapMethodsToProps(swapiService) {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);