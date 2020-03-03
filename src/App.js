import React, {Component} from 'react';
// import Header from './Header';
import { scroller } from 'react-scroll';
import Preloader from './Components/Preloader';
import Results from './Components/Results';
import Footer from './Components/Footer';	
import axios from 'axios';
import './App.scss';

class App extends Component {

constructor() {
console.log('constructor');
	super ();

	this.state = {
		filteredGenreResult: [],
		musicGenreResults: [],
		genreSelection: "",
		selectedGenreTitle: "",
		userSelectedEvent: false,
		isLoading: false,
	}
}

componentDidMount() {

}


//THIS SELECT BUTTON IS USED FOR changing the genre, making sure we get a value from switching genre!
handleSelectGenreChange = (event) => {
	console.log(event.target.selectedOptions[0].text);
	
	this.setState ({
		genreSelection: event.target.value,
		selectedGenreTitle: event.target.selectedOptions[0].text, //the state needs to be updated to the new genre selection state
	})
}

//prevent form default and this is targeted towards the BUTTON for submitting genre

handleFormSubmit = (event) => {
	event.preventDefault();
	console.log('being clicked');
	
	console.log('componentDidMount');
	//create a function that if a user doesn't select anything, prompt a warning

	// if (this.handleFormSubmit.value === ""){
	// 	alert('please pick something');
	// }

	this.setState ({
		isLoading: true,
	})

	axios({
		url: "https://app.ticketmaster.com/discovery/v2/events.json",
		method: "GET",
		dataResponse: "json",
		params: {
			apikey: "MWm7x4F8toW2nr8tUwIiGndgapxXqsxE",
			format: 'json',
			city: 'toronto',
			sort: 'date,asc', 
			classificationName: 'music',
			genreId: this.state.genreSelection,
		}
		}).then((response) => {
			response = response.data._embedded.events; //narrows down api call and saves as a variable
			console.log(response);

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
	console.log('being clicked');
	scroller.scrollTo('header', {
		smooth: true,
		duration: 700,
	});
}

render () {

console.log('render');
console.log(this.state.event);
	return (
		<div className="App">
		{/* <Header /> */}
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
			{this.state.isLoading ? <Preloader />: null}
			</div>
			{
				this.state.event === undefined ? null : 
				<Results
					event={this.state.event}
					genreTitle={this.state.selectedGenreTitle}
					userSelectedEvent={this.state.userSelectedEvent}
					scrollToTop={this.scrollToTop}
					/> 	
			}
			<Footer />
		</div>
	);
}
}

export default App;

/* 

PSEUDO CODE

0. Mount the component 
1. User selects a genre
2. when genre is selected, axios call is made
3. through api call, filter out results to the specific and put in states
4. create

*/

