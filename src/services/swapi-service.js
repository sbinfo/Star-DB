
export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship)
    }

    getStarship = async (id) => {
        const ship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(ship);
    }

    getPersonImage = (item) => {
        return `${this._imageBase}/characters/${ item.id }.jpg`;
    }

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${ id }.jpg`;
    }
    
    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${ id }.jpg`;
    }

    _extractId = (item) => {
        const idRegEx = /\/([0-9]+)*\/$/;
        console.log(item.url.match(idRegEx))
        return item.url.match(idRegEx)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (ship) => {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.costInCredits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            height: person.height,
            mass: person.mass,
            eyeColor: person.eye_color,
            hairColor: person.hair_color,

        }
    }

}
