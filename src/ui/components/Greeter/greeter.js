import React from 'react';
import PropTypes from 'prop-types';
import {Text, Color} from 'ink';
import Gradient from 'ink-gradient';

export default function Greeter({name}) {
	return (
		<Gradient name="cristal">
		<Text>
			Hello,{name}!
			Log-in
		</Text>
		</Gradient>
	);
}

Greeter.propTypes = {
	name: PropTypes.string
};

Greeter.defaultProps = {
	name: 'World'
};

