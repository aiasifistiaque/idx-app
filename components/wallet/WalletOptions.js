import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {
	SimpleLineIcons,
	MaterialCommunityIcons,
	Ionicons,
} from '@expo/vector-icons';

const optioDimention = { color: 'black', size: 28 };
const options = [
	{
		component: (
			<MaterialCommunityIcons
				name='arrow-collapse-down'
				size={optioDimention.size}
				color={'#56CCF2'}
			/>
		),
		title: 'Receive',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='share-alt'
				size={optioDimention.size}
				color={'#AB7FFB'}
			/>
		),
		title: 'Share',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='copy-outline'
				size={optioDimention.size}
				color={'#878787'}
			/>
		),
		title: 'Copy',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='options'
				size={optioDimention.size}
				color={'#878787'}
			/>
		),
		title: 'More',
		to: '',
	},
];

const WalletOptions = () => {
	return (
		<View style={styles.options}>
			{options.map((item, i) => (
				<View key={i} style={styles.optionsIconContainer}>
					<TouchableOpacity style={styles.optionsImage}>
						{item.component}
					</TouchableOpacity>
					<Text style={styles.iconText}>{item.title}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	options: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginVertical: 24,
	},
	optionsIconContainer: {
		display: 'flex',
	},
	optionsImage: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 62,
		width: 62,
		borderRadius: 20,
		marginVertical: 8,
		backgroundColor: 'whitesmoke',
	},
	iconText: {
		textAlign: 'center',
		color: '#777777',
		fontWeight: '500',
	},
});

export default WalletOptions;
