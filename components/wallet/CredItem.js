import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CredItem = ({ children, title, to }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={styles.icon}
			onPress={() => navigation.navigate('Credentials', { category: title })}>
			<View style={styles.iconImage}>{children}</View>
			<Text style={styles.iconText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '22%',
		marginVertical: 8,
	},
	iconImage: {
		marginVertical: 8,
	},
	iconText: {
		textAlign: 'center',
		color: '#777777',
		fontWeight: '500',
	},
});

export default CredItem;
