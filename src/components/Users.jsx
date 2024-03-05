import { useState, useEffect } from "react"

const URL = "https://api.github.com/users"

const Users = () => {
	const [users, setUsers] = useState(false)

	return <div>{users ? "List" : <Loading />}</div>
}

export const Loading = () => {
	const users = ["Jake", "Mike", "Biggie", "Layla"]
	return (
		<div className="">
			<h3>There are system generated users, loading.... </h3>
			<p> {users[0]} </p>
			<p> {users[1]} </p>
			<p> {users[2]} </p>
			<p> {users[3]} </p>
			<p>URL used is {URL} </p>
		</div>
	)
}
export default Users
