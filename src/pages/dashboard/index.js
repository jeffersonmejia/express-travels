import { withAuth } from '../../components/hoc/withAuth'
import { Navbar } from '../../components/navbar'
import { Aside } from '../../components/aside'
import { useHook } from './useHook'

function Dashboard() {
	const { isAside } = useHook()
	return (
		<main>
			<Navbar />
			{isAside && <Aside />}
			<h1>Bienvenido al Panel de control</h1>
		</main>
	)
}

export default withAuth(Dashboard)
