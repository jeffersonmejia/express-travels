import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const signinSlice = createApi({
	reducerPath: 'apiSignin',
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
	}),
})
export const { useSigninMutation } = signinSlice
