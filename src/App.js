import React, {Component} from 'react';
import { scroller } from 'react-scroll';
import Preloader from './Components/Preloader';
import Results from './Components/Results';
import Footer from './Components/Footer';	
import axios from 'axios';
import './App.scss';

class App extends Component {

constructor() {
	super ();

	this.state = {
		genreSelection: "",
		selectedGenreTitle: "",
		userSelectedEvent: false,
		isLoading: false,
	}
}

//THIS SELECT BUTTON IS USED FOR changing the genre, making sure we get a value from switching genre!
handleSelectGenreChange = (event) => {
	this.setState ({
		genreSelection: event.target.value,
		selectedGenreTitle: event.target.selectedOptions[0].text, //the state needs to be updated to the new genre selection state
	})
}


//prevent form default and this is targeted towards the BUTTON for submitting genre selection
handleFormSubmit = (event) => {
	event.preventDefault();
	
	this.setState ({
		isLoading: true,
	})

	axios({ // axios call happens on button submit, set specific parameters to narrow down the api call
		url: "https://app.ticketmaster.com/discovery/v2/events.json",
		method: "GET",
		dataResponse: "json",
		params: {
			apikey: "MWm7x4F8toW2nr8tUwIiGndgapxXqsxE",
			format: 'json',
			city: 'toronto',
			sort: 'date,asc', 
			classificationName: 'music',
			genreId: this.state.genreSelection, //refers to the option id of each genre
		}
	}).then((response) => {
		response = response.data._embedded.events; //

		this.setState({
			event: response,
			userSelectedEvent:true,
			isLoading: false,
		})

		scroller.scrollTo('main', { //this will auto scroll to the main after submitting a genre
			smooth: true,
			duration: 500,
		});
	});
}

// button to scroll back to top when being clicked, because its outside of state. don't need to put this.state

scrollToTop = () => {
	scroller.scrollTo('header', {
		smooth: true,
		duration: 700,
	});
}

	render () {
		return (
			<div className="App">
				<div className="hero" id="header">
					<div className="title">
						<img
						src={require("./assets/blackWhite-logo.png")}
						className="logo"
						alt="Music T.O. Event Logo"
						/>
					</div>

					<form action="" className="form">
						<label htmlFor="whichGenre"></label>
						<select
						name="whichGenre"
						id="whichGenre"
						className="selectBtn"
						onChange={this.handleSelectGenreChange}
						>
						<option value="">Choose a Genre</option>
						<option value="KnvZfZ7vAeA">Rock</option>
						<option value="KnvZfZ7vAvF">EDM</option>
						<option value="KnvZfZ7vAee">R&B</option>
						<option value="KnvZfZ7vAv1">Rap</option>
						<option value="KnvZfZ7vAvE">Jazz</option>
						</select>
						<button
						className="startBtn"
						type="submit"
						onClick={this.handleFormSubmit}
						>
						T.O. the Event
						</button>
					</form>
					{this.state.isLoading ? <Preloader /> : null}
					</div>
				{this.state.event === undefined ? null : (
				<Results
					event={this.state.event}
					genreTitle={this.state.selectedGenreTitle}
					userSelectedEvent={this.state.userSelectedEvent}
					scrollToTop={this.scrollToTop}
				/>
				)}
				<Footer />
			</div>
    	);
	}
}

export default App;

