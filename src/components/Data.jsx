import { useState, useEffect } from "react"
import { Loading } from "./Users"

const Data = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("Error")

	const URL = "https://api.github.com/users"

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URL)
				const result = await response.json()
				setData(result)
				setLoading(false)
			} catch (error) {
				console.error("Error fetching data:", error)
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<div>
					<h3>Users Generated from API endpoint</h3>
					{data.map(user => (
						<div key={user.id}>{user.login} </div>
					))}
				</div>
			)}

			{error && <p>Error fetching data</p>}
		</div>
	)
}

export default Data
