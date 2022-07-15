import React, {
	useState,
	useCallback,
	useEffect,
	useLayoutEffect,
} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import { auth, db } from '../../firebase';
import {
	doc,
	setDoc,
	collection,
	query,
	where,
	onSnapshot,
	getDocs,
	addDoc,
} from 'firebase/firestore';

const ChatScreen = () => {
	const [messages, setMessages] = useState([]);
	const user = auth.currentUser;
	useEffect(() => {
		try {
			let arr = [];
			const fetchData = async () => {
				const querySnapshot = await getDocs(collection(db, 'chats'));
				querySnapshot.forEach((doc) => {
					arr.push({
						_id: doc.data()._id,
						createdAt: doc.data().createdAt.toDate(),
						text: doc.data().text,
						user: doc.data().user,
					});
					const sortedAsc = arr.sort(
						(objA, objB) => Number(objB.createdAt) - Number(objA.createdAt)
					);
					setMessages(sortedAsc);
				});
				console.log(arr);
			};
			fetchData();
		} catch (error) {
			console.log(err);
		}
	}, []);
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
