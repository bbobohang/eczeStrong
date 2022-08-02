import React from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	StatusBar,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from 'react-native';
const Landing = ({ navigation, setLanding }) => {
	return (
		<View style={styles.container}>
			{/* <View style={styles.imgContainer}>
			
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.textBody}>Say hi to your self-care journal</Text>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.textBtn}>Lets Get Started</Text>
			</TouchableOpacity> */}
			<View style={{ flex: 7 }}>
				<Image
					source={require('../assets/landing.png')}
					style={styles.image}
					resizeMode='contain'
				/>
			</View>
			<View style={{ flex: 3, justifyContent: 'center' }}>
				<Text style={styles.text}>Say hi to Eczemanagement</Text>
			</View>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text style={styles.textBody}>
					Your go to application for eczema associated problems!
				</Text>
			</View>
			<View
				style={{
					flex: 3,

					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity style={styles.button} onPress={setLanding(true)}>
					<Text style={styles.textBtn}>Lets Get Started</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#2A6049',
	},
	textBody: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'sans-serif',
		color: '#BFCFC8',
		fontWeight: '100',
	},
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	text: {
		fontSize: 42,
		textAlign: 'center',
		fontFamily: 'sans-serif',
		color: 'white',
		fontWeight: 'bold',
	},
	button: {
		borderRadius: 10,
		backgroundColor: 'white',
		width: '50%',
		height: '40%',
		justifyContent: 'center',
	},
	textBtn: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'sans-serif',
		color: 'black',
		fontWeight: '700',
	},
});
export default Landing;
