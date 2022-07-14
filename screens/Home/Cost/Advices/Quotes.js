import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { QUOTES } from '../../../../data/quotes/quotes';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';

const Quotes = ({ route }) => {
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
	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 3,
					justifyContent: 'flex-start',
					padding: 15,
				}}
			>
				<Image
					source={QUOTES[slide].imgSrc}
					style={styles.image}
					resizeMode='contain'
				/>
			</View>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={styles.button}>
					<EvilIcons
						name='arrow-left'
						size={80}
						onPress={() => handlePress('dec')}
						color='black'
					/>
				</View>
				<View style={styles.button}>
					<EvilIcons name='share-apple' size={80} color='black' />
				</View>
				<View style={styles.button}>
					<EvilIcons
						name='arrow-right'
						size={80}
						onPress={() => handlePress('inc')}
						color='black'
					/>
				</View>
			</View>
		</View>
	);
};

export default Quotes;

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
