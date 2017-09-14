import React from "react";

class Query extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: "",
			zipCode: "",
			radius: ""
		};
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
								<form>
									<div className="form-group">
										<h4 className=""><strong>Keyword</strong></h4>
										<input
							                type="text"
							                className="form-control text-center"
							                id="keyword"
							                value={this.state.term}
							                required
						              	/>

						              	<h4><strong>ZipCode</strong></h4>
					                    <input
					                      type="number"
					                      value={this.state.start}
					                      className="form-control"
					                      id="start"
					                      onChange={this.handleChange}
					                      required
					                    />

					                    <h4><strong>Radius</strong></h4>
										<input
					                      type="number"
					                      value={this.state.end}
					                      className="form-control"
					                      id="end"
					                      onChange={this.handleChange}
					                      required
					                    />

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