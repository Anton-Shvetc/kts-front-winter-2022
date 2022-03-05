export type BranchItemApi = {
  name: string;
  protected: boolean;
  protection_url: string;
};

export type BranchItemModel = {
  name: string;
  protected: boolean;
  protectionUrl: string;
};

export const normalizeBranchItem = (from: BranchItemApi): BranchItemModel => ({
  name: from.name,
  protected: from.protected,
  protectionUrl: from.protection_url,
});
