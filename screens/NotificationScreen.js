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
import moment from 'moment';

const NotificationScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { token } = useAuth();
	const [refreshing, setRefreshing] = useState(false);

	const getAllPendingFunctions = async e => {
		setLoading(true);
		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};
		try {
			const { data } = await axios.get(
				`${lib.api.backend}/notifications`,
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
	}, [token, refreshing]);

	const Date = ({ children }) => {
		return (
			<Text
				style={{
					marginTop: 8,
					fontWeight: '500',
					fontSize: 12,
					color: 'rgba(0,0,0,.4)',
				}}>
				{moment(children).calendar()}
			</Text>
		);
	};

	const Notification = ({ children, status }) => {
		return (
			<Text
				style={{
					fontWeight: status == 'pending' ? '800' : '500',
					fontSize: 14,
					color: 'rgba(0,0,0,.9)',
				}}>
				{children}
			</Text>
		);
	};

	const Item = ({ user, date, target, status, notification }) => {
		return (
			<TouchableOpacity
				style={[
					{ backgroundColor: status == 'pending' ? 'whitesmoke' : 'white' },
					styles.item,
				]}
				onPress={() =>
					navigation.navigate('Approve', { id: target, notification })
				}>
				<Notification status={status}>
					{user.name} wants to issue you a new credential
				</Notification>
				<Date>{date}</Date>
			</TouchableOpacity>
		);
	};

	const ApproveItem = ({ user, date, target, status, notification }) => {
		return (
			<TouchableOpacity
				style={[
					{ backgroundColor: status == 'pending' ? 'whitesmoke' : 'white' },
					styles.item,
				]}
				onPress={() =>
					navigation.navigate('DataRequest', { id: target, notification })
				}>
				<Notification status={status}>
					{user.name} is requesting for your information
				</Notification>
				<Date>{date}</Date>
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
					data?.map((item, i) =>
						item.type == 'assign' ? (
							<Item
								key={i}
								user={item.issuer}
								target={item.target}
								date={item.createdAt}
								status={item.status}
								notification={item._id}
							/>
						) : (
							<ApproveItem
								key={i}
								user={item.issuer}
								target={item.target}
								date={item.createdAt}
								status={item.status}
								notification={item._id}
							/>
						)
					)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	heading: {
		fontSize: 18,
		fontWeight: '700',
		marginBottom: 4,
		paddingHorizontal: 24,
		marginTop: 24,
		marginBottom: 12,
	},
	item: {
		padding: 24,
		paddingVertical: 32,
		marginVertical: 2,
	},
});

export default NotificationScreen;
