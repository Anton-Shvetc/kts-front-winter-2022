// Параметры запроса
export type GetRepoBranchesLisParams = {
  ownerName: string;
  repoName: string;
};

export interface IRepoBranchesStore {
  getRepoBranchesList(params: GetRepoBranchesLisParams): Promise<void>;
}
