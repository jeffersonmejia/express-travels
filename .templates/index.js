import { useHook } from './useHook'

export function Component() {
	const { myClass } = useHook()
	return <div></div>
}
