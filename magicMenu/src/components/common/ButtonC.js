import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonC = ({ onPress, children }) => {
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
		fontColor: "black",
		fontSize: 14,
		fontWeight: "500",
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Avenir'
	},
	buttonStyle: {
		// flex: 1,
		alignSelf: "stretch",
		// backgroundColor: "red",
		// borderWidth: 1,
		borderRadius: 40,
		// borderColor: "rgba(0,0,0,.3)",
		marginLeft: 5,
		marginRight: 5,
		// padding: 10
		// width: 50
	}
};

export {ButtonC};
