import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LivingPage = ({ route }) => {
	return (
		<Button
			title='GO'
			onPress={() => navigation.navigate('RelatedMedPage')}
			color='#2A6049'
			style={styles.goBtn}
		/>
	);
};

export default LivingPage;

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
});
