import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as lib from '../lib/constants';
import { H5, P } from '../components/text';
import H6 from '../components/text/H6';
import useGetDecodedData from '../hooks/useGetDecodedData';

const ViewCredentialScreen = ({ route }) => {
	const { credential } = route.params;
	const { loading, error, data } = useGetDecodedData(credential);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scroll}>
				<View style={styles.top}>
					<View style={styles.logo}>
						<Ionicons name='logo-amplify' size={48} color='#777' />
					</View>
					<View>
						<H5>{credential?.credentialType && credential.credentialType}</H5>
						<P>{credential?.issuer?.name && credential.issuer.name}</P>
					</View>
				</View>
				<View style={styles.main}>
					<H5>Details</H5>
					<P>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</P>
					{!loading && (
						<View style={styles.items}>
							{Object.keys(data).map((item, i) => (
								<Item key={i} title={item}>
									{data[item]}
								</Item>
							))}
						</View>
					)}
				</View>
				<Button />
				<View style={styles.main}>
					<View>
						<P size={14} weight='500' color={lib.colors.textLight}>
							Issuer
						</P>
						<H6>{credential?.issuer?.name && credential.issuer.name}</H6>
					</View>
					<View style={{ marginTop: 8 }}>
						<P size={14} weight='500' color={lib.colors.textLight}>
							Wallet Address
						</P>
						<H6>{credential?.issuer?.wallet && credential.issuer.wallet}</H6>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const Item = ({ title, children }) => {
	return (
		<View style={styles.item}>
			<View style={{ flex: 1 }}>
				<H6>{title}</H6>
			</View>
			<View style={{ flex: 1 }}>
				<P>{children}</P>
			</View>
		</View>
	);
};

const Button = () => {
	return (
		<TouchableOpacity style={styles.button}>
			<P color='white' size={16} weight='700'>
				View as PDF
			</P>
		</TouchableOpacity>
	);
};

const container = {
	borderRadius: 10,
	borderWidth: 1,
	borderColor: 'rgba(0,0,0,.1)',
	marginVertical: 8,
	paddingHorizontal: 8,
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: 'white',
	},
	scroll: { paddingHorizontal: 16 },
	top: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		...container,
	},
	main: {
		...container,
		display: 'flex',
		paddingHorizontal: 16,
		padding: 16,
	},
	items: {
		display: 'flex',
		marginTop: 16,
	},
	item: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 4,
	},
	button: {
		backgroundColor: lib.colors.light,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 42,
		marginVertical: 8,
		borderRadius: 10,
		width: 144,
		alignSelf: 'flex-end',
	},
	logo: {
		padding: 8,
		marginRight: 8,
	},
});

export default ViewCredentialScreen;
