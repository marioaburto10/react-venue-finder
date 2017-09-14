import React from "react";
import Query from "./Search/Query";
import Results from "./Search/Results";
import helpers from "../utils/helpers";

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state ={
			results: ""
		}
	}

	setTerms(keyword, zipCode, radius){
		console.log("received in Search ", keyword, zipCode, radius);
		helpers.getLongAndLat(zipCode).then((data) => {
			console.log("data coming from setTerms getLongAndLat" , data);

			const lat = data.lat;
			const lng = data.lng;
			console.log(lat, lng);

			helpers.findVenues(keyword, lat, lng, radius).then((data) => {
				console.log("data coming from setTerms findVenues" , data)
			})
		});
	}

	render() {
		return (
			<div className="main-container">

		        <Query setTerms={this.setTerms} />

		        <Results />
	      	</div>
		)
	}
}

export default Search;