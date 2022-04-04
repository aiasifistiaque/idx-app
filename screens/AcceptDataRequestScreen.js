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
import { Feather } from '@expo/vector-icons';

const AcceptDataRequestScreen = ({ route, navigation }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [approveLoading, setApproveLoading] = useState(false);
	const { id } = route.params;

	const approve = async () => {
		setApproveLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.put(
				`${lib.api.backend}/verify/request`,
				{
					status: 'approved',
					id: route.params.id,
				},
				config
			);

			setData(data);
			setApproveLoading(false);
		} catch (error) {
			console.log(error);
			setApproveLoading(false);
		}
	};

	const getCred = async () => {
		try {
			const { data } = await axios.get(
				`${lib.api.backend}/verify/request/${route.params.id}`
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
			<ScrollView style={{ paddingVetical: 16 }}>
				<Text style={styles.heading}>Data Request</Text>

				{!loading && (
					<View style={styles.top}>
						<Text style={styles.headingtwo}>
							{data.issuer} is requesting for the following information
						</Text>
						{data.attributes?.map((item, i) => (
							<View
								key={i}
								style={{
									paddingVertical: 16,
									paddingHorizontal: 32,
									backgroundColor: 'whitesmoke',
									marginVertical: 4,
									marginHorizontal: -24,
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}>
								<Text
									style={{ fontSize: 16, fontWeight: '600', color: '#333333' }}>
									{item}
								</Text>
								<Feather name='check-square' size={24} color='#39BE4F' />
							</View>
						))}
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
								<Text>Request Approved</Text>
								<TouchableOpacity
									style={styles.no}
									onPress={() => navigation.goBack()}>
									<Text style={{ fontWeight: '700' }}>Go Back</Text>
								</TouchableOpacity>
							</>
						) : (
							<>
								<TouchableOpacity
									style={styles.no}
									onPress={() => navigation.goBack()}>
									<Text style={{ fontWeight: '700' }}>No,Thanks!</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.approve}
									onPress={() => !approveLoading && approve()}>
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

				{/* <Text style={{ marginTop: 20 }}>
					data received {JSON.stringify(data)}
				</Text> */}
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
		marginVertical: 8,
		marginHorizontal: 24,
	},
	heading: {
		fontSize: 20,
		fontWeight: '700',
		marginHorizontal: 24,
		marginVertical: 16,
	},
	headingtwo: {
		fontSize: 18,
		fontWeight: '700',
		marginBottom: 16,
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

export default AcceptDataRequestScreen;
