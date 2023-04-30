import { HireEase } from '../components/hire_ease'
import { EmployeeManagment } from '../components/employee_managment'
import { SourceHumansDashboard } from '../components/source_humans_dashboard'

const DEFAULT_SECTION = 0
let temp_key = 0
export const ROLES = {
	PACKAGE: 0,
	PASSAGE: 1,
	PACKAGE_AND_PASSAGE: 2,
	ACCOUNTING: 3,
	SCHEDULES: 4,
	INSPECTION: 5,
	HUMAN_SOURCES: 6,
	SYSTEMS: 7,
}

export const sectionByRole = [
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					operationOn: DEFAULT_SECTION,
				},
			],
			sectionOn: 0,
		},
		roleId: 0,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					isActive: DEFAULT_SECTION,
				},
			],
		},
		roleId: 1,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					isActive: DEFAULT_SECTION,
				},
			],
		},
		roleId: 2,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					isActive: DEFAULT_SECTION,
				},
			],
		},
		roleId: 3,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					isActive: DEFAULT_SECTION,
				},
			],
		},
		roleId: 4,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					isActive: DEFAULT_SECTION,
				},
			],
		},
		roleId: 5,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					operationOn: 0,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					operationOn: 0,
				},
			],
			sectionOn: 0,
		},
		roleId: 6,
	},
	{
		dashboard: {
			sections: [
				{
					title: 'General',
					operations: ['Dashboard'],
					isActive: DEFAULT_SECTION,
				},
				{
					title: 'Personal',
					operations: ['Contratar', 'Gestionar'],
					operationOn: 0,
				},
			],
			sectionOn: 0,
		},
		roleId: 7,
	},
]

export const COMPONENT_BY_ROLE = {
	[ROLES.HUMAN_SOURCES]: {
		0: [<SourceHumansDashboard key={temp_key} />],
		1: [<HireEase key={temp_key++} />, <EmployeeManagment key={temp_key++} />],
	},
}

export function getSection(roleId, section, operation) {
	return COMPONENT_BY_ROLE[roleId][section][operation]
}
