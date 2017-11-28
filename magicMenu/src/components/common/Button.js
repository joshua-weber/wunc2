import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		color: "white",
		fontSize: 18,
		fontWeight: "800",
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 8,
		paddingRight: 8,
		fontFamily: 'Avenir',
		textAlign: 'center'
	},
	buttonStyle: {
		backgroundColor: "rgba(255,255,255,.05)",
		borderWidth: 1.5,
		borderRadius: 40,
		borderColor: "rgba(255,255,255,1)",
		marginTop: 50,
		minWidth: 150,

	}
};

export {Button};
