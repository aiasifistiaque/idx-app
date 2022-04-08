import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { H4 } from '../text';

const WalletItemContainer = ({ children, title }) => {
	return (
		<View>
			<H4>{title}</H4>
			<View style={styles.icons}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	icons: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginVertical: 16,
	},
});

export default WalletItemContainer;
