import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';

const withSwapiService = (Wrapped, mapMToP) => {
    
    return (props) => {
        return (<SwapiServiceConsumer>
            {
                (swapiService) => {
                    const serviceProps = mapMToP(swapiService);
                    return (
                        <ErrorBoundry>
                        <Wrapped { ...props } { ...serviceProps } />
                        </ErrorBoundry>
                    );
                }
            }
        </SwapiServiceConsumer>);
    }
}

export default withSwapiService;
