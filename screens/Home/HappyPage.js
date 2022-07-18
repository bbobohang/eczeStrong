import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { QUOTES } from '../../data/quotes/quotes';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';
import OtherAdvicesPage from './Cost/OtherAdvicesPage';

const HappyPage = ({ route, navigation }) => {
	const [slide, setSlide] = useState(0);
	const handlePress = (operation) => {
		if (operation === 'inc' && slide < QUOTES.length - 1) {
			setSlide(slide + 1);
		} else if (operation === 'inc' && slide === QUOTES.length - 1) {
			setSlide(0);
		}

		if (operation === 'dec' && slide > 0) {
			setSlide(slide - 1);
		} else if (operation === 'dec' && slide === 0) {
			setSlide(QUOTES.length - 1);
		}
	};
	return <OtherAdvicesPage navigation={navigation} />;
};

export default HappyPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// backgroundColor: '#d4dfdb',
		backgroundColor: '#2A6049',
	},
	image: {
		width: undefined,
		height: undefined,
		aspectRatio: 1,
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
