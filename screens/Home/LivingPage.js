import React, { Component } from 'react';
import {
	Switch,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
	{
		title: 'Take charge of conversations',
		content:
			'Make decisions to talk to new people and enter into conversations even when you are nervous or shy. This will get easier, and you will eventually start improving your social skills. ',
	},
	{
		title: 'Ask open-ended questions',
		content:
			'This encourages and invites the other person to talk and keep the conversation going. ',
	},
	{
		title: 'Improve your emotional intelligence',
		content:
			'“Put yourself in their shoes”! Imagine what they might be going through and try to understand their feelings. This will help to better understand their perspective and eventually help you to respond appropriately.',
	},
	{
		title: 'Encourage others to talk about themselves',
		content:
			'Most people really enjoy talking about themselves. Ask questions about a person’s lifestyle, such as career, hobbies, or family. Show interest in hearing what is being said!',
	},
	{
		title: 'Identify and replace negative thoughts',
		content:
			'Identify negative thoughts that are likely to drag you down and replace them with more realistic ones. Don’t allow yourself to dwell on thoughts that are not productive!. ',
	},
];

export default class LivingPage extends Component {
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
					<Text style={styles.title}>Welcome to Meet a Friend!</Text>
					<Text style={styles.content}>
						This platform is to help improve the social behaviour of the sufferers by
						providing opportunities for them to interact with one another!
					</Text>
					<TouchableOpacity onPress={this.toggleExpanded}>
						<View style={styles.header}>
							<Text style={styles.headerText}>Definition of Social Skills</Text>
						</View>
					</TouchableOpacity>
					<Collapsible collapsed={this.state.collapsed}>
						<View style={styles.content}>
							<Animatable.Text
								animation={this.state.collapsed ? undefined : 'zoomIn'}
								duration={300}
								useNativeDriver
								style={{ textAlign: 'justify' }}
							>
								Social skills are verbal and nonverbal tools used to communicate,
								interact and build healthy relationships. It is often defined as a set
								of behaviours allowing an individual to relate to others effectively and
								satisfactorily. This includes forming and fostering relationships,
								explaining, communicating, active listening, networking and many more.{' '}
								{'\n'}
								{'\n'}One interesting aspect about social skills is that they can be
								learned, strengthened, and developed daily with practice! {'\n'}
								{'\n'}
								“Social skills are a fundamental pillar in any scenario.” - Professor
								David Deming, doctor in education and economics, Harvard University.
							</Animatable.Text>
						</View>
					</Collapsible>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							height: 100,
						}}
					>
						<Text style={{ fontSize: 22, fontWeight: '300' }}>
							Advices on what you can do
						</Text>
					</View>

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
					<Text style={{ textAlign: 'justify', padding: 20, marginTop: 20 }}>
						“Good social skills are essential for all aspects of life, especially
						effective communication! If you find socialising with others challenging,
						Remember, great social skills do not come easily. You have to practice and
						really step out of your comfort zone! You got this!”
					</Text>
					<Text
						style={{
							textAlign: 'center',
							padding: 20,
							marginTop: 20,
							fontSize: 22,
							fontWeight: '300',
						}}
					>
						Want to try these tips by talking with others?
					</Text>
					<View
						style={{
							alignItems: 'center',
							height: 100,
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							style={styles.btn}
							onPress={() => {
								const parentNav = navigation.getParent();
								parentNav.navigate('Login');
							}}
						>
							<View>
								<Text style={styles.btnText}>Click Here to go to Chat!</Text>
							</View>
						</TouchableOpacity>
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
		width: '60%',
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
});
