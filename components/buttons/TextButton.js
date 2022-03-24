import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TextButton = ({ children, onPress, color }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={[styles.text, { color: color || 'dodgerblue' }]}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'dodgerblue',
		fontSize: 16,
		lineHeight: 24,
		marginHorizontal: 4,
	},
});

export default TextButton;
