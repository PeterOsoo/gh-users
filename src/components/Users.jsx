// App showing dummy users for loading page

export const Loading = () => {
	const users = ["Jake", "Mike", "Biggie", "Layla", "Mane"]
	return (
		<div className="">
			<h3>There are system generated users, loading.... </h3>

			{users.map((user, index) => (
				<p key={index}>
					{index + 1}. {user}{" "}
				</p>
			))}
		</div>
	)
}
