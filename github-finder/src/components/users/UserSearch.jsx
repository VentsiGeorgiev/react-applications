import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

function UserSearch() {
  const [text, setText] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') {
      setAlert('Search field is required', 'error')
    } else {
      searchUsers(text)
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
            <button onClick={clearUsers} className="clear-btn">Clear</button>
          </div>)}

        </div>
      </form>

    </>
  )
}

export default UserSearch