import { ApiResponse } from "@shared/store/ApiStore/types";

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export type GetRepoBranchesLisParams = {
  ownerName: string;
  repoName: string;
};

export type GitHubRepoOwner = {
  id: number;
  url: string;
  avatar_url: string;
  login: string;
};
export type RepoItem = {
  id: number;
  url: string;
  name: string;
  stargazer_count: number;
  owner: GitHubRepoOwner;
};
export type BranchItem = {
  name: string;
  protected: boolean;
  url: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;

  getRepoBranchesList(
    params: GetRepoBranchesLisParams
  ): Promise<ApiResponse<BranchItem[], any>>;
}
