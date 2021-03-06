import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ChatScreen from '../Chat/ChatScreen';

const login = (email, password, navigation) => () => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			if (user.displayName === 'admin') {
				navigation.replace('ChatScreenAdmin');
			} else {
				navigation.replace('ChatScreen');
			}
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};
const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={{ alignItems: 'center', padding: 20 }}>
			<Text>Login to your account</Text>
			<Input
				label='Email'
				placeholder='Enter your email'
				leftIcon={<Icon name='user' size={24} color='black' />}
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<Input
				label='Password'
				placeholder='Enter your password'
				leftIcon={<Icon name='lock' size={24} color='black' />}
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
			/>

			<View style={{}}>
				<TouchableOpacity
					style={styles.btn}
					onPress={login(email, password, navigation)}
				>
					<Text style={styles.btnText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigation.replace('Register')}
				>
					<Text style={styles.btnText}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	btn: {
		borderRadius: 10,
		backgroundColor: '#2A6049',
		width: 100,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	btnText: {
		fontSize: 20,
		color: 'white',
		fontWeight: '500',
	},
});
export default Login;
