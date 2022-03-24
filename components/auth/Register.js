import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import RedButton from '../buttons/RedButton';
import Input from '../inputs/Input';
import AuthContainer from './AuthContainer';
import { P } from '../text';
import axios from 'axios';
import * as lib from '../../lib/constants';
import * as SecureStore from 'expo-secure-store';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const auth = useAuth(loading);

	const registerClick = async () => {
		setLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.post(
				`${lib.api.backend}/auth/register`,
				{
					name,
					email,
					password,
					role: 'user',
				},
				config
			);

			console.log(data);
			await SecureStore.setItemAsync(lib.tokenName, data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoading(false);
		}
	};

	return (
		<AuthContainer redirect='Login'>
			<Input
				placeholder='Enter your name'
				onChangeText={e => setName(e)}
				value={name}
			/>
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
			<Input
				placeholder='Confirm Password'
				onChangeText={e => setConfirm(e)}
				value={confirm}
				secureTextEntry
			/>
			{error && <P error>Error registering new user</P>}
			<RedButton onPress={registerClick} margin={error ? 8 : 16}>
				{loading ? 'loading' : 'Sign Up'}
			</RedButton>
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

export default Register;
