import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as lib from '../lib/constants';
import * as SecureStore from 'expo-secure-store';

const ProfileScreen = ({ navigation }) => {
	const logout = async () => {
		try {
			await SecureStore.deleteItemAsync(lib.tokenName);
			navigation.navigate('Auth');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={logout}>
				<Text style={styles.text}>logout</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 24,
		justifyContent: 'flex-end',
	},

	text: {
		color: 'white',
		fontSize: 14,
		fontWeight: '600',
	},
	button: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00CBFF',
		paddingVertical: 8,
		paddingHorizontal: 24,
		width: '100%',
		borderRadius: 2,
	},
});

export default ProfileScreen;
