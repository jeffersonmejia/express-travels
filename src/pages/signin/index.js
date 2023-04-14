import { useHook } from './useHook'
export default function Signin() {
	const { handleSubmit, myClass, error, errorClass } = useHook()
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
					{error && <small className={errorClass}>{error}</small>}
				</fieldset>
			</form>
		</main>
	)
}
