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
		href: 'RelatedMedPage',
		icon: 'washing-machine',
	},
	{
		name: 'Sleep Cycle ',
		href: 'RelatedMedPage',
		icon: 'coolant-temperature',
	},
	{
		name: 'Management of symptoms ',
		href: 'RelatedMedPage',
		icon: 'bookshelf',
	},
	{
		name: 'Daily Quotes',
		href: 'Quotes',
		icon: 'bookshelf',
	},
];
const OtherAdvicesPage = ({ navigation }) => {
	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			{linkedPages.map((item, index) => (
				<ListItem key={index} item={item} navigation={navigation} />
			))}
		</View>
	);
};

export default OtherAdvicesPage;
