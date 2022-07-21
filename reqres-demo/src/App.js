import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const getUsers = async () => {
    //   const res = await fetch('https://reqres.in/api/users?page=1')
    //   const dataApi = await res.json()
    //   setUsers(dataApi.data)
    // }
    // getUsers()

    (async () => {
      const res = await fetch('https://reqres.in/api/users?page=1')
      const dataApi = await res.json()
      setUsers(dataApi.data)
    })()

  }, [])
  // console.log(users);

  return (
    <>
      <h1>Users names</h1>
      {users.length > 0 &&
        users.map((user) => (
          <p>{user.first_name}</p>
        ))
      }
    </>
  );
}

export default App;

// https://reqres.in/api/users?page=${page}
