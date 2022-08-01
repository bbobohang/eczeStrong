import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import ListItem from '../../../components/ListItem';

const linkedPages = [
	{
		name: 'Bathing Practices',
		href: 'Bathing',
		icon: 'bathtub',
	},
	{
		name: 'Laundry Practices',
		href: 'Laundry',
		icon: 'washing-machine',
	},
	{
		name: 'Sleep Cycle ',
		href: 'Sleep',
		icon: 'coolant-temperature',
	},
	{
		name: 'Management of symptoms ',
		href: 'Management',
		icon: 'checkbox-marked',
	},
	{
		name: 'Daily Quotes',
		href: 'Quotes',
		icon: 'chat',
	},
];
const OtherAdvicesPage = ({ navigation }) => {
	return (
		<>
			<View style={{ height: 50, backgroundColor: 'white' }} />
			<View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
				{linkedPages.map((item, index) => (
					<ListItem key={index} item={item} navigation={navigation} />
				))}
			</View>
		</>
	);
};

export default OtherAdvicesPage;
