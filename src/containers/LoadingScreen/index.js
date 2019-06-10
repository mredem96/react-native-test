import React from "react";
import { styles } from "../../styles";
import { ActivityIndicator, StatusBar, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
export default class LoadingScreen extends React.Component {
	constructor() {
		super();
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		// getting userToken if it is stored on the device
		// to get and set token securely we can use secure storage npm module implement keychain
		const userToken = await AsyncStorage.getItem("userToken");

		// This screen is first boot up when user launch the app
		// we can control user sessions etc.
		this.props.navigation.navigate(userToken ? "App" : "App");
	};

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}
