import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const H5 = ({ children, style }) => {
	return <Text style={[styles.text, { ...style }]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		lineHeight: 27,
		color: colors.black,
		fontWeight: '700',
		textTransform: 'capitalize',
	},
});

export default H5;
