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


	render() {
		return (
			<div className="main-container">

		        <Query />

		        <Results />
	      	</div>
		)
	}
}

export default Search;