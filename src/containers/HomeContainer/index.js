import React from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import moment from "moment";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { List, ListItem, SearchBar } from "react-native-elements";
import { getAllEntries } from "../../actions/EntriesAllActions";
import { styles } from "../../styles";

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: "React Native test app!"
	};

	componentDidMount() {
		this.props.getAllEntries();
	}

	_keyExtractor = (item, index) => item.sys.id;

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 20,
					width: "100%"
				}}
			/>
		);
	};

	render() {
		const { data, loading } = this.props.entriesAll;
		return (
			<View style={styles.ListContainerStyle}>
				<FlatList
					data={data}
					keyExtractor={this._keyExtractor}
					renderItem={({ item }) => (
						<View style={styles.ListItemContainer}>
							<View>
								<Text style={styles.ItemTitle}>{item.fields.title}</Text>
							</View>
							<View>
								<Text style={styles.ItemDescription}>{item.fields.copy}</Text>
							</View>
							<View style={styles.DateContainer}>
								<Text style={styles.DateStyle}>{this._handleDate(item.sys.createdAt)}</Text>
							</View>
							<Button title="Details" onPress={() => this._showMoreDetails(item)}>
								{" "}
							</Button>
						</View>
					)}
					ItemSeparatorComponent={this.renderSeparator}
				/>
				<Spinner visible={loading} textContent={"Loading..."} textStyle={styles.spinnerTextStyle} />
			</View>
		);
	}

	_handleDate = date => {
		return <Text>Created at:{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</Text>;
	};

	_showMoreDetails = item => {
		this.props.navigation.navigate("Details", {
			item
		});
	};
}
const mapStateToProps = ({ entriesAll }) => ({ entriesAll });
export default connect(mapStateToProps, { getAllEntries })(HomeScreen);
