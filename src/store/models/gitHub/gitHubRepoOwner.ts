export type GitHubRepoOwnerApi = {
  id: string;
  login: string;
  avatar_url: string;
  url: string;
};

export type GitHubRepoOwnerModel = {
  id: string;
  login: string;
  avatarUrl: string;
  url: string;
};

export const normalizeGitHubRepoOwner = (
  from: GitHubRepoOwnerApi
): GitHubRepoOwnerModel => ({
  id: from.id,
  login: from.login,
  avatarUrl: from.avatar_url,
  url: from.url,
});
