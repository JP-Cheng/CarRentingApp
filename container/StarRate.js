// @flow
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text
} from 'react-native';
import { Icon } from 'react-native-elements'

type Props = {
	ratingObj: {
		ratings: number;
		views: number;
	}
};

export default class StarRating extends Component<Props> {
	render() {
		// Recieve the ratings object from the props
		let ratingObj = this.props.ratingObj;

		// This array will contain our star tags. We will include this
		// array between the view tag.
		let stars = [];
		// Loop 5 times
		for (var i = 1; i <= 5; i++) {
			// set the path to filled stars
			let path = "star_half";
			// If ratings is lower, set the path to unfilled stars
			if (i > ratingObj.ratings) {
				path = "star";
			}
			stars.push(<Icon name={"star"} type={"material"} size={16} color={"#0671c6"} />);
			// stars.push((<Image style={styles.image} source={path} />));
		}

		return (
			<View style={styles.container}>
				{stars}
				<Text style={styles.text}>({ratingObj.views})</Text>

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