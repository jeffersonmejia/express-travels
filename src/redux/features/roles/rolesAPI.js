import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rolesAPI = createApi({
	reducerPath: 'rolesAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints: (builder) => ({
		getRoles: builder.query({
			query: () => '/api/roles',
		}),
	}),
})
export const { useGetRolesQuery } = rolesAPI
