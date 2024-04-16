const UserData = ({ data }) => {
	return (
		<div>
			<h3>Users Generated from API endpoint</h3>
			<div className="user-list">
				{data.map(user => (
					<div key={user.id} className="user-item">
						{user.id}. {user.login}
						<img
							src={user.avatar_url}
							alt={user.login}
							className="user-avatar"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default UserData
