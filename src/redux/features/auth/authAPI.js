import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints: (builder) => ({
		signin: builder.mutation({
			query: (auth) => ({
				url: 'api/auth/signin',
				method: 'POST',
				body: auth,
			}),
		}),
		signout: builder.mutation({
			query: () => ({
				url: 'api/auth/signout',
				method: 'POST',
			}),
		}),
	}),
})
export const { useSigninMutation, useSignoutMutation } = authAPI
