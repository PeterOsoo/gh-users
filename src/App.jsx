const App = () => {
	const users = ["Jake", "Mike", "Biggie", "Layla"]
	console.log("App running")
	return (
		<div>
			<h3> Github Users </h3>
			<p> {users[0]} </p>
			<p> {users[1]} </p>
			<p> {users[2]} </p>
			<p> {users[3]} </p>
		</div>
	)
}

export default App
