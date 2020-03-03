import React, {Component} from 'react';


class Results extends Component {
constructor() {
    super();

}

render() {
	return (
		<main id="main">
		<div className="genreBackground">
			<h1 className="genreTitle">{this.props.genreTitle === "" ? "Random Genre" : `🎵 T.O. ${this.props.genreTitle} Results🎵`}</h1>
		</div>
				<ul className="flexContainer wrapper">
					{
						this.props.userSelectedEvent ? this.props.event.map(event => {
						return (
							<li key={event.id}className="resultContainer">
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
								<a className="ticketLink" target="_blank" href={event.url}>Buy Tickets</a>
								{/* <a href="">{event._embedded.attractions[0].name}</a>  look at this for help cue*/}
							</li>
						);	
						}) : console.log('nothing')  
					}
				</ul>
				<button className="scrollToTopBtn" onClick={this.props.scrollToTop}>
					<i className="far fa-arrow-alt-circle-up"></i>
					<p>scroll to top</p>
				</button>
			</main>
		);
	}
}

export default Results;
