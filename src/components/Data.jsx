import { useState, useEffect } from "react"
import { Loading } from "./Users"

const Data = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

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
						<div key={user.id}>
							{user.login}
							<img src={user.avatar_url} alt={user.login} />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Data
