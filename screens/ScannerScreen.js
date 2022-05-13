import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useGetVerificationServiceQuery } from '../store/services/productService';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import * as lib from '../lib/constants';

export default function ScannerScreens({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	const [qr, setQr] = useState('');
	const { data, error, isLoading } = useGetVerificationServiceQuery(qr);
	const [ip, setIp] = useState('');

	const auth = useAuth();

	const approve = async (ip, verification) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: auth.token,
				},
			};

			const { data } = await axios.post(
				`${lib.api.backend}/qr`,
				{
					verification,
					ip,
				},
				config
			);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		try {
			(async () => {
				const { status } = await BarCodeScanner.requestPermissionsAsync();
				setHasPermission(status === 'granted');
			})();
		} catch {
			console.log(error);
		}
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		let parsed;
		try {
			parsed = JSON.parse(data);
		} catch {
			return;
		}
		if (parsed.app !== 'IDX') {
			return;
		}

		setQr(parsed.code);
		setIp(parsed.ip);
		setScanned(true);
		//alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};

	useEffect(() => {
		if (!isLoading && !error && data && scanned) {
			//alert(`${data.issuer.name} is requesting your web credentials`);
			Alert.alert(
				'Login Request',
				`${data.issuer.name} is requesting your web credentials`,
				[
					{
						text: 'Cancel',
						onPress: () => navigation.goBack(),
						style: 'cancel',
					},
					{ text: 'Approve', onPress: () => approve(ip, qr) },
				]
			);
		}
	}, [isLoading, scanned]);

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={styles.scanner}
			/>
			{scanned && (
				<Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

		//backgroundColor: 'black',
	},
	scanner: {
		height: 400,
		width: 400,
		borderRadius: 4,
	},
});
