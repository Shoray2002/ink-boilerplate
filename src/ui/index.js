import React from "react";
import PropTypes from "prop-types";
import { Color, Text } from "ink";
import { Greeter,Login  } from "./components";
const App = ({ name }) => (
	<>
		<Greeter name={name} />
		<Login/>
		{/* <Text>
			<Color green>Thanks for using Ink!!</Color>
		</Text> */}
	</>
);

App.propTypes = {
	name: PropTypes.string
};

// App.defaultProps = {
// 	name: "Stranger"
// };

export default App;
