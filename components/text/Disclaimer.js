import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const Disclaimer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: 280,
	},
	text: {
		fontSize: 12,
		textAlign: 'center',
		lineHeight: 18,
		color: colors.lighterDark,
	},
});

export default Disclaimer;
