import { useState, useEffect } from "react"
import { Loading } from "./Users"
import UserData from "./UserData"

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

	return <div>{loading ? <Loading /> : <UserData data={data} />}</div>
}

export default Data
