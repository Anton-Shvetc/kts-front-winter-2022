import GitHubStore from "../store/GitHubStore/GitHubStore";

const gitHubStore = new GitHubStore();
const EXAMPLE_ORGANIZATION = "ktsstudio";

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
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