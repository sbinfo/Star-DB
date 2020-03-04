import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';


const StarshipDetails = ({ itemId, swapiService }) => {
    const { getStarship, getStarshipImage } = swapiService;
    return (
        <ItemDetails itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="passengers" label="Passengers" />
            <Record field="length" label="Length" />

        </ItemDetails>
    );
}

export default withSwapiService(StarshipDetails);