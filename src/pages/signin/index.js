import { useHook } from './useHook'
export default function Signin() {
	const { handleSubmit, myClass, error, errorClass } = useHook()
	return (
		<main className={myClass}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>
						<h1>Ingreso</h1>
						<h4>Solo personal autorizado</h4>
					</legend>
					<input
						type="text"
						name="username"
						placeholder="Ingresa tu usuario"
						maxLength="16"
					/>
					<input
						type="password"
						name="password"
						placeholder="Ingresa tu contraseña"
						maxLength="32"
					/>
					<button>Iniciar sesion</button>
					{error && <small className={errorClass}>{error}</small>}
				</fieldset>
			</form>
		</main>
	)
}
