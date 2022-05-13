import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {
  const [text, setText] = useState('')

  const { users } = useContext(GithubContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') {
      alert('Search field is required')
    } else {
      //  search users

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
            <button className="clear-btn">Clear</button>
          </div>)}

        </div>
      </form>

    </>
  )
}

export default UserSearch