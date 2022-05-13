import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';

// const localUrl = 'http://localhost:5000/api';
// const backend = 'https://pos-backend-1234.herokuapp.com/api';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${lib.api.backend}/`,
		// prepareHeaders: (headers, { getState }) => {
		// 	const token = getState().auth.token;
		// 	if (token) {
		// 		headers.set('authorization', token);
		// 	}
		// 	return headers;
		// },
	}),
	tagTypes: [],

	endpoints: builder => ({
		getVerificationService: builder.query({
			query: id => `/verify/${id}`,
			providesTags: [],
		}),

		// addBrand: builder.mutation({
		// 	query(body) {
		// 		return {
		// 			url: `/brands`,
		// 			method: 'POST',
		// 			body,
		// 		};
		// 	},
		// 	invalidatesTags: ['Brands', 'Dashboard'],
		// }),
	}),
});

export const { useGetVerificationServiceQuery } = productsApi;
