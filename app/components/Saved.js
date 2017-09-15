import React from "react";
import helpers from "../utils/helpers";

class Saved extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			savedVenues : "",
			placeName : "",
			hourResults: ""

		};

		this.viewHoursClick = this.viewHoursClick.bind(this);

	}

	// When this component mounts, get all saved venues from our db
	componentDidMount() {
		helpers.getSaved().then(function(venueData) {
		  this.setState({ savedVenues: venueData.data });
		  console.log("saved results", venueData.data);
		}.bind(this));
	}

	viewHoursClick(place){
		console.log("modal clicked" , place);

		helpers.getVenueHours(place.reference).then((data) => {
			console.log("data coming from modal click" , data)
			this.setState({
				hourResults: data,
				placeName: place.name
			});
		});

	}

	// A helper method for rendering the HTML when there are no saved venues
	renderEmpty() {
		return (
		  <li className="list-group-item">
		    <h3>
		      <span>
		        <em>No saved venues yet, save your first venue...</em>
		      </span>
		    </h3>
		  </li>
		);
	}

	// A helper method for rendering a container and all of the venues inside
	renderContainer() {
		return (
		  <div className="main-container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="panel panel-primary">
		          <div className="panel-heading">
		            <h1 className="panel-title">
		              <strong>
		                <i className="fa fa-download" aria-hidden="true"></i> Saved Venues</strong>
		            </h1>
		          </div>
		          <div className="panel-body">
		            <ul className="list-group">
		              {this.renderVenues()}
		            </ul>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		);
	}

	// A helper method for mapping through venues and outputting some HTML
	renderVenues() {
		return this.state.savedVenues.map(function(place, index) {

		  return (
		    <div key={index}>
		      <li className="list-group-item">
		        <h3>
		          <span>
		                <h2>{place.name}</h2>
		          </span>
		          <br />
	              <span>
	                <em>{place.address}       </em>
	              </span>
	              <span>
	              	<img src={place.icon} />
	              </span>
		          <span className="btn-group pull-right">
		            <a href={place.url} rel="noopener noreferrer" target="_blank">
		            </a>
		            <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
		          </span>

		          <span className="btn-group pull-right">
		              	
		              	<div id="myModal1" className="modal fade" role="dialog">
						  <div className="modal-dialog">

						    <div className="modal-content">
						      <div className="modal-header">
						        <button type="button" className="close" data-dismiss="modal">&times;</button>
						        <h2 className="modal-title text-center">Venue Was Saved!</h2>
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
						        		<p>{this.state.hourResults[0]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.hourResults[1]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.hourResults[2]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.hourResults[3]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.hourResults[4]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.hourResults[5]}</p>
						        	</li>
						        	<li className="list-group-item">
						        		<p>{this.state.hourResults[6]}</p>
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
		        </h3>
		        
		      </li>
		    </div>
		  );
		}.bind(this));
	}

	render() {
    // If there are no venues saved, return this.renderEmpty() which in turn returns some HTML
    if (!this.state.savedVenues) {
      return this.renderEmpty();
    }
    // If there are venues saved, return this.renderContainer() which in turn returns all saves Venues
    return this.renderContainer();
  }
}

export default Saved;