import React from "react";

import {Link} from "react-router";

class Main extends React.Component {

	render() {
		return (
			<div>
          		{this.props.children}
          	</div>
		)

	}
}

export default Main;