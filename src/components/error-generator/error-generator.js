import React, { Component } from 'react';

export default class ErrorGenerator extends Component {
    
    state = {
        renderError: false
    }

    render() {

        console.log('render');
        if(this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button type="button" onClick={ () => this.setState({ renderError: true }) } >Throw Error</button>
        )
    }
}