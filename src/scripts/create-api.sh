#!/bin/bash
clear
error_message="\e[31merror -\e[0m"
success_message="\e[32msuccess\e[0m -"
wait_message="\e[36mwait\e[0m -"

function print_help(){
	echo "Use: npm run api [api_name]"
}

if [ -z "$1" ]; then
	echo -e "$error_message api name required"
	print_help
	exit 2
	clear
fi

dir="src/pages/api"
api="$dir/$1"

mkdir "$api"

echo "import { queryDatabase } from '../../../services/database'
import { isAuthHandler } from '../../../utils/authHandler'

export default async function handler(req, res) {
	const isAuth = isAuthHandler(req.cookies, false)
	if (!isAuth.success) return res.status(401).json({ message: isAuth.message })

	const query = {
		text: 'select customer_name from customers where customer_id=$1;',
		values: [1],
	}
	const result = await queryDatabase(query, true)
	res.status(result.success ? 200 : 400).json(result)
}
" > "$api/index.js"

echo -e "$success_message API created successfully"