import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../styles';

const H6 = ({ children, style, size, weight, color }) => {
	return (
		<Text
			style={{
				fontSize: size || 16,
				lineHeight: 24,
				textTransform: 'capitalize',
				color: color || colors.black,
				fontWeight: weight || '700',
				...style,
			}}>
			{children}
		</Text>
	);
};

export default H6;
