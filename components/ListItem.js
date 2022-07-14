import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ListItem = ({ item, navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					margin: 10,
					flexDirection: 'row',
					borderWidth: 1,
					borderRadius: 10,
					borderColor: '#a9a9a9',
					padding: 5,
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignContent: 'center',
						paddingLeft: 10,
					}}
				>
					<MaterialCommunityIcons name={item.icon} size={70} />
				</View>
				<TouchableOpacity
					style={{
						flex: 3,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onPress={() => navigation.navigate(item.href)}
				>
					<Text style={{ fontSize: 28, textAlign: 'center', fontWeight: '500' }}>
						{item.name}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ListItem;
