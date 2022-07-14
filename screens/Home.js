import * as React from 'react';
import { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	Image,
	TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View
					style={{
						flex: 2,
						justifyContent: 'flex-end',
						paddingLeft: 20,
					}}
				>
					<Text
						style={{ fontSize: 32, fontWeight: '700', fontFamily: 'sans-serif' }}
					>
						Choose the areas
					</Text>
				</View>
				<View style={{ flex: 1, paddingLeft: 20 }}>
					<Text
						style={{
							fontSize: 24,
							fontFamily: 'sans-serif',
							fontWeight: '100',
						}}
					>
						you want to improve on
					</Text>
				</View>
			</View>
			<View style={{ flex: 3, justifyContent: 'space-evenly' }}>
				<View style={styles.itemList}>
					<View style={styles.itemCtn}>
						<View style={styles.iconCtn}>
							<MaterialCommunityIcons name='hand-coin' size={70} />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={styles.textCtn}>
								<Text style={styles.title}>Good Lobang! </Text>
								<Text style={styles.subtitle}>Spend less earn more</Text>
							</View>
						</View>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Button
								title='GO'
								onPress={() => navigation.navigate('CostPage')}
								color='#2A6049'
								style={styles.goBtn}
							/>
						</View>
					</View>
				</View>
				<View style={styles.itemList}>
					<View style={styles.itemCtn}>
						<View style={styles.iconCtn}>
							<MaterialCommunityIcons name='hand-coin' size={70} />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={styles.textCtn}>
								<Text style={styles.title}>Tips and Advices on Daily Activities</Text>
								<Text style={styles.subtitle}>Advices that actually helps </Text>
							</View>
						</View>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Button
								title='GO'
								color='#2A6049'
								onPress={() => navigation.navigate('HappyPage')}
								style={styles.goBtn}
							/>
						</View>
					</View>
				</View>
				<View style={styles.itemList}>
					<View style={styles.itemCtn}>
						<View style={styles.iconCtn}>
							<MaterialCommunityIcons name='hand-coin' size={70} />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={styles.textCtn}>
								<Text style={styles.title}>Meet a Friend!</Text>
								<Text style={styles.subtitle}>Chat with a buddy</Text>
							</View>
						</View>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Button
								title='GO'
								color='#2A6049'
								onPress={() => navigation.navigate('LivingPage')}
								style={styles.goBtn}
							/>
						</View>
					</View>
				</View>
				<View style={styles.itemList}>
					<View style={styles.itemCtn}>
						<View style={styles.iconCtn}>
							<MaterialCommunityIcons name='hand-coin' size={70} />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={styles.textCtn}>
								<Text style={styles.title}>Additional Support</Text>
								<Text style={styles.subtitle}>Frown less Smile More</Text>
							</View>
						</View>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Button
								title='GO'
								color='#2A6049'
								onPress={() => navigation.navigate('MentalPage')}
								style={styles.goBtn}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	itemList: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
		paddingLeft: 30,
		paddingRight: 30,
	},
	itemCtn: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		borderColor: '#EFEFEF',
		borderWidth: 2,
		borderRadius: 20,
	},
	textCtn: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	iconCtn: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	subtitle: {
		fontWeight: '400',
		fontSize: 14,
		color: '#a9a9a9',
	},
	title: {
		fontWeight: '600',
		fontSize: 18,
	},
	goBtn: {
		borderRadius: 30,
	},
});
