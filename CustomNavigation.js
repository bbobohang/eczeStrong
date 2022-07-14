import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CostPage from './screens/Home/CostPage';

import Home from './screens/Home';
import HappyPage from './screens/Home/HappyPage';
import LivingPage from './screens/Home/LivingPage';
import MentalPage from './screens/Home/MentalPage';

import RelatedMedPage from './screens/Home/Cost/RelatedMedPage';
import OtherAdvicesPage from './screens/Home/Cost/OtherAdvicesPage';

import Bathing from './screens/Home/Cost/Advices/Bathing';
import Register from './screens/Auth/Register';
import Quotes from './screens/Home/Cost/Advices/Quotes';
import ChatScreen from './screens/Chat/ChatScreen';
import Login from './screens/Auth/Login';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2A6049',
				},
				headerTintColor: '#fff',
			}}
		>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='CostPage'
				component={CostPage}
				options={{
					title: 'Good Lobang!',
				}}
			/>
			<Stack.Screen
				name='HappyPage'
				component={HappyPage}
				options={{
					title: 'Tips and Advices',
				}}
			/>
			<Stack.Screen name='LivingPage' component={LivingPage} />
			<Stack.Screen
				name='MentalPage'
				component={MentalPage}
				options={{
					title: 'Mental Wellness',
				}}
			/>
			<Stack.Screen name='RelatedMedPage' component={RelatedMedPage} />
			<Stack.Screen name='OtherAdvicesPage' component={OtherAdvicesPage} />
			<Stack.Screen name='Bathing' component={Bathing} />
			<Stack.Screen name='Quotes' component={Quotes} />
		</Stack.Navigator>
	);
};

const ChatScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2A6049',
				},
				headerTintColor: '#fff',
			}}
		>
			<Stack.Screen
				name='Register'
				component={Register}
				options={{
					title: 'Back to Login',
				}}
			/>
			<Stack.Screen
				name='ChatScreen'
				component={ChatScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name='Login' component={Login} />
		</Stack.Navigator>
	);
};

export { ChatScreenNavigator };
export { HomeScreenNavigator };
