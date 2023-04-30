import { useHook } from './useHook.js'

export function SourceHumansDashboard() {
	const { myClass } = useHook()

	return (
		<main className={myClass}>
			<h1>Dashboard</h1>
			<section>
				<header>
					<h2>Recursos humanos</h2>
				</header>
				<article>
					<h5>Contratados</h5>
					<small>40</small>
				</article>
				<article>
					<h5>Encomienda</h5>
					<small>40</small>
				</article>
				<article>
					<h5>Boletería</h5>
					<small>40</small>
				</article>
				<article>
					<h5>Contabilidad</h5>
					<small>40</small>
				</article>
				<article>
					<h5>Sistemas</h5>
					<small>40</small>
				</article>
			</section>
			<section>
				<header>
					<h2>Ventas - Abril</h2>
				</header>
				<article>
					<h5>Encomienda</h5>
					<small>$1400.00</small>
				</article>
				<article>
					<h5>Pasaje</h5>
					<small>$14000.00</small>
				</article>
			</section>
		</main>
	)
}
