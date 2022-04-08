import {
	FontAwesome,
	SimpleLineIcons,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import WalletItemContainer from './WalletItemContainer';
import CredItem from './CredItem';

const dimentions = { color: '#56CCF2', size: 28 };

const data = [
	{
		component: (
			<SimpleLineIcons
				name='briefcase'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Jobs',
		to: '',
	},
	{
		component: (
			<FontAwesome
				name='dollar'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Loans',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='shield-checkmark-outline'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Insurance',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='login'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Sign Up & Login',
		to: '',
	},
	{
		component: (
			<MaterialCommunityIcons
				name='transit-connection-variant'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'P2P',
		to: '',
	},
	{
		component: (
			<FontAwesome
				name='hand-grab-o'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'E-Voting',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='document-text-outline'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Pay Bills',
		to: '',
	},
];

const MyServices = () => {
	return (
		<WalletItemContainer title='My Services'>
			{data.map((item, i) => (
				<CredItem key={i} title={item.title}>
					{item.component}
				</CredItem>
			))}
		</WalletItemContainer>
	);
};

export default MyServices;
