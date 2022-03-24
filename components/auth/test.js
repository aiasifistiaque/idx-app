import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from '../../store/actions/auth/loginAction';
import { APP_NAME } from '@env';
import { tokenName } from '../../store/storeConstants';
import * as SecureStore from 'expo-secure-store';
import logoutAction from '../../store/actions/auth/logoutAction';

const Login = () => {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.login);
	const { token } = useSelector(state => state.auth);
	const email = 'asifistiaque.ai@gmail.com';
	const password = '01828398225';
	const login = () => {
		dispatch(loginAction(email, password));
	};
	useEffect(() => {
		//console.log(('auth', auth));
	}, [auth]);
	useEffect(() => {
		console.log('token is');
		console.log(token);
	}, [token]);

	async function save(key, value) {
		await SecureStore.setItemAsync(key, value);
	}

	async function getValueFor() {
		let result = await SecureStore.getItemAsync(tokenName);
		if (result) {
			console.log("🔐 Here's your value 🔐 \n" + result);
		} else {
			console.log('No values stored under that key.');
		}
	}

	return (
		<View style={styles.container}>
			<Text>App: {APP_NAME}</Text>
			<Text>token:{!auth.loading && auth.token}</Text>
			<TouchableOpacity style={styles.button} onPress={login}>
				<Text>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={getValueFor}>
				<Text>Get Token</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => dispatch(logoutAction())}>
				<Text>Delete Token</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.danger,
		height: 44,
		width: 300,
		marginVertical: 16,
		borderRadius: 30,
	},
});

export default Login;
