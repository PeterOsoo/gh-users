import { useState } from "react"

const Users = () => {
	const [users, setUsers] = useState([])

	return <div>{users ? <Loading /> : "List"}</div>
}

const Loading = () => {
	const users = ["Jake", "Mike", "Biggie", "Layla"]
	return (
		<div className="">
			<h3>There are system generated users </h3>
			<p> {users[0]} </p>
			<p> {users[1]} </p>
			<p> {users[2]} </p>
			<p> {users[3]} </p>
		</div>
	)
}
export default Users
