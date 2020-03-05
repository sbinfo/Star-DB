export default class TestService {

    _people = [
        {
            id: 1,
            name: 'Alex Sandro [TEST DATA]',
            gender: 'male',
            birthYear: 1991
        },
        {
            id: 2,
            name: 'Paolo Dybala [TEST DATA]',
            gender: 'male',
            birthYear: 1994
        },
    ];

    _planets = [
        {
            id: 1,
            name: 'Earth [TEST DATA]',
            population: '7.530.000.000',
            rotationPeriod: '23 hours 56 seconds',
            diameter:  '12.742 km'
        },
        {
            id: 2,
            name: 'Venus [TEST DATA]',
            population: 'not known',
            rotationPeriod: '243 days',
            diameter: '12.104 km'
        }
    ];

    _starships = [
        {
            id: 1,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            passengers: 50
        }
    ];

    getAllPeople = async () => {
        return this._people;
    }

    getPerson = async () => {
        return this._people[0];
    }

    getAllPlanets = async () => {
        return this._planets;
    }

    getPlanet = async () => {
        return this._planets[0];
    }

    getAllStarships = async () => {
        return this._starships;
    }

    getStarship = async () => {
        return this._starships[0];
    }

    getPersonImage = () => {
        return `https://placeimg.com/400/500/people`
      };
    
      getStarshipImage = () => {
        return `https://placeimg.com/600/400/tech`;
      };
    
      getPlanetImage = () => {
        return `https://placeimg.com/400/400/nature`
      };
}