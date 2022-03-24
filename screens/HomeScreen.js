import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as lib from '../lib/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
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
				`${lib.api.backend}/issue/user?status=approved`,
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
	}, [token]);

	useEffect(() => {
		setLoading(true);
		getAllPendingFunctions();
	}, []);

	const Item = ({ user, date, type }) => {
		return (
			<TouchableOpacity style={styles.item}>
				<Text>
					{type} by {user}
				</Text>
			</TouchableOpacity>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>My Credentials</Text>

			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				{!loading &&
					data?.map((item, i) => (
						<Item key={i} user={item.issuer} type={item.credentialType} />
					))}
			</ScrollView>
		</SafeAreaView>
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
		backgroundColor: 'whitesmoke',
		borderRadius: 10,
		padding: 24,
		marginVertical: 4,
	},
});

export default HomeScreen;
