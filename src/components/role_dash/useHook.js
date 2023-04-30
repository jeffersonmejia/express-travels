import { useSelector } from 'react-redux'
import { getSection } from '../../utils/sectionByRole'

export function useHook() {
	const actions = useSelector((state) => state.sections)
	const userId = useSelector((state) => state.user.userId)
	if (!userId) return { component: null }

	const { sectionOn } = actions.dashboard
	const { operationOn } = actions.dashboard.sections[sectionOn]
	const roleId = actions.roleId
	const component = getSection(roleId, sectionOn, operationOn)
	return { component }
}
