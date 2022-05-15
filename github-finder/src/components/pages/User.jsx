import { useEffect, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import Spinner from "../layout/Spinner"
import RepoList from "../repos/RepoList"
import './User.css';
import { FaConnectdevelop, FaUsers, FaUser, FaStore } from "react-icons/fa"


function User() {
  const { getUser, user, loading, getUserRepos, repos } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
    getUserRepos(params.login)
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
      <div className="back-btn">
        <Link to='/'>Back To Search</Link>

      </div>
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

      <div className="user-stats">
        {/* # 1 */}
        <div className="stat">
          <div className="stat-info">
            <p>Followers</p>
            <span>{followers}</span>
          </div>
          <div className="stat-icon">
            <FaUsers className="user-stat-icon"></FaUsers>
          </div>
        </div>
        {/* # 2 */}
        <div className="stat">
          <div className="stat-info">
            <p>Following</p>
            <span>{following}</span>
          </div>
          <div className="stat-icon">
            <FaUser></FaUser>
          </div>
        </div>
        {/* # 3 */}
        <div className="stat">
          <div className="stat-info">
            <p>Followers</p>
            <span>{public_repos}</span>
          </div>
          <div className="stat-icon">
            <FaConnectdevelop></FaConnectdevelop>
          </div>
        </div>
        {/* # 4 */}
        <div className="stat">
          <div className="stat-info">
            <p>Followers</p>
            <span>{public_repos}</span>
          </div>
          <div className="stat-icon">
            <FaStore></FaStore>
          </div>
        </div>

      </div>


      <RepoList repos={repos}></RepoList>
    </div>
  </>
}
export default User