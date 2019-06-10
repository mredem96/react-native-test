import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import moment from "moment";
import Spinner from "react-native-loading-spinner-overlay";
import { getSingleEntry } from "../../actions/EntrySingleActions";
import { styles } from "../../styles";
import { ScrollView } from "react-native-gesture-handler";

class DetailsScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: "Details"
	};

	componentDidMount() {
		this.props.getSingleEntry(this.props.navigation.getParam("item"));
	}
	render() {
		const { data, loading } = this.props.entrySingle;

		return (
			<ScrollView style={styles.container}>
				{data ? (
					<View style={styles.DetailsContainer}>
						<View style={styles.DetailsHeaderContainer}>
							<Text style={styles.DetailsHeaderStyle}>{data.fields.title}</Text>
						</View>
						<View>
							<Text style={styles.DetailsDescStyle}>{data.fields.copy}</Text>
						</View>
						<View style={styles.DateContainer}>
							<Text style={styles.DateStyle}>{this._handleDate(data.sys.createdAt)}</Text>
						</View>
					</View>
				) : null}
				<Spinner visible={loading} textContent={"Loading..."} textStyle={styles.spinnerTextStyle} />
			</ScrollView>
		);
	}
	_handleDate = date => {
		return <Text>Created at:{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</Text>;
	};
}

const mapStateToProps = ({ entrySingle }) => ({ entrySingle });
export default connect(mapStateToProps, { getSingleEntry })(DetailsScreen);
