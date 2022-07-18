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
		title: 'Always run new clothes through the wash',
		content: (
			<Text>
				Many new clothing articles have finishing sprays and chemicals that can be
				highly irritating! {'\n'}
				{'\n'}Play it safe by washing new clothing with a double rinse cycle before
				wearing it!
			</Text>
		),
	},
	{
		title: 'Do not overload the machine! ',
		content: (
			<Text>
				Loading the washer with the right amount of clothing can allow the laundry
				detergent to dissolve evenly. {'\n'}
				{'\n'}This would prevent ineffective cleaning or even having residual
				detergent on the clothing, which would become a potential flare-ups
			</Text>
		),
	},
	{
		title: 'Let the rinse cycle run',
		content: (
			<Text>
				Let the detergents rinse away from your clothes to avoid potential contact
				with your skin. You can even consider double-rinse if required!
			</Text>
		),
	},
	{
		title: 'Skip fabric softeners and dryer sheets ',
		content: (
			<Text>
				Fabric softener and dry sheets are usually fragranced, and this could
				trigger eczema. {'\n'}
				{'\n'}
				Moreover, these products introduce more chemicals that could potentially be
				allergic to.
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
					<Text style={styles.title}>Laundry Practices</Text>

					<View style={{ height: 200 }}>
						<Image
							source={require('../../../assets/laundry.jpg')}
							style={styles.image}
							resizeMode='contain'
						/>
					</View>

					<Text style={styles.content}>
						“Everyone’s skin is different, an irritant for you may not have an effect
						on someone else. A little trial and error may be necessary to learn what
						works best for your skin! Follow these tips to make sure you are doing
						your laundry practices in an eczema-friendly way!”
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
