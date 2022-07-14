import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { MED } from '../../../data/relatedMed';

const RelatedMedPage = () => {
	return (
		<ScrollView>
			<View style={{ flex: 1, flexDirection: 'column' }}>
				{MED.map((item, index) => (
					<View key={index} style={{ height: 550, padding: 20 }}>
						<View
							style={{
								flex: 1,
								borderWidth: 1,
								borderRadius: 20,
								borderColor: '#a9a9a9',
							}}
						>
							<View style={{ flex: 3, padding: 20 }}>
								<Image source={item.imgSrc} style={styles.img} />
							</View>
							<Text style={styles.title}>{item.title}</Text>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									padding: 20,
								}}
							>
								<View style={{ flex: 3 }}>
									<Text style={styles.desc}>{item.desc}</Text>
								</View>
								<View
									style={{
										flex: 1,
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Text style={styles.cost}>{item.cost}</Text>
								</View>
							</View>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	img: {
		flex: 1,
		width: undefined,
		height: undefined,
		borderRadius: 10,
	},
	desc: {
		textAlign: 'left',
		fontSize: 20,
		fontWeight: '300',
		marginLeft: 10,
		marginTop: 10,
	},
	cost: {
		fontSize: 32,
		fontWeight: '500',
	},
	title: {
		fontSize: 32,
		fontWeight: '600',
		textAlign: 'center',
	},
});
export default RelatedMedPage;
