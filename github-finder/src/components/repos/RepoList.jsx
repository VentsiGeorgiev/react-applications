import RepoItem from "./RepoItem"

function RepoList({ repos }) {
  return (
    <>
      <h3>Latest Repositories</h3>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </>
  )
}
export default RepoList