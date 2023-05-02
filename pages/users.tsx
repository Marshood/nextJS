import User from '@/components/user'

const UserList = (props: {
  users: Array<{ id: string; name: string; email: string }>
}) => {
  const { users } = props
  return (
    <>
      <h1> List of users</h1>
      {users?.map((user: { id: string; name: string; email: string }, key) => {
        return <User user={user} key={key} />
      })}
    </>
  )
}
export default UserList

export async function getStaticProps() {
  // runs only on the server side never run on client side
  // will run at build time
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return { props: { users: data } }
}
