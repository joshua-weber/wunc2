import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonE = ({ onPress, children }) => {
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
		color: "white",
		fontSize: 14,
		fontWeight: "900",
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Avenir',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	buttonStyle: {
		// flex: 1,
		// alignSelf: "stretch",
		backgroundColor: "#179fd2",
		borderWidth: 2,
		borderRadius: 40,
		borderColor: "#179fd2",
		minHeight: 45,
		minWidth: 45,
		marginLeft: 10,
		// marginRight: 5,
		// padding: 10
		// width: 50
	}
};

export {ButtonE};
