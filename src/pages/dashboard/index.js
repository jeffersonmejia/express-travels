import { withAuth } from '../../components/hoc/withAuth'
import Navbar from '../../components/navbar'
import { Aside } from '../../components/aside'
import { useHook } from './useHook'
import { RoleDash } from '../../components/role_dash'

function Dashboard() {
	const { myClass } = useHook()
	return (
		<main className={myClass}>
			<Navbar />
			<RoleDash />
		</main>
	)
}

export default withAuth(Dashboard)
