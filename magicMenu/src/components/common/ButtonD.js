import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonD = ({ onPress, children }) => {
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
		paddingTop: 12,
		paddingBottom: 10,
		fontFamily: 'Avenir',
		paddingLeft: 10,
		paddingRight: 10,
	},
	buttonStyle: {
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 1,
		borderRadius: 40,
		borderColor: "rgba(0,0,0,1)",
		minHeight: 45,
		minWidth: 45,
		marginLeft: 10,
	}
};

export {ButtonD};