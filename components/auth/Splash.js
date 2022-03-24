import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { colors } from '../../styles';

const Splash = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={{ uri: '/assets/splash.png' }}
				resizeMode='cover'
				style={styles.image}></ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: '600',
		color: colors.white,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
});

export default Splash;
