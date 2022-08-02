import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

import Chat from './screens/Chat';
import Hotline from './screens/Hotline';
import Home from './screens/Home';

import { HomeScreenNavigator, ChatScreenNavigator } from './CustomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';

const Tab = createBottomTabNavigator();

export default function App() {
	const [landing, setLanding] = useState(true);
	const handlePress = () => {
		setLanding(!landing);
	};
	function MyTabs() {
		return (
			<Tab.Navigator
				initialRouteName='Feed'
				screenOptions={{
					tabBarActiveTintColor: '#2A6049',
				}}
			>
				<Tab.Screen
					name='HomeNav'
					component={HomeScreenNavigator}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name='home' color={color} size={size} />
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen
					name='Chat'
					component={ChatScreenNavigator}
					options={{
						tabBarLabel: 'Meet a Friend',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name='chat' color={color} size={size} />
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen
					name='Hotline'
					component={Hotline}
					options={{
						tabBarLabel: 'Hotline',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name='phone' color={color} size={size} />
						),
						headerShown: false,
					}}
				/>
			</Tab.Navigator>
		);
	}
	function Landing() {
		return (
			<View style={landingStyles.container}>
				<View style={{ flex: 7 }}>
					<Image
						source={require('./assets/landing.png')}
						style={landingStyles.image}
						resizeMode='contain'
					/>
				</View>
				<View style={{ flex: 3, justifyContent: 'center' }}>
					<Text style={landingStyles.text}>Say hi to your self-care journal</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text style={landingStyles.textBody}>
						Your go to application for Ezcema
					</Text>
				</View>
				<View
					style={{
						flex: 3,

						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TouchableOpacity style={landingStyles.button} onPress={handlePress}>
						<Text style={landingStyles.textBtn}>Lets Get Started</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	return landing === false ? (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	) : (
		<Landing />
	);
}

const landingStyles = StyleSheet.create({
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
		fontWeight: 'light',
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
