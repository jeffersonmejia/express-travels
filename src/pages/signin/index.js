import { useHook } from './useHook'
export default function Signin() {
	const { handleSubmit, myClass } = useHook()
	return (
		<main className={myClass}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>
						<h1>Ingreso</h1>
						<small>Solo personal autorizado</small>
					</legend>
					<input type="text" name="username" placeholder="Ingresa tu usuario" />
					<input type="text" name="password" placeholder="Ingresa tu contraseña" />
					<button>Iniciar sesion</button>
				</fieldset>
			</form>
		</main>
	)
}
