import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import MyCredentials from '../components/wallet/MyCredentials';
import MyServices from '../components/wallet/MyServices';
import Hero from '../components/wallet/Hero';
import WalletOptions from '../components/wallet/WalletOptions';
import MyOffers from '../components/wallet/MyOffers';
import MyIssuers from '../components/wallet/MyIssuers';
import MyDetails from '../components/wallet/MyDetails';

const WalletScreen = () => {
	return (
		<SafeAreaView style={styles.main}>
			<ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
				<MyDetails />
				<Hero />
				<WalletOptions />
				<MyOffers />
				<View>
					<MyCredentials />
					<MyServices />
				</View>
				<MyIssuers />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	main: { backgroundColor: '#fff', flex: 1 },
	page: {
		marginHorizontal: 16,
		backgroundColor: '#fff',
		flex: 1,
	},
});

export default WalletScreen;
