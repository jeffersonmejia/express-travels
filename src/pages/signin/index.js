import { useHook } from './useHook'
import { Footer } from '../../components/footer'
export default function Signin() {
	const {
		handleSubmit,
		myClass,
		error,
		errorClass,
		material,
		password_style,
		handleClick,
		password,
	} = useHook()

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
					<fieldset className={password_style}>
						<input
							type={password?.show ? 'text' : 'password'}
							name="password"
							placeholder="Ingresa tu contraseña"
							maxLength="32"
						/>
						<span className={material} onClick={handleClick}>
							{password?.show ? 'visibility_off' : 'visibility'}
						</span>
					</fieldset>
					<button>Iniciar sesion</button>
					{error && <small className={errorClass}>{error}</small>}
				</fieldset>
			</form>
			<Footer />
		</main>
	)
}
