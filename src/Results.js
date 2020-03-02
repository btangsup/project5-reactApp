import React, {Component} from 'react';

class Results extends Component {
constructor() {
    super();


	// 	scrollToTop = (event) => {
	// 	event.preventDefault();
	// 	scroller.scrollTo('header', { //this will auto scroll to the main after submitting a genre
	// 		smooth: true,
	// 		duration: 1000,
	// 	});
	// }
}

render() {
	return (
		<main id="main">
		<div className="genreBackground">
			<h1 className="genreTitle">Genre</h1>
		</div>
				<ul className="flexContainer wrapper">
					{
						this.props.userSelectedEvent ? this.props.event.map(event => {
						return (
							<li className="resultContainer">
								<h2 className="eventTitle">{event.name}</h2>
								<h3 className="eventVenue">{event._embedded.venues[0].name}</h3>
								<h3 className="eventDate">{event.dates.start.localDate}</h3>
								<h3 className="eventTime">{event.dates.start.localTime}</h3>
								<div className="imgContainer">
									<img
									className="eventImg"
									src={event.images[4].url}
									alt={event.name}
									/>
								</div>
								<a className="ticketLink" href={event.url}>Buy Tickets</a>
							</li>
						);	
						}) : console.log('nothing')  
					}


					
					{
					
					/* TEST FILE
					<li className="resultContainer">
					<h2 className="eventTitle">All American Rejects</h2>
					<h3 className="eventDate">2020 - 01 - 03</h3>
					<h3 className="eventVenue">Scotia Bank Center</h3>
					<img
						src={require("./assets/test.jpg")}
						className="eventImg"
						alt=""
					/>

					<a href="www.tickermaster.ca" className="ticketLink">
						Buy Tickets
					</a>
					</li> */}

				</ul>
				<button className="scrollToTopBtn" onClick={this.scrollToTop}>
					<i className="far fa-arrow-alt-circle-up"></i>
				</button>
				<p>scroll to top</p>
			</main>
		);
	}
}

export default Results;
