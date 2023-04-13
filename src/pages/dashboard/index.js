import { withAuth } from '../../components/hoc/withAuth'
import { Navbar } from '../../components/navbar'

function Dashboard() {
	return (
		<main>
			<Navbar />
			<h1>Bienvenido al Panel de control</h1>
		</main>
	)
}

export default withAuth(Dashboard)
