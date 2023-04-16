import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
	reducerPath: 'apiUser',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints: (builder) => ({
		getProfile: builder.query({
			query: () => '/api/user',
		}),
	}),
})
export const { useGetProfileQuery } = userApi
