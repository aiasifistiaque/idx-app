import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const RedButton = ({
	children,
	onPress,
	bg,
	width,
	color,
	margin,
	disabled,
	loading,
}) => {
	if (loading)
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor: 'black',
						width: width || 300,
						marginVertical: margin || 0,
					},
				]}>
				<ActivityIndicator size='small' color='#000' />
			</View>
		);
	if (disabled)
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor: 'black',
						width: width || 300,
						marginVertical: margin || 0,
					},
				]}>
				<Text
					style={{
						color: 'black',
						fontSize: 14,
						fontWeight: '600',
					}}>
					{children}
				</Text>
			</View>
		);
	return (
		<TouchableOpacity
			style={[
				styles.container,
				{
					backgroundColor: bg || 'dodgerblue',
					width: width || 300,
					marginVertical: margin || 0,
				},
			]}
			onPress={onPress}>
			<Text
				style={{
					color: color || '#fff',
					fontSize: 14,
					fontWeight: '600',
				}}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 44,
		borderRadius: 30,
	},
});

export default RedButton;
