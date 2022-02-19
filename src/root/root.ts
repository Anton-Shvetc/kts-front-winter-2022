import GitHubStore from "../store/GitHubStore/GitHubStore";

const gitHubStore = new GitHubStore();
const EXAMPLE_ORGANIZATION = "ktsstudio";
const EXAMPLE_REPO = "notific";

gitHubStore
  .getRepoBranchesList({
    ownerName: EXAMPLE_ORGANIZATION,
    repoName: EXAMPLE_REPO,
  })
  .then((result) => {
    if (result.success) {
      console.log(
        result.data.map((repo) => {
          return repo.name;
        })
      );
    }
    console.log(result);
  });
