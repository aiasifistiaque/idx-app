import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as lib from '../lib/constants';
import useAuth from './useAuth';

const useGetDecodedData = credential => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [error, setError] = useState();
	const { token } = useAuth();

	const getData = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};
		setLoading(true);
		try {
			const res = await axios.post(
				`${lib.api.backend}/decode`,
				{ credential: credential },
				config
			);
			setData(res.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setError(e);
			setLoading(false);
		}
	};
	useEffect(() => {
		token != null && credential != null && getData();
	}, [token, credential]);

	return { loading, data, error };
};

export default useGetDecodedData;
