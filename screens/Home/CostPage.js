import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import RelatedMedPage from './Cost/RelatedMedPage';
const CostPage = ({ navigation }) => {
	return (
		// <Button
		// 	title='GO'
		// 	onPress={() => navigation.navigate('RelatedMedPage')}
		// 	color='#2A6049'
		// 	style={styles.goBtn}
		// />
		<View style={{ flex: 1, padding: 15, backgroundColor: 'white' }}>
			{/* <View style={{ flex: 1, position: 'relative', marginBottom: 20 }}>
				<View style={{ flex: 1 }}>
					<Image source={require('../../assets/pills.jpg')} style={styles.img} />
				</View>
				<TouchableOpacity
					activeOpacity={0.5}
					style={styles.photoTextCtn}
					onPress={() => navigation.navigate('RelatedMedPage')}
				>
					<Text style={styles.photoText}>Alternative Medicines</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<Image source={require('../../assets/advice.jpg')} style={styles.img} />
				</View>
				<TouchableOpacity
					style={styles.photoTextCtn}
					activeOpacity={0.5}
					onPress={() => navigation.navigate('OtherAdvicesPage')}
				>
					<Text style={styles.photoText}>Other Advices</Text>
				</TouchableOpacity>
			</View> */}
			<RelatedMedPage />
		</View>
	);
};

export default CostPage;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000025',
	},
	text: {
		color: '#000',
		fontWeight: '700',
		fontSize: 30,
	},
	img: {
		flex: 1,
		width: undefined,
		height: undefined,
		borderRadius: 10,
	},
	photoTextCtn: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(220,220,220, 0.5)',
		borderRadius: 10,
		margin: 10,
	},
	photoText: {
		fontSize: 28,
		padding: 10,
		width: 180,
		color: 'black',
		margin: 10,
		textAlign: 'left',
		borderRadius: 10,
		fontWeight: '600',
	},
});
