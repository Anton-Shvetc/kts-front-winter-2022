import ApiStore from "@shared/store/ApiStore/ApiStore";
import { ApiResponse, HTTPMethod } from "@shared/store/ApiStore/types";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  RepoItem,
  GetRepoBranchesLisParams,
  BranchItem,
  GetOrganizationRepoByIdParams,
} from "./types";

const BASE_URL: string = "https://api.github.com";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore(BASE_URL);

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/orgs/${params.organizationName}/repos?per_page=${params.per_page}&page=${params.page}`,
      headers: {},
      data: {},
    });
  }

  async getOrganizationRepoById(
    params: GetOrganizationRepoByIdParams
  ): Promise<ApiResponse<RepoItem, any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/repos/${params.organizationName}/${params.name}`,
      headers: {},
      data: {},
    });
  }

  async getRepoBranchesList(
    params: GetRepoBranchesLisParams
  ): Promise<ApiResponse<BranchItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/repos/${params.ownerName}/${params.repoName}/branches`,
      headers: {},
      data: {},
    });
  }
}
