import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBYYPzj9tZJGOB2cpc-NwM8kvvwFUdNwJU',
	authDomain: 'alvinezapp.firebaseapp.com',
	projectId: 'alvinezapp',
	storageBucket: 'alvinezapp.appspot.com',
	messagingSenderId: '553317760484',
	appId: '1:553317760484:web:23983069646f00c387dbf1',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
