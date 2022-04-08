import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as lib from '../lib/constants';
import useAuth from './useAuth';

const useGetNotifications = ({ refreshing, setRefresing }) => {
	const [loading, setLoading] = useState();
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const auth = useAuth();

	const getData = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(auth.token),
			},
		};
		setLoading(true);
		try {
			const res = await axios.get(`${lib.api.backend}/notifications`, config);
			setData(res.data);
			setLoading(false);
			setRefresing(false);
			console.log(res.datas);
		} catch (e) {
			console.log(e);
			setError(e);
			setLoading(false);
			setRefresing(false);
		}
	};
	useEffect(() => {
		!auth.loading && getData();
	}, [auth.loading, refreshing]);

	return { loading, data, error };
};

export default useGetNotifications;
