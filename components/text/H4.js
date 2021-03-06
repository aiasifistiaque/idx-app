import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../styles';

const H4 = ({ children, style, color, weight, size }) => {
	return (
		<Text
			style={{
				fontSize: size || 24,
				lineHeight: 36,
				color: color || colors.black,
				fontWeight: weight || '800',
				...style,
			}}>
			{children}
		</Text>
	);
};

export default H4;
