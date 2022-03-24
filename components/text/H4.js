import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const H4 = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		lineHeight: 36,
		color: colors.black,
		fontWeight: '800',
	},
});

export default H4;
