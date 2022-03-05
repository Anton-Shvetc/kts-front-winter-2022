export type GetOrganizationRepoByIdParams = {
  organizationName: string;
  name: string;
};

export interface IRepoItemStore {
  getOrganizationRepoById(params: GetOrganizationRepoByIdParams): Promise<void>;
}
