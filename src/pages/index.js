import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useHook } from './indexHook'
export default function Home() {
	const title = 'Express travels | Home'
	const content = 'The best travel option'
	useHook()

	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={content} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<figure className="transform_y">
					<Image src="/travelers.svg" width="200" height="200" alt="home" />
					<figcaption>
						<h1>{title}</h1>
						<Link href="/signin">
							<button>Iniciar sesión</button>
						</Link>
					</figcaption>
				</figure>
			</main>
		</div>
	)
}
