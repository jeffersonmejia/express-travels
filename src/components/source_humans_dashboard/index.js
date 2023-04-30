import { useHook } from './useHook.js'

export function SourceHumansDashboard(){
	const { myClass } = useHook()

	return <div className={myClass}>Hello world!</div>
}
