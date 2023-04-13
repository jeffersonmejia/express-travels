#!/bin/bash
echo "Type the name component, ex: my_component"
read component_name

if ! [ -n "$component_name" ]; then
  echo "Ingresa un nombre válido"
	exit 1
elif echo "$component_name" | grep -q " "; then
  echo "No se permite el uso de espacios"
	echo "Utiliza '_' en su lugar"
	exit 1
  fi

COMPONENTS_DIR="src/components"
DIR="$COMPONENTS_DIR/$component_name"

STYLES="$DIR/styles.module.css"
INDEX="$DIR/index.js"
HOOK="$DIR/useHook.js"
STYLES_IMPORT="\"./styles.module.css\""

mkdir $DIR
touch $STYLES $INDEX $HOOK
echo -e "import styles from $STYLES_IMPORT\n" > $HOOK
echo "Component $component_name created successfully"

