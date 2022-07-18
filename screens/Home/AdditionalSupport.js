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
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
	{
		title: 'Embrace the condition!',
		content: (
			<Text>
				Acceptance is the first step! It is essential to be honest with yourself,
				recognising that you have eczema and fully accepting it may take a few
				months or even years. However, this acknowledgement helps you to be
				realistic about what it means for your physical and metal health!
			</Text>
		),
	},
	{
		title: 'Connect with others who have eczema ',
		content: (
			<Text>
				Eczema can feel isolating, but it’s one of the most typical skin conditions.
				Connecting with others, such as through online support groups can help to
				boost self-esteem, reduce feelings of isolation and learn new ways to cope
				with living with eczema {'\n'}
				{'\n'}
				Connect with others using the Chat function!
			</Text>
		),
	},
	{
		title: 'Exercising',
		content: (
			<Text>
				Exercise is one of the most effective ways to tackle stress, anxiety,
				depression and other negative emotions. Whether you prefer walking, running
				or swimming. Exercise is believed to dramatically improve your mood.
				However, if sweat is a trigger for your eczema, remember to take a cool or
				lukewarm shower coon after your workout and change clothes!
			</Text>
		),
	},
	{
		title: 'Refer to a mental health counsellor ',
		content: (
			<Text>
				Never hesitate to refer to external help If you are unable to handle the
				stress or manage the symptoms alone. Sometimes an experienced and
				sympathetic ear is just what’s needed to bring mental balance back into
				place! A counsellor can provide insights that will make the experience much
				more tolerable. {'\n'}
				{'\n'}
			</Text>
		),
	},
];

export default class AdditionalSupport extends Component {
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
					<Text style={styles.title}>Additional Support</Text>
					<Text style={styles.content}>
						From the red, rash-like appearance to the torturous itch and sleepless
						night. Living with eczema can be downright challenging on our emotional
						well-being. Anxiety and stress are common triggers that cause eczema to
						flare up, creating more anxiety and stress. This then again leads to more
						flare-ups. Therefore, here are some helpful tips and advice for you to
						break this vicious cycle!
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
					<Text
						style={{
							textAlign: 'center',
							padding: 20,
							marginTop: 20,
							fontSize: 22,
							fontWeight: '300',
						}}
					>
						Scan this QR to find out more about the counselling centres and helplines!
					</Text>
					<View
						style={{
							alignItems: 'center',
							height: 150,
							justifyContent: 'center',
							marginBottom: 30,
						}}
					>
						<Image
							source={require('../../assets/qr.png')}
							style={{ height: 150, width: 150 }}
							resizeMode='contain'
						/>
					</View>
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
		backgroundColor: '#fff',
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
