// Параметры запроса
export type GetOrganizationReposListParams = {
  organizationName: string;
  per_page?: number;
  page?: number;
};

export interface IReposListStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<void>;
}
