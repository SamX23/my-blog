import { useEffect, useState } from "react";
import Layout from "../src/components/layout";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const urlRepo = "https://api.github.com/users/samx23/repos";
  const urlProfile = "https://api.github.com/users/samx23";
  const repoCounter = profile && profile.public_repos;

  useEffect(() => {
    let mounted = true;
    fetch(urlProfile)
      .then((response) => response.json())
      .then((data) => mounted && setProfile(data));

    fetch(urlRepo)
      .then((response) => response.json())
      .then((data) => mounted && setRepos(data));

    return function cleanup() {
      mounted = false;
    };
  }, []);

  // console.log(repos, profile);

  return (
    <Layout>
      <h1>!! Work In Progress !!</h1>
      <h2>Github repo list to be..</h2>
      <p>Public Repository : {repoCounter}</p>
      <div className="github_Repos">
        {repos.length > 0 &&
          repos.map((repo, key) => (
            <div key={key} className="github_ReposCard">
              <h2>{repo.name}</h2>
              <a href={repo.html_url}>{repo.html_url}</a>
              <p>{repo.description}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Github;
