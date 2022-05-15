import RepoItem from "./RepoItem"

function RepoList({ repos }) {
  return (
    <div className="latest-repo">
      <h3 className="repo-title">Latest Repositories</h3>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  )
}
export default RepoList