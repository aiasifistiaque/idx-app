import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as lib from '../lib/constants';

const ApproveScreen = ({ route, navigation }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [approveLoading, setApproveLoading] = useState(false);
	const { id } = route.params;

	const approve = async option => {
		setApproveLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.put(
				`${lib.api.backend}/issue/${id}`,
				{
					status: option,
					notification: route.params.notification,
				},
				config
			);

			console.log('button Pressed');

			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const getCred = async () => {
		try {
			const { data } = await axios.get(
				`${lib.api.backend}/issue/${route.params.id}`
			);

			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(true);
		getCred();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView style={{ padding: 16 }}>
				<Text style={styles.heading}>Approve Credential</Text>

				{/* <Text>{route.params.id}</Text> */}
				{!loading && (
					<View style={styles.top}>
						<Text style={styles.heading}>
							{data.issuer.name} wants to issue your {data.credentialType}
						</Text>
						<Text style={{ marginTop: 16 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</Text>
					</View>
				)}
				<Text style={{ marginHorizontal: 24, textAlign: 'center' }}>
					By accepting the credentials you agree with the service provider{`'`}s{' '}
					terms {`&`} conditions
				</Text>
				{!loading && (
					<View style={styles.buttons}>
						{data?.status == 'approved' ? (
							<>
								<Text>Request Approved Successfully!</Text>
								<TouchableOpacity
									style={styles.no}
									onPress={() => navigation.goBack()}>
									<Text style={{ fontWeight: '700' }}>Go Back</Text>
								</TouchableOpacity>
							</>
						) : data?.status == 'rejected' ? (
							<>
								<Text>Request has been rejected!</Text>
								<TouchableOpacity
									style={styles.no}
									onPress={() => navigation.goBack()}>
									<Text style={{ fontWeight: '700' }}>Go Back</Text>
								</TouchableOpacity>
							</>
						) : data?.status == 'denied' ? (
							<>
								<Text>Request verification failed!</Text>
								<TouchableOpacity
									style={styles.no}
									onPress={() => navigation.goBack()}>
									<Text style={{ fontWeight: '700' }}>Go Back</Text>
								</TouchableOpacity>
							</>
						) : (
							<>
								{!loading && (
									<TouchableOpacity
										style={styles.no}
										onPress={() => !approveLoading && approve('rejected')}>
										<Text style={{ fontWeight: '700' }}>No,Thanks!</Text>
									</TouchableOpacity>
								)}
								<TouchableOpacity
									style={styles.approve}
									onPress={() => !approveLoading && approve('approved')}>
									{approveLoading ? (
										<ActivityIndicator size='small' color='#fff' />
									) : (
										<Text style={{ color: 'white', fontWeight: '700' }}>
											Approve
										</Text>
									)}
								</TouchableOpacity>
							</>
						)}
					</View>
				)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		//paddingVertical: 24,
	},
	top: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.1)',
		marginVertical: 32,
		padding: 16,
		paddingVertical: 64,
	},
	heading: {
		fontSize: 18,
		fontWeight: '700',
		marginBottom: 4,
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginVertical: 32,
		alignItems: 'center',
	},
	no: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	approve: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		paddingHorizontal: 24,
		backgroundColor: '#00CBFF',
		borderRadius: 4,
	},
});

export default ApproveScreen;
