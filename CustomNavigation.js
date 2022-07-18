import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CostPage from './screens/Home/CostPage';

import Home from './screens/Home';
import HappyPage from './screens/Home/HappyPage';
import LivingPage from './screens/Home/LivingPage';
import AdditionalSupport from './screens/Home/AdditionalSupport';

import RelatedMedPage from './screens/Home/Cost/RelatedMedPage';
import OtherAdvicesPage from './screens/Home/Cost/OtherAdvicesPage';

import Bathing from './screens/Home/Advices/Bathing';
import Register from './screens/Auth/Register';
import Quotes from './screens/Home/Advices/Quotes';
import ChatScreen from './screens/Chat/ChatScreen';
import Login from './screens/Auth/Login';
import ChatScreenAdmin from './screens/Chat/ChatScreenAdmin';
import Laundry from './screens/Home/Advices/Laundry';
import Sleep from './screens/Home/Advices/Sleep';
import Management from './screens/Home/Advices/Management';
const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerStyle: {
					backgroundColor: '#2A6049',
				},
				headerTintColor: '#fff',
			}}
			id='HomeScreenNavigator'
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
			<Stack.Screen
				name='LivingPage'
				component={LivingPage}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='AdditionalSupport'
				component={AdditionalSupport}
				options={{
					title: 'Mental Wellness',
				}}
			/>
			<Stack.Screen name='RelatedMedPage' component={RelatedMedPage} />
			<Stack.Screen name='OtherAdvicesPage' component={OtherAdvicesPage} />
			<Stack.Screen name='Bathing' component={Bathing} />
			<Stack.Screen name='Laundry' component={Laundry} />
			<Stack.Screen name='Sleep' component={Sleep} />
			<Stack.Screen name='Management' component={Management} />
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
				name='Login'
				component={Login}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name='ChatScreen'
				component={ChatScreen}
				options={{
					headerTitle: 'Welcome to Chat',
				}}
			/>
			<Stack.Screen name='ChatScreenAdmin' component={ChatScreenAdmin} />
			<Stack.Screen
				name='Register'
				component={Register}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export { ChatScreenNavigator };
export { HomeScreenNavigator };
