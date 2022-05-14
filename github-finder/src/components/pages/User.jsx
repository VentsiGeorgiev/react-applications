import { useEffect, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import Spinner from "../layout/Spinner"
import './User.css';

function User() {
  const { getUser, user, loading } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  if (loading) {
    return <Spinner />
  }
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user

  console.log(user);

  return <>
    <div className="user">
      <div className="user-profile">

        <div className="user-image">
          <img src={avatar_url} alt={name} />
          <h3 className="username">{name}</h3>
        </div>

        <div className="user-info">
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{bio}</p>
          <div className="github-profile-link">
            <a
              href={html_url}
              target="_blank"
              className="github-link">
              Visit GitHub Profile
            </a>
          </div>
        </div>


      </div>
      <div className="user-contacts">
        {location && (
          <p>Location: {location}</p>
        )}
        {blog && (
          <p>Blog: <a target="_blank" href={`https://${blog}`}>{blog}</a></p>
        )}
        {twitter_username && (
          <p>Twitter: <a target="_blank" href={`https://twitter.com/${twitter_username}`}>{twitter_username}</a></p>
        )}
      </div>

      <div className="user-stat">

        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
        <p>Public Gists: {public_repos}</p>

      </div>



    </div>
  </>
}
export default User