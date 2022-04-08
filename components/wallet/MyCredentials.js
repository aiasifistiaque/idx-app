import {
	FontAwesome,
	Feather,
	SimpleLineIcons,
	MaterialCommunityIcons,
	Ionicons,
} from '@expo/vector-icons';
import React from 'react';
import WalletItemContainer from './WalletItemContainer';
import CredItem from './CredItem';

const dimentions = { color: '#56CCF2', size: 28 };

const data = [
	{
		component: (
			<FontAwesome
				name='user-o'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Personal',
		to: '',
	},
	{
		component: (
			<Feather name='key' size={dimentions.size} color={dimentions.color} />
		),
		title: 'Assets',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='graduation'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Educaction',
		to: '',
	},
	{
		component: (
			<Feather
				name='credit-card'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'License',
		to: '',
	},
	{
		component: (
			<MaterialCommunityIcons
				name='hospital'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Healthcare',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='cart-outline'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Bills',
		to: '',
	},
	{
		component: (
			<Feather name='award' size={dimentions.size} color={dimentions.color} />
		),
		title: 'Certificates',
		to: '',
	},
	{
		component: (
			<MaterialCommunityIcons
				name='web'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Web Credentials',
		to: '',
	},
];

const MyCredentials = () => {
	return (
		<WalletItemContainer title='My Credentials'>
			{data.map((item, i) => (
				<CredItem key={i} title={item.title}>
					{item.component}
				</CredItem>
			))}
		</WalletItemContainer>
	);
};

export default MyCredentials;
