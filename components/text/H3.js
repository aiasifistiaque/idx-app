import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../styles';

const H3 = ({ children, style, color, weight, size, lineHeight }) => {
	return (
		<Text
			style={{
				fontSize: size || 28,
				lineHeight: lineHeight ? lineHeight : size ? size * 1.5 : 42,
				color: color || colors.black,
				fontWeight: weight || '800',
				...style,
			}}>
			{children}
		</Text>
	);
};

export default H3;
