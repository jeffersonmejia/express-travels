import { createSlice } from '@reduxjs/toolkit'

const ACTION_DEFAULT = 0
const PACKAGE = 0
const PASSAGE = 1
const PACKAGE_AND_PASSAGE = 2
const ACCOUNTING = 3
const SCHEDULES = 4
const INSPECTION = 5
const HUMAN_SOURCES = 6
const SYSTEMS = 7

const initialState = [
	{
		operation: ['Crear viaje', 'Gestionar ventas', 'Generar reportes'],
		roleId: PACKAGE,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Crear viaje', 'Gestionar ventas', 'Generar reportes'],
		roleId: PASSAGE,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Crear viaje', 'Gestionar ventas', 'Generar reportes'],
		roleId: PACKAGE_AND_PASSAGE,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Generar reportes', 'Realizar declaraciones', 'Consultar declaraciones'],
		roleId: ACCOUNTING,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Crear frecuencia', 'Gestionar frecuencia'],
		roleId: SCHEDULES,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Generar reportes', 'Reportar empleados', 'Gestionar personal'],
		roleId: INSPECTION,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: HUMAN_SOURCES,
		actionActive: ACTION_DEFAULT,
	},
	{
		operation: ['Consultar métricas', 'Crear copia de seguridad', 'opciones avanzadas'],
		roleId: SYSTEMS,
		actionActive: ACTION_DEFAULT,
	},
]

export const sectionSlice = createSlice({
	name: 'sectionSlice',
	initialState,
	reducers: {
		toggleSection: (state, action) => {
			const { roleId, actionActive } = action.payload
			state[roleId].actionActive = actionActive
		},
	},
})

export const { toggleSection } = sectionSlice.actions
export default sectionSlice.reducer
