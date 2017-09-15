import React from "react";
import helpers from "../../utils/helpers";

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state ={
			results: "",
			placeName: ""
		};

		this.viewHoursClick = this.viewHoursClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(place){
		console.log("Save button clicked");

		this.setState({ placeName: place.name});

		helpers.postSaved(place.name, place.icon, place.vicinity, place.reference).then((data) => {
			console.log("place has been saved, this is the ID" , data);
		});
	}

	viewHoursClick(place){
		console.log("modal clicked" , place);

		helpers.getVenueHours(place.reference).then((data) => {
			console.log("data coming from modal click" , data)
			this.setState({
				results: data,
				placeName: place.name
			});
		});

	}

	// A helper method for mapping through articles and outputting some HTML
	renderArticles() {
	    return this.props.results.map(function(place, index) {

	      // Each article thus reperesents a list group item with a known index
	      return (
	        <div key={index}>
		        <li className="list-group-item">
		            <h3>
		              <span>
		                <h2>{place.name}</h2>
		              </span>
		              <br />
		              <span>
		                <em>{place.vicinity}</em>
		              </span>
		              <span className="btn-group pull-right">
		                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal1" onClick={() => this.handleClick(place)}>Save</button>
		              	
		              	<div id="myModal1" className="modal fade" role="dialog">
						  <div className="modal-dialog">

						    <div className="modal-content">
						      <div className="modal-header">
						        <button type="button" className="close" data-dismiss="modal">&times;</button>
						        <h2 className="modal-title text-center">{this.state.placeName} Was Saved!</h2>
						      </div>
						      <div className="modal-body">
						        <p>Please scroll up and click the Saved link to view your saved venues.</p>
						      </div>
						      <div className="modal-footer">
						        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						      </div>
						    </div>

						  </div>
						</div>

		              </span>
		              <span className="btn-group pull-right">
		                <button data-toggle="modal" data-target="#myModal" className="btn btn-success" onClick={() => this.viewHoursClick(place)} >View Hours</button>
		              
						<div id="myModal" className="modal fade" role="dialog">
						  <div className="modal-dialog">

						    
						    <div className="modal-content">
						      <div className="modal-header">
						        <button type="button" className="close" data-dismiss="modal">&times;</button>
						        <h3 className="modal-title text-center">{this.state.placeName} Hours</h3>
						      </div>
						      <div className="modal-body">
						        <ul>
						        	<li className="list-group-item">
						        		<p>{this.state.results[0]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.results[1]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.results[2]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.results[3]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.results[4]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.results[5]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.results[6]}</p>
						        	</li>
						        </ul>
						      </div>
						      <div className="modal-footer">
						        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						      </div>
						    </div>

						  </div>
						</div>
		              </span>
		              <span>
		              	<img src={place.icon} />
		              </span>
		            </h3>
		            

		        </li>

	        </div>
	      );

	    }.bind(this));

	 }

		// A helper method for rendering a container to hold all articles
	renderContainer() {
	    return (
	      <div className="main-container">
	        <div className="row">
	          <div className="col-lg-12">
	            <div className="panel panel-primary">
	              <div className="panel-heading">
	                <h1 className="panel-title">
	                  <strong>
	                    <i className="fa fa-list-alt"></i>
	                    Results
	                  </strong>
	                </h1>
	              </div>
	              <div className="panel-body">
	                <ul className="list-group">
	                  {this.renderArticles()}
	                </ul>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    );
	}

	render() {
    // If there no articles in results, render this JSX code
	    if (!this.props.results) {
	      return (
	        <li className="list-group-item">
	          <h3>
	            <span>
	              <em>Enter search terms to begin...</em>
	            </span>
	          </h3>
	        </li>
	      );
	    }
	    // If we have articles, return this.renderContainer() which in turn, returns all the articles
	    return this.renderContainer();
	}

}

export default Results;