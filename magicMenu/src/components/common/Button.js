import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		// flex: 1,
		// alignSelf: "center",
		// justifyContent: 'flex-end',
		// alignContent: 'center',
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
		// flex: 1,
		// alignSelf: "stretch",
		backgroundColor: "rgba(255,255,255,.2)",
		borderWidth: 2,
		borderRadius: 45,
		borderColor: "rgba(255,255,255,1)",
		marginTop: 50,
		// marginRight: 5,
		// height: 45,
		// minWidth: 45,
		width: 150,
		// justifyContent: 'center',
		// alignContent: 'center',
		// textAlign: 'center'
	}
};

export {Button};
