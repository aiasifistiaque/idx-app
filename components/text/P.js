import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const P = ({
	children,
	size,
	weight,
	color,
	error,
	mv,
	center,
	success,
	style,
}) => {
	const fontSize = size || 16;
	const fontColor = color || colors.black;
	const fontWeight = weight || '400';
	if (success)
		return (
			<View
				style={{
					display: 'flex',
					padding: 16,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(0,128,128,.15)',
					marginVertical: 16,
					borderRadius: 4,
					...style,
				}}>
				<Text
					style={{
						fontSize: size || 14,
						lineHeight: size ? size * 1.5 : 21,
						color: 'teal',
						fontWeight: weight || '600',
					}}>
					{children}
				</Text>
			</View>
		);
	if (error)
		return (
			<View
				style={{
					display: 'flex',
					padding: 16,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: colors.dangerLight,
					marginVertical: 16,
					borderRadius: 4,
					...style,
				}}>
				<Text
					style={{
						fontSize: size || 14,
						lineHeight: size ? size * 1.5 : 21,
						color: colors.danger,
						fontWeight: weight || '600',
					}}>
					{children}
				</Text>
			</View>
		);
	return (
		<View style={[styles.container, { ...style }]}>
			<Text
				style={{
					fontSize: fontSize,
					lineHeight: fontSize * 1.5,
					color: fontColor,
					fontWeight: fontWeight,
					textAlign: center ? 'center' : 'left',
					marginVertical: mv || 0,
					...style,
				}}>
				{children}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
	},
});

export default P;
