import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import { colors } from '../../styles';
import RedButton from '../buttons/RedButton';
import Input from '../inputs/Input';
import TextButton from '../buttons/TextButton';
import AuthContainer from './AuthContainer';
import { P } from '../text';
import * as lib from '../../lib/constants';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState();
	const auth = useAuth(loading);

	const loginClick = async () => {
		setLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.post(
				`${lib.api.backend}/auth/login`,
				{
					email,
					password,
				},
				config
			);

			console.log(data);
			setData(data);
			await SecureStore.setItemAsync(lib.tokenName, data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoading(false);
		}
	};

	return (
		<AuthContainer redirect='Register'>
			<Input
				placeholder='Enter your email'
				onChangeText={e => setEmail(e)}
				value={email}
			/>
			<Input
				placeholder='Enter your password'
				onChangeText={e => setPassword(e)}
				value={password}
				secureTextEntry
			/>

			{error && <P error>{JSON.stringify(error.message)}</P>}
			{!email || !password ? (
				<RedButton margin={16}>{loading ? 'loading...' : 'Login'}</RedButton>
			) : (
				<RedButton onPress={loading ? null : loginClick} margin={16}>
					{loading ? <ActivityIndicator color='white' /> : 'Login'}
				</RedButton>
			)}
		</AuthContainer>
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
	containerTwo: {
		display: 'flex',
		flexDirection: 'row',
		marginVertical: 32,
	},
});

export default Login;
