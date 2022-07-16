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
	// useLayoutEffect(() => {
	// 	try {
	// 		let arr = [];
	// 		const fetchData = async () => {
	// 			const querySnapshot = await getDocs(collection(db, 'chats'));
	// 			querySnapshot.forEach((doc) => {
	// 				arr.push({
	// 					_id: doc.data()._id,
	// 					createdAt: doc.data().createdAt.toDate(),
	// 					text: doc.data().text,
	// 					user: doc.data().user,
	// 				});
	// 				const sortedAsc = arr.sort(
	// 					(objA, objB) => Number(objB.createdAt) - Number(objA.createdAt)
	// 				);
	// 				setMessages(sortedAsc);
	// 			});
	// 		};
	// 		fetchData();
	// 	} catch (error) {
	// 		console.log(err);
	// 	}
	// }, []);
	// useEffect(() => {
	// 	setMessages([
	// 		{
	// 			_id: 'alvin@gmail.com',
	// 			text: 'Hello developer',
	// 			createdAt: new Date(),
	// 			user: {
	// 				_id: 'alvin@gmail.com',
	// 				name: 'React Native',
	// 				avatar: 'https://placeimg.com/140/140/any',
	// 			},
	// 		},
	// 		{
	// 			_id: 1,
	// 			text: 'Hello developer',
	// 			createdAt: new Date(),
	// 			user: {
	// 				_id: 2,
	// 				name: 'React Native',
	// 				avatar: 'https://placeimg.com/140/140/any',
	// 			},
	// 		},
	// 	]);
	// }, []);
	// useLayoutEffect(() => {
	// 	const querySnapshot = getDocs(collection(db, 'cities'));
	// 	querySnapshot.forEach((doc) => {
	// 		// doc.data() is never undefined for query doc snapshots
	// 		console.log(doc.id, ' => ', doc.data());
	// 		setMessages({
	// 			_id: doc.data()._id,
	// 			createdAt: doc.data().createdAt.toDate(),
	// 			text: doc.data().text,
	// 			user: doc.data().user,
	// 		});
	// 	});
	// }, []);

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
					<Text>logout</Text>
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
