import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { auth, db } from '../../firebase';

const ChatScreenAdmin = ({ navigation }) => {
	navigation.replace('Login');
	return (
		<View>
			<Text>Admin page</Text>
		</View>
	);
};

export default ChatScreenAdmin;
