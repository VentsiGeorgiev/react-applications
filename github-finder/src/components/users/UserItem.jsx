import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <>
      <div className="card">
        <div className="user-image">
          <img src={avatar_url} alt="user" />
        </div>
        <p>{login}</p>
        <Link className="user-link" to={`/user/${login}`}>Visit Profile</Link>
      </div>
    </>
  )
}
export default UserItem;