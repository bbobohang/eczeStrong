import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { NUM } from '../data/numbers';
const Hotline = () => {
	return (
		<View style={{ height: '100%', padding: 20, marginTop: 25 }}>
			<View style={{ height: 100 }}>
				<Text
					style={{
						textAlign: 'center',
						fontSize: 22,
						fontWeight: '300',
						marginBottom: 20,
						marginTop: 20,
					}}
				>
					{' '}
					Counselling Centres and Helplines
				</Text>
			</View>
			<View style={{ height: 600, display: 'flex' }}>
				{NUM.map((items, index) => (
					<View
						key={index}
						style={{
							flex: 1,
							flexDirection: 'row',
							borderWidth: 1,
							borderRadius: 10,
							marginTop: 10,
						}}
					>
						<View
							style={{
								flex: 1,
								top: 43,
								left: 45,
							}}
						>
							<MaterialCommunityIcons name='phone' size={20} />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={{ flex: 1, justifyContent: 'flex-end' }}>
								<Text>{items.title}</Text>
							</View>
							<View style={{ flex: 1 }}>
								<Text>{items.number}</Text>
							</View>
						</View>
					</View>
				))}
			</View>
		</View>
	);
};

export default Hotline;
