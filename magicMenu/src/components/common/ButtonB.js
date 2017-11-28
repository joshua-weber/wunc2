import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonB = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: "center",
		color: "black",
		fontSize: 14,
		fontWeight: "900",
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Avenir'
	},
	buttonStyle: {
		borderRadius: 40,
		marginLeft: 5,
		marginRight: 5,
	}
};

export {ButtonB};