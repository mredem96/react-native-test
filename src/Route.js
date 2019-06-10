import React from "react";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./containers/HomeContainer";
import DetailsScreen from "./containers/DetailsContainer";
import AppLoadingScreen from "./containers/LoadingScreen";
const AppStack = createStackNavigator({ Home: HomeScreen, Details: DetailsScreen });

export default createAppContainer(
	createSwitchNavigator(
		{
			AppLoading: AppLoadingScreen,
			App: AppStack
		},
		{
			initialRouteName: "AppLoading"
		}
	)
);
