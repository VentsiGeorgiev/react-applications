import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {

    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then((dataApi) => {
        setUsers(dataApi.data)
      })


  }, [page])

  const nextPageHandler = () => {
    setPage((prev) => prev + 1)
  }

  const prevPageHandler = () => {
    setPage((prev) => prev - 1)
  }


  return (
    <>
      <h1>Req Res</h1>
      <div>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <>
                <p>{user.first_name}</p>
              </>
            )
          })
        }
      </div>
      <button onClick={prevPageHandler}>Prev page</button>
      <button onClick={nextPageHandler}>Next page</button>


    </>
  );
}

export default App;
