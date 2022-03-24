import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	RefreshControl,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as lib from '../lib/constants';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const NotificationScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { token } = useAuth();
	const [refreshing, setRefreshing] = useState(false);

	const getAllPendingFunctions = async e => {
		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};
		try {
			const { data } = await axios.get(
				`${lib.api.backend}/issue/user?status=pending`,
				config
			);
			setData(data);
			setLoading(false);
			setRefreshing(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setRefreshing(false);
		}
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getAllPendingFunctions();
	}, []);

	useEffect(() => {
		setLoading(true);
		getAllPendingFunctions();
	}, [token]);

	const Item = ({ user, date, type, id }) => {
		return (
			<TouchableOpacity
				style={styles.item}
				onPress={() => navigation.navigate('Approve', { id })}>
				<Text>
					{user} wants to issue your {type}
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Pending Requests</Text>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				{!loading &&
					data?.map((item, i) => (
						<Item
							key={i}
							user={item.issuer}
							type={item.credentialType}
							id={item._id}
						/>
					))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 24,
	},
	heading: {
		fontSize: 18,
		fontWeight: '700',
		marginBottom: 4,
	},
	item: {
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.08)',
		borderRadius: 10,
		padding: 24,
		marginVertical: 4,
	},
});

export default NotificationScreen;
