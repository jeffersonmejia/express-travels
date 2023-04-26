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
		deleteEmployee: builder.mutation({
			query: (id) => ({
				url: `api/employees?id=${id}`,
				method: 'DELETE',
			}),
		}),
	}),
})
export const { useGetEmployeesMutation, useDeleteEmployeeMutation } = employeesAPI
