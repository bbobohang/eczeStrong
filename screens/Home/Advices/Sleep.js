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
		title: 'Adjust your thermostat ',
		content: (
			<Text>
				Keeping the environment temperature levels low may be able to reduce the
				severity of the eczema symptoms. {'\n'}
				{'\n'}Body temperature and eczema are closely related. The warmer the
				environment, the worse the condition tends to be. Many people wake up in the
				middle of the night as their body overheats and the eczema-related itching
				worsens.
				{'\n'}
				{'\n'}However, theres no universal temperature that is best for everyone.
				You may have to try different temperatures to identify the one that's the
				most comfortable for you!
			</Text>
		),
	},
	{
		title: 'Reduce night-time scratching',
		content: (
			<Text>
				Many people unintentionally scratch their eczema patches at night. To reduce
				the risk of scratching and making the condition worse. Keep your nails
				trimmed and neat!
				{'\n'}
				{'\n'}You can even consider wearing soft cotton gloves at night to cover
				your fingernails if required!
			</Text>
		),
	},
	{
		title: 'Practice good sleep hygiene',
		content: (
			<Text>
				Stick to regular bedtime and wake-up time every day. This trains your body
				to go to sleep and stay asleep smoothing. {'\n'}
				{'\n'}Engage in relaxation techniques about an hour before going to bed.
				Examples include meditating, taking a bath, listening to soothing music or
				reading a book{'\n'}
				{'\n'}Avoid eating heavy meals, drinking caffeine, or smoking before going
				to bed. These habits are all associated with disrupting sleep.
			</Text>
		),
	},
	{
		title: 'Choose appropriate sleepwear ',
		content: (
			<Text>
				The clothes worn to sleep can affect the quality of rest. Do not wear
				anything made of fabric that’s too rough, scratchy, or tight. {'\n'}
				{'\n'}
				Also, ensure you wear appropriate clothing depending on how hot or cold it
				is to avoid sweating.{'\n'}
				{'\n'}It preferred to go for airy, loose and breathable fabrics that absorb
				moisture.
			</Text>
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
					<Text style={styles.title}>Sleep Cycle</Text>

					<View style={{ height: 200 }}>
						<Image
							source={require('../../../assets/sleep.jpg')}
							style={styles.image}
							resizeMode='contain'
						/>
					</View>

					<Text style={styles.content}>
						“ A good night’s sleep does not have to elude you when you have severe
						eczema. Here are some tips you can try to catch more sleep and have a
						better sleep quality!”
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
