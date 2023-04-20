import { useSelector } from 'react-redux'
import { COMPONENT_BY_ROLE } from '../../utils/sectionByRole'

export function useHook() {
	const sections = useSelector((state) => state.sections)
	const { userId } = useSelector((state) => state.user)
	if (!userId) return { component: null }

	const authorized = COMPONENT_BY_ROLE[sections.roleId]
	const component = authorized[sections.actionActive]
	return { component }
}
