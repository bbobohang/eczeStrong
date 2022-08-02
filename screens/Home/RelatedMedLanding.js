import React, { Component } from 'react';
import {
	Switch,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';

export default class RelatedMedLanding extends Component {
	renderHeader = (section, _, isActive) => {
		return (
			<Animatable.View
				duration={400}
				style={[styles.header, isActive ? styles.active : styles.inactive]}
				transition='backgroundColor'
			>
				<Text style={styles.headerText}>{section.title}</Text>
			</Animatable.View>
		);
	};

	render() {
		const navigation = this.props.navigation;

		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={{ paddingTop: 30 }}>
					<Text style={styles.title}>Good Deals</Text>
					<Text style={styles.content}>
						There is a wide range of creams and lotions for treating atopic dermatitis
						symptoms on the market. Therefore, choosing the right product to help
						becomes really confusing. {'\n'}
						{'\n'}On a simple note, you have to find the one that works best in
						treating YOUR eczema. {'\n'}
						{'\n'}Here are some recommended below 25$ over-the-counter products with
						special offers! What are you waiting for?
					</Text>

					<View
						style={{
							alignItems: 'center',
							height: 100,
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							style={styles.btn}
							onPress={() => navigation.navigate('RelatedMedPage')}
						>
							<View>
								<Text style={styles.btnText}>Click here to check out the deals!</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: Constants.statusBarHeight,
	},
	title: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '300',
		marginBottom: 20,
	},
	header: {
		backgroundColor: '#edfaf1',
		padding: 10,
	},
	headerText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
	},
	content: {
		padding: 20,
		backgroundColor: '#fff',
		textAlign: 'justify',
	},
	active: {
		backgroundColor: 'white',
	},
	inactive: {
		backgroundColor: '#edfaf1',
	},
	selectors: {
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	selector: {
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	activeSelector: {
		fontWeight: 'bold',
	},
	selectTitle: {
		fontSize: 14,
		fontWeight: '500',
		padding: 10,
	},
	multipleToggle: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 30,
		alignItems: 'center',
	},
	multipleToggle__title: {
		fontSize: 16,
		marginRight: 8,
	},
	btn: {
		justifyContent: 'center',
		alignItem: 'center',
		width: '70%',
		height: '70%',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 10,
		backgroundColor: '#2A6049',
	},
	btnText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
		color: 'white',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
