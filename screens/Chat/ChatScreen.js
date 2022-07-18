import React, {
	useState,
	useCallback,
	useEffect,
	useLayoutEffect,
} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, TouchableOpacity } from 'react-native';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import { Avatar } from 'react-native-elements';
import {
	doc,
	setDoc,
	collection,
	query,
	where,
	onSnapshot,
	getDocs,
	addDoc,
	orderBy,
} from 'firebase/firestore';

const ChatScreen = ({ navigation }) => {
	const [messages, setMessages] = useState([]);
	const user = auth.currentUser;
	const signOutNow = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigation.replace('Login');
			})
			.catch((error) => {
				// An error happened.
			});
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<View style={{ marginLeft: 20 }}>
					<Avatar
						rounded
						source={{
							uri: auth?.currentUser?.photoURL,
						}}
					/>
				</View>
			),
			headerRight: () => (
				<TouchableOpacity
					style={{
						marginRight: 10,
					}}
					onPress={signOutNow}
				>
					<Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
						Log out
					</Text>
				</TouchableOpacity>
			),
		});
		const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
		const unsubscribe = onSnapshot(q, (snapshot) =>
			setMessages(
				snapshot.docs.map((doc) => ({
					_id: doc.data()._id,
					createdAt: doc.data().createdAt.toDate(),
					text: doc.data().text,
					user: doc.data().user,
				}))
			)
		);

		return () => {
			unsubscribe();
		};
	}, [navigation]);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
		const { _id, createdAt, text, user } = messages[0];

		addDoc(collection(db, 'chats'), {
			_id,
			createdAt,
			text,
			user,
			receiver: 'alvin@gmail.com',
		});
	}, []);
	return (
		<GiftedChat
			renderUsernameOnMessage={true}
			messages={messages}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: auth?.currentUser?.email,
				name: auth?.currentUser?.displayName,
				avatar: auth?.currentUser?.photoURL,
			}}
		/>
	);
};

export default ChatScreen;
