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
import {
	MaterialCommunityIcons,
	Entypo,
	Ionicons,
	FontAwesome,
	FontAwesome5,
	SimpleLineIcons,
} from '@expo/vector-icons';

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
							<FontAwesome name='dollar' size={60} color='#2A6049' />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={styles.textCtn}>
								<Text style={styles.title}>Good deals!</Text>
								<Text style={styles.subtitle}>
									Cheaper management medications for Eczema!
								</Text>
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
							<SimpleLineIcons name='speech' size={60} color='#2A6049' />
						</View>
						<View style={{ flex: 4, flexDirection: 'column' }}>
							<View style={styles.textCtn}>
								<Text style={styles.title}>Tips and Advices </Text>
								<Text style={styles.subtitle}>Advices for daily activites </Text>
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
							<FontAwesome5 name='user-friends' size={50} color='#2A6049' />
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
							<FontAwesome5 name='hands-helping' size={50} color='#2A6049' />
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
								onPress={() => navigation.navigate('AdditionalSupport')}
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
		paddingLeft: 5,
	},
	title: {
		fontWeight: '600',
		fontSize: 18,
		paddingRight: 5,
	},
	goBtn: {
		borderRadius: 30,
	},
});
