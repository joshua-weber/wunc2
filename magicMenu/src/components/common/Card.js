import React from "react";
import { View } from "react-native";

const Card = props => {
	return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
	containerStyle: {
		borderColor: "#ddd",
		borderBottomWidth: 1,
		elevation: 1,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		paddingBottom: 5
	}
};

export {Card};
