import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import soon from '../assets/soon.png';

const BlankScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				source={soon}
				style={{
					width: 305,
					height: 159,
					resizeMode: 'contain',
					marginVertical: 64,
				}}
			/>
			<Text style={styles.text}>This Feature is under development.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 16,
	},
	text: {
		fontWeight: '800',
		fontSize: 24,
		textAlign: 'center',
		letterSpacing: 2,
		textTransform: 'capitalize',
		lineHeight: 32,
		color: 'rgba(0,0,0,.2)',
	},
});

export default BlankScreen;
