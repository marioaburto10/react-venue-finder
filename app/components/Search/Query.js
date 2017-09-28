import React from "react";

class Query extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: "",
			zipCode: "",
			radius: "5"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log("Change in Text");
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("Submit button clicked");
		this.props.setTerms(this.state.keyword, this.state.zipCode, this.state.radius);

	}

	render() {
		return (
			<div className="main-container">
				<div className="row">
	          		<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>
					                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Query
					                 </strong>
								</h1>
							</div>
						
							<div className="panel-body">
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<h4 className=""><strong>Keyword</strong></h4>
										<input
							                type="text"
							                className="form-control"
							                id="keyword"
							                value={this.state.term}
							                onChange={this.handleChange}
							                required
						              	/>

						              	<h4><strong>Zip Code</strong></h4>
					                    <input
					                      type="number"
					                      value={this.state.start}
					                      className="form-control"
					                      id="zipCode"
					                      onChange={this.handleChange}
					                      required
					                    />

					                    <h4><strong>Radius (miles)</strong></h4>
										  <select className="form-control" id="radius" value={this.state.radius} onChange={this.handleChange}>
										    <option>5</option>
										    <option>10</option>
										    <option>20</option>
										    <option>30</option>
										  </select>

				                  	</div>

				                  	<div className="pull-right">
					                    <button
					                      type="submit"
					                      className="btn btn-danger">
					                      <h4>Submit</h4>
					                    </button>
					                </div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Query;