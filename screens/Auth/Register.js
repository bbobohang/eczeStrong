import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app, auth, db } from '../../firebase';

const register = (navigation, name, email, password, imageURL) => () => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			updateProfile(user, {
				displayName: name,
				photoURL: imageURL
					? imageURL
					: 'https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=',
				email: email,
			})
				.then(() => {
					navigation.navigate('ChatScreen');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					Alert.alert(errorMessage);
				});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode === 'auth/invalid-email') {
				Alert.alert('Invalid Credentials');
			}

			if (errorCode === 'auth/internal-error') {
				Alert.alert('Invalid email/password');
			}
			if (errorCode === 'auth/email-already-in-use') {
				Alert.alert('Email already in use');
			}
			if (errorCode === 'auth/weak-password') {
				Alert.alert('Password needs to be at least 6 characters long');
			}
		});
};
const Register = ({ navigation, setLogin, Login }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [imageURL, setImageURL] = useState('');

	return (
		<View style={{ alignItems: 'center', padding: 20 }}>
			<View style={{ height: 100 }}>
				<Text
					style={{
						textAlign: 'center',
						fontSize: 22,
						fontWeight: '300',
						marginBottom: 20,
						marginTop: 40,
					}}
				>
					Register an account
				</Text>
			</View>
			<Input
				label='Name'
				leftIcon={<Icon name='lock' size={24} color='black' />}
				onChangeText={(text) => setName(text)}
				placeholder='Enter your name'
				value={name}
			/>
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
			<Input
				label='Image'
				placeholder='Enter your image URL'
				leftIcon={<Icon name='lock' size={24} color='black' />}
				value={imageURL}
				onChangeText={(text) => setImageURL(text)}
			/>

			<View style={{}}>
				<TouchableOpacity
					style={styles.btn}
					onPress={register(navigation, name, email, password)}
				>
					<Text style={styles.btnText}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigation.replace('Login')}
				>
					<Text style={styles.btnText}>Login</Text>
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
export default Register;
