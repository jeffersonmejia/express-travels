#!/bin/bash
clear
error_message="\e[31merror -\e[0m"
success_message="\e[32msuccess\e[0m -"
event_message="\e[35mevent\e[0m -"
wait_message="\e[36mwait\e[0m -"



function print_help {
	echo -e "Use: npm run gh [commit-message]"
}

if [ -z "$1" ]; then
	clear
	echo -e "$error_message must type the commit message"
	print_help
	exit 1
fi

function check_git_repository {
	clear
	git status >/dev/null 2>&1
	# Verificar el código de salida
	if [ "$?" -ne 0 ]; then
  	echo "Error: no se pudo obtener el estado del repositorio."
  	exit 1
	fi
}

function push_commit {
	if git status --porcelain | grep -q "^[ M A D R C]"; then
		echo -e "$wait_message Pushing commit..."
		git add . && git commit -m "$1"
		git pull origin main && git push origin main
		echo -e "$success_message Commit '$1' sent successfully"
  	exit 0
	else 
		echo "$error_message No changes pending, commits sended: 0"
  	exit 1
	fi
}
check_git_repository
push_commit "$1"
