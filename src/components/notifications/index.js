import { useHook } from './useHook.js'

export function Notifications() {
	const { myClass } = useHook()

	return <div className={myClass}>Hello world!</div>
}
