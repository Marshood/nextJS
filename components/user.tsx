const User = (props: { user: { id: string; name: string; email: string } }) => {
  const { user } = props
  return (
    <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default User
