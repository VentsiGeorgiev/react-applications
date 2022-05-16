import { FaConnectdevelop, FaUsers, FaUser, FaStore } from "react-icons/fa"
import { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import GithubContext from "../../context/github/GithubContext"
import Spinner from "../layout/Spinner"
import RepoList from "../repos/RepoList"
import { getUser, getUserRepos } from "../../context/github/GithubActions"
import './User.css';


function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUser(params.login)
      dispatch({ type: 'GET_USER', payload: userData })

      const userRepoData = await getUserRepos(params.login)
      dispatch({ type: 'GET_REPOS', payload: userRepoData })
    }

    getUserData()
  }, [dispatch, params.login])

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
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user


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
              rel="noreferrer"
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
          <p>Blog: <a target="_blank" rel="noreferrer" href={`https://${blog}`}>{blog}</a></p>
        )}
        {twitter_username && (
          <p>Twitter: <a target="_blank" rel="noreferrer" href={`https://twitter.com/${twitter_username}`}>{twitter_username}</a></p>
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
            <span>{public_gists}</span>
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