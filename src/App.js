import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './App.scss';

class App extends Component {

    constructor() {
        console.log('constructor');
        super ();

        this.state = {
            musicGenreResults: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        
        axios({
            url: "https://app.ticketmaster.com/discovery/v2/events.json",
            method: "GET",
            dataResponse: "json",
            params: {
                apikey: "MWm7x4F8toW2nr8tUwIiGndgapxXqsxE",
                format: 'json',
                city: 'toronto',
                classificationName: 'music',
            }
        }).then(response => {
            console.log(response.data);

        });
    }
    //prevent page from reloading function

    


    render () {
        console.log('render');
        return (
            <div className="App">
                <Header />
                <main>
                    <ul>

                    </ul>
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;

/* classification ID

dance/edm = KnvZfZ7vAvF
rock = KnvZfZ7vAeA
pop = KZazBEonSMnZfZ7v6F1
country = KnvZfZ7vAv6
k pop = KZazBEonSMnZfZ7vkE1
r&b = KnvZfZ7vAee

*/

