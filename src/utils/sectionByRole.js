import { HireEase } from '../components/hire_ease'
import { EmployeeManagment } from '../components/employee_managment'

const ACTION_DEFAULT = 0
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
		operation: ['Crear viaje', 'Gestionar ventas', 'Generar reportes'],
		roleId: ROLES.PACKAGE,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Crear viaje', 'Gestionar ventas', 'Generar reportes'],
		roleId: ROLES.PASSAGE,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Crear viaje', 'Gestionar ventas', 'Generar reportes'],
		roleId: ROLES.PACKAGE_AND_PASSAGE,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Generar reportes', 'Realizar declaraciones', 'Consultar declaraciones'],
		roleId: ROLES.ACCOUNTING,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Crear frecuencia', 'Gestionar frecuencia'],
		roleId: ROLES.SCHEDULES,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Generar reportes', 'Reportar empleados', 'Gestionar personal'],
		roleId: ROLES.INSPECTION,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: ROLES.HUMAN_SOURCES,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Consultar métricas', 'Crear copia de seguridad', 'opciones avanzadas'],
		roleId: ROLES.SYSTEMS,
		actionActive: ACTION_DEFAULT,
	},
]

export const COMPONENT_BY_ROLE = {
	[ROLES.HUMAN_SOURCES]: [
		<HireEase key={temp_key++} />,
		<EmployeeManagment key={temp_key++} />,
	],
}
