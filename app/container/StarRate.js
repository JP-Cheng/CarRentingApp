// @flow
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text
} from 'react-native';
import { Icon, Rating } from 'react-native-elements'

// type Props = {
// 	ratingObj: {
// 		ratings: number;
// 		views: number;
// 	}
// };

export default class StarRating extends Component<Props> {
	render() {

		return (
			<View style={styles.container}>
				{/* {stars} */}
				{/* <Text style={styles.text}>({ratingObj.views})</Text> */}
				<Rating
					imageSize={16}
					readonly
					startingValue={this.props.rating}
					ratingColor={"#0671c6"}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 25,
		height: 25
	},
	text: {
		fontSize: 20,
		marginLeft: 10,
		marginRight: 10
	}
});