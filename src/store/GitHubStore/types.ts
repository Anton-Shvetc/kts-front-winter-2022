import { ApiResponse } from "../../shared/store/ApiStore/types";


export type GetOrganizationReposListParams = {
    organizationName: string;
}

export type GitHubRepoOwner = {
    id: number,
    url: string;
    avatar_url: string;
    login: string;
    

}
export type RepoItem = {
    id: number;
    url: string;
    name: string;
    stargazer_count: number;
    owner: GitHubRepoOwner


}

/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */
export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[],any>>;
}