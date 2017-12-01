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
		color: "black",
		fontSize: 18,
		fontWeight: "800",
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		fontFamily: 'Avenir',
		textAlign: 'center'
	},
	buttonStyle: {
		backgroundColor: "rgba(255,255,255,.2)",
		borderWidth: 2,
		borderRadius: 45,
		borderColor: "rgba(255,255,255,1)",
		marginTop: 50,
		width: 150,
	}
};

export {Button};
