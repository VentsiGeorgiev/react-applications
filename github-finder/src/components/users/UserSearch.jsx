import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../context/github/GithubActions"

function UserSearch() {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 

    if (text.trim() === '') { 
      setAlert('Search field is required', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const users = await searchUsers(text)
      console.log(users);
      dispatch({ type: 'GET_USERS', payload: users })

      setText('')
    }
  }


  return (

    <>
      <form onSubmit={handleSubmit}>
        <div className="searchform">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            value={text}
            onChange={handleChange}
          />
          <button className="search-btn" type="submit">Go</button>
          {users.length > 0 && (<div>
            <button onClick={() => dispatch({ type: 'CLEAR_USERS' })} className="clear-btn">Clear</button>
          </div>)}

        </div>
      </form>

    </>
  )
}

export default UserSearch