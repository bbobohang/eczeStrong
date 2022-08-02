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
import { Linking } from 'react-native';

const CONTENT = [
	{
		title: 'Bathing tips in atopic dermatitis',
		content: (
			<View
				style={{
					width: 350,
					display: 'flex',
				}}
			>
				<View style={{ alignItems: 'flex-start' }}>
					<Text>
						{'\u25CF'} Bath in warm water and not hot or cold water → Hot water can
						increase the itch response {'\n'}
					</Text>
				</View>
				<View style={{}}>
					<Text>
						{'\u25CF'} Limit the bath to 5 or 10 minutes → Bathing for too long can
						dry out the skin, making the skin worse
					</Text>
				</View>
				<View>
					<Text>
						{'\u25CF'} Use a mild and fragrance-free cleanser{'\n'}
					</Text>
				</View>
				<View>
					<Text>
						{'\u25CF'}Do not use bubble bath → Soaps and detergents are also known to
						trigger AD flares. A shampoo that is unperfumed and suitable for eczema
						patients should be used {'\n'}
					</Text>
				</View>
				<View>
					<Text>
						{'\u25CF'} After bathing, gently pat skin dry → Be gentle when blotting
						the skin dry with a towel {'\n'}
					</Text>
				</View>
				<View>
					<Text>
						{'\u25CF'} Apply moisturizer and medicine when the skin is almost dry
						{'\n'}
					</Text>
				</View>
			</View>
		),
	},
	{
		title: 'Recommended method!',
		content: (
			<View
				style={{
					width: 350,
					display: 'flex',
				}}
			>
				<View
					style={{
						alignItems: 'flex-start',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 16, fontWeight: '300' }}>
						Soak and Seal{'\n'}
					</Text>
				</View>
				<View>
					<Text>
						<Text>
							Instructions: {'\n'}
							{'\u25CF'} Take a bath using lukewarm water for 5-10 minutes. Use a
							gentle cleanser and avoid scrubbing the affected skin.{'\n'}
							{'\u25CF'} After bathing, pat the skin lightly with a towel leaving it
							slightly damp{'\n'}
							{'\u25CF'} Apply topical medication to the affected areas of skin as
							directed{'\n'}
							{'\u25CF'} Within 3 minutes, liberally apply a moisturizer all over the
							body. It is important to apply the moisturizer within 3 minutes or the
							skin may become even drier{'\n'}
							{'\u25CF'} Wait a few minutes to let the moisturizer absorb into the skin
							before dressing or applying wet wraps.{'\n'}
						</Text>
					</Text>
				</View>
			</View>
		),
	},
];

export default class Bathing extends Component {
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
					<Text style={styles.title}>Bathing Practices</Text>
					<View style={{ height: 300 }}>
						<Image
							source={require('../../../assets/bathing1.jpg')}
							style={styles.image}
							resizeMode='contain'
						/>
					</View>
					<Text
						style={styles.hyperlink}
						onPress={() =>
							Linking.openURL(
								'https://www.dreamstime.com/stock-illustration-atopic-dermatitis-bathing-use-soap-application-eczema-advice-patients-eczema-steroid-creams-moisturising-emulsions-image81215517'
							)
						}
					>
						Image Link
					</Text>
					<Text style={styles.content}>
						Bathing is important to remove the higher levels of bacteria on Atopic
						Skin. However, correct bathing practices should be enforced to not cause
						any damage to the skin barriers.
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

					<Text style={styles.content}>
						There is a significant amount of data showing that patients with atopic
						dermatitis have impaired barrier function; hence, choosing a wash designed
						to improve the skin barrier is helpful.
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
								navigation.replace('CostPage');
							}}
						>
							<View>
								<Text style={styles.btnText}>Click Here to find out more!</Text>
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
	hyperlink: {
		textAlign: 'center',
		fontSize: 8,
		fontStyle: 'italic',
		color: 'blue',
		textDecorationLine: 'underline',
	},
});
