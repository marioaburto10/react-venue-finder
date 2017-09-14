import React from "react";
import Query from "./Search/Query"
import Results from "./Search/Results"

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state ={
			results: ""
		}
	}

	setTerms(keyword, zipCode, radius){
		console.log("received in Search ", keyword, zipCode, radius);
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