import {
  GitHubRepoOwnerApi,
  GitHubRepoOwnerModel,
  normalizeGitHubRepoOwner,
} from "./gitHubRepoOwner";

export type RepoItemApi = {
  id: string;
  name: string;
  url: string;
  private: boolean;
  stargazers_count: number;
  owner: GitHubRepoOwnerApi;
  updated_at: string;
};

export type RepoItemModel = {
  id: string;
  name: string;
  url: string;
  private: boolean;
  stargazersCount: number;
  owner: GitHubRepoOwnerModel;
  updatedAt: Date;
};

export const normalizeRepoItem = (from: RepoItemApi): RepoItemModel => ({
  id: from.id,
  name: from.name,
  url: from.url,
  private: from.private,
  stargazersCount: from.stargazers_count,
  owner: normalizeGitHubRepoOwner(from.owner),
  updatedAt: new Date(from.updated_at),
});
