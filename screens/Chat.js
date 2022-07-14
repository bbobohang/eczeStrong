import React, { Fragment, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Chat = ({ navigation }) => {
	return (
		<Fragment>
			<Register auth={auth} />
		</Fragment>
	);
};

export default Chat;
