import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    const data = await res.json()

    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <>
        <h1 className='user-title'>User Results</h1>
        <div className='user-list users'>{users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}</div>
      </>
    )
  } else {
    return <Spinner />
  }


}
export default UserResults