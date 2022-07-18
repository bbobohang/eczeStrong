import React, { Component } from 'react';
import {
	Switch,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
	{
		title: 'Dry occlusive dressings',
		content: (
			<Text>
				Clean the area of skin that needs special attention with a soap-free,
				unperfumed wash {'\n'}
				{'\n'}Pat dry with a soft towel Apply an emollient ointment of choice {'\n'}
				{'\n'}Cover with a fine, close-fitting bandage or another garment {'\n'}
				{'\n'}Leave on for 4-6 hours
			</Text>
		),
	},
	{
		title: 'Wet occlusive dressings',
		content: (
			<View style={{ paddingLeft: 10 }}>
				<Image
					source={require('../../../assets/management.jpg')}
					style={{ height: 350, width: 350 }}
					resizeMode='contain'
				/>
			</View>
		),
	},
];

export default class Laundry extends Component {
	state = {
		activeSections: [],
		collapsed: true,
		multipleSelect: true,
	};

	toggleExpanded = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	setSections = (sections) => {
		this.setState({
			activeSections: sections.includes(undefined) ? [] : sections,
		});
	};

	renderHeader = (section, _, isActive) => {
		return (
			<Animatable.View
				duration={400}
				style={[styles.header, isActive ? styles.active : styles.inactive]}
				transition='backgroundColor'
			>
				<Text style={styles.headerText}>{section.title}</Text>
			</Animatable.View>
		);
	};

	renderContent(section, _, isActive) {
		return (
			<Animatable.View
				duration={400}
				style={[styles.content, isActive ? styles.active : styles.inactive]}
				transition='backgroundColor'
			>
				<Text>{section.content}</Text>
			</Animatable.View>
		);
	}

	render() {
		const { multipleSelect, activeSections, activeSections2 } = this.state;
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={{ paddingTop: 30 }}>
					<Text style={styles.title}>Management of Symptoms</Text>

					<View style={{ height: 300 }}>
						<Image
							source={require('../../../assets/management2.jpg')}
							style={styles.image}
							resizeMode='contain'
						/>
					</View>

					<Text style={styles.content}>
						Use of occlusive dressings after applying medications is recommended!{' '}
						{'\n'}
						{'\n'}This includes bandages and wet or dry wraps. The effect of topical
						preparations can be enhanced by either wet or dry occlusive dressings.
						{'\n'}
						{'\n'}
						This would be beneficial in the overall management of Atopic Dermatitis’s
						symptoms.
					</Text>

					<Accordion
						align='bottom'
						activeSections={activeSections}
						sections={CONTENT}
						touchableComponent={TouchableOpacity}
						expandMultiple={multipleSelect}
						renderHeader={this.renderHeader}
						renderContent={this.renderContent}
						duration={400}
						onChange={this.setSections}
						renderAsFlatList={false}
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: Constants.statusBarHeight,
	},
	title: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '300',
		marginBottom: 20,
	},
	header: {
		backgroundColor: '#edfaf1',
		padding: 10,
	},
	headerText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
	},
	content: {
		padding: 20,
		backgroundColor: 'white',
		textAlign: 'justify',
	},
	active: {
		backgroundColor: 'white',
	},
	inactive: {
		backgroundColor: '#edfaf1',
	},
	selectors: {
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	selector: {
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	activeSelector: {
		fontWeight: 'bold',
	},
	selectTitle: {
		fontSize: 14,
		fontWeight: '500',
		padding: 10,
	},
	multipleToggle: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 30,
		alignItems: 'center',
	},
	multipleToggle__title: {
		fontSize: 16,
		marginRight: 8,
	},
	btn: {
		justifyContent: 'center',
		alignItem: 'center',
		width: '70%',
		height: '70%',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 10,
		backgroundColor: '#2A6049',
	},
	btnText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
		color: 'white',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
