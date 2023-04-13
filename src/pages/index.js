import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	const title = 'Express travels | Home'
	const content = 'The best travel option'
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={content} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>{title}</h1>
				<Link href="/signin">
					<button>Iniciar sesión</button>
				</Link>
			</main>
		</div>
	)
}
