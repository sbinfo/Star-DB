import React, { Component } from "react";
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};



class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item),
                });
            });
    };

    componentDidUpdate(prevProps) {
        
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl ) {
            this.setState({ loading: true })
            this.updatePerson();
        }
        
    };


    render() {

        if (!this.state.item) {
            return null;
        }

        if (this.state.loading) {
            return <Spinner />
        }
        
        const { item } = this.state;
        const { name } = item;
        

        return (
            <div className="person-details card">
                <img className="person-image"
                    src={this.state.image} alt="character" />

                <div className="card-body">
                    <h4>{name} - id: {this.props.itemId}</h4>
                    <ul className="list-group list-group-flush">

                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }

                    </ul>
                </div>
            </div>
        );
    }
}


export default ItemDetails;