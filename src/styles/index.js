import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	ListContainerStyle: {
		display: "flex",
		flexDirection: "column",
		marginHorizontal: 15,
		marginVertical: 25
	},
	ListItemContainer: {
		display: "flex",
		flexDirection: "column",
		marginHorizontal: 10,
		padding: 15,
		borderWidth: 1,
		borderColor: "#999",
		borderStyle: "solid",
		borderRadius: 8
	},
	ItemTitle: {
		fontSize: 18,
		lineHeight: 27,
		color: "#000"
	},
	ItemDescription: {
		fontSize: 14,
		lineHeight: 21
	},
	DateContainer: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: 20,
		marginBottom: 20
	},
	DateStyle: {
		fontSize: 12,
		textAlign: "right",
		marginHorizontal: 20
	},
	DetailsContainer: {
		display: "flex",
		flexDirection: "column",
		marginHorizontal: 25,
		marginVertical: 35
	},
	DetailsHeaderContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 40
	},
	DetailsHeaderStyle: {
		fontSize: 24,
		color: "#111",
		lineHeight: 32
	},
	DetailsDescStyle: {
		fontSize: 18,
		color: "#887",
		lineHeight: 24,
		marginBottom: 50
	}
});
