import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeesAPI = createApi({
	reducerPath: 'employeesAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints: (builder) => ({
		getEmployees: builder.mutation({
			query: (date) => ({
				url: `api/employees`,
				method: 'POST',
				body: date,
			}),
		}),
	}),
})
export const { useGetEmployeesMutation } = employeesAPI
