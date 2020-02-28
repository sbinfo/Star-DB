import React, {Component} from "react";
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorGenerator from "../error-generator/error-generator";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.id !== prevProps.id) {
            this.setState({ loading: true })
            this.updatePerson(); 
        }
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId) {
            return;
        }
    
        getData(itemId)
            .then((item) => {
                this.setState({ item, 
                    loading: false,
                    image: getImageUrl(item),
                })
            })
    }

    render() {

        if(!this.state.item) {
            return null;
        }

        if(this.state.loading) {
            return <Spinner />
        }

        const { id, name, gender, birthYear, eyeColor, hairColor, mass, height } = this.state.item;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={this.state.image} alt="character" />

                <div className="card-body">
                    <h4>{ name } - id: { this.props.personId }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span>{ gender }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year: </span>
                            <span>{ birthYear }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Height: </span>
                            <span>{ height }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Mass: </span>
                            <span>{ mass }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Hair color: </span>
                            <span>{ hairColor }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color: </span>
                            <span>{ eyeColor }</span>
                        </li>
                    </ul>
                </div>

                <ErrorGenerator />
            </div>
        )
    }
}