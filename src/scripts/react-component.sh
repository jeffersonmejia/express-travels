#!/bin/bash
clear

function print_help {
	echo "Use: npm run rc [component_name]"
}

if [ -z "$1" ]; then
	clear
	echo "Error: Must type the component name"
	print_help
	exit 1
fi

if ! [[ "$1" =~ ^[a-z]+(_[a-z]+)*$ ]]; then
	clear
	echo "Error: Component must have uppercase format"
	print_help
	exit 1
fi

component_name=$(echo "$1" | sed 's/_\([a-z]\)/\U\1/g' | sed 's/^[a-z]/\U&/')

dir="src/components/$1"
css="$dir/styles.module.css"
hook="$dir/useHook.js"
index="$dir/index.js"

mkdir "$dir"
echo ".component{
	background-color:rgb(245,245,245);
}" > $css
echo "import styles from './styles.module.css'

export function useHook(){
	myClass = styles.component
	return { myClass }
}" > $hook

echo "import { useHook } from './useHook.js'

export function $component_name(){
	const { myClass } = useHook()

	return <div className={myClass}>Hello world!</div>
}" > $index

clear
echo "Component $1 created successfully: $dir"
code "$index"

