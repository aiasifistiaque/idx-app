import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { tokenName } from '../lib/constants';
import { useNavigation } from '@react-navigation/native';

const useAuth = load => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [authToken, setAuthToken] = useState();

	useEffect(async () => {
		setLoading(true);
		const result = await SecureStore.getItemAsync(tokenName);
		if (result) {
			setAuthToken(result);
			setIsLoggedIn(true);
			setLoading(false);
			navigation.navigate('MainTab');
		} else {
			setAuthToken(null);
			setIsLoggedIn(false);
			setLoading(false);
		}
	}, [load]);

	return { loading, isLoggedIn, token: authToken };
};

export default useAuth;
