import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const H5 = ({ children, style, size, weight, color }) => {
	return (
		<Text
			style={{
				fontSize: size || 20,
				lineHeight: 27,
				textTransform: 'capitalize',
				color: color || colors.black,
				fontWeight: weight || '700',
				...style,
			}}>
			{children}
		</Text>
	);
};

export default H5;
