import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const H6 = ({ children, style }) => {
	return <Text style={[styles.text, { ...style }]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		lineHeight: 24,
		color: colors.black,
		fontWeight: '700',
		textTransform: 'capitalize',
	},
});

export default H6;
