import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <>
      <div className="card">
        <div>{login}</div>
        <div className="user-image">
          <img src={avatar_url} alt="user image" />
        </div>
        <Link className="user-link" to={`/users/${login}`}>Visit Profile</Link>
      </div>
    </>
  )
}
export default UserItem;