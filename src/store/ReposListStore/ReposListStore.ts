import {
  normalizeRepoItem,
  RepoItemApi,
  RepoItemModel,
} from "@store/models/gitHub";
import {
  CollectionModel,
  getInitialCollectionModel,
  linearizeCollection,
  normalizeCollection,
} from "@store/models/shared/collection";
import rootStore from "@store/RootStore";
import { HTTPMethod } from "@store/RootStore/ApiStore/types";
import { Meta } from "@utils/meta";
import { ILocalStore } from "@utils/useLocalStore";
import {
  action,
  computed,
  IReactionDisposer,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";

import { GetOrganizationReposListParams, IReposListStore } from "./types";

type PrivateFields = "_list" | "_meta";

export default class ReposListStore implements IReposListStore, ILocalStore {
  private _api = rootStore._apiStore;
  private _list: CollectionModel<string, RepoItemModel> =
    getInitialCollectionModel();
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<ReposListStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable,
      list: computed,
      meta: computed,
      getOrganizationReposList: action,
    });
  }

  get list(): RepoItemModel[] {
    return linearizeCollection(this._list);
  }

  set list(repoList: RepoItemModel[]) {
    this._list = getInitialCollectionModel();
    this._list = normalizeCollection(repoList, (listItem) => listItem.id);
  }

  get meta(): Meta {
    return this._meta;
  }

  // Список репозиториев
  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<void> {
    this._meta = Meta.loading;
    this._list = getInitialCollectionModel();

    const response = await this._api.request<RepoItemApi[]>({
      method: HTTPMethod.GET,
      endpoint: `/orgs/${params.organizationName}/repos?per_page=${params.per_page}&page=${params.page}`,
      headers: {},
      data: {},
    });

    runInAction(() => {
      if (!response.success) {
        this._meta = Meta.error;
      }
      try {
        const list: RepoItemModel[] = [];
        for (const item of response.data) {
          list.push(normalizeRepoItem(item));
        }
        this._meta = Meta.success;
        this._list = normalizeCollection(list, (listItem) => listItem.id);
        return;
      } catch (e) {
        this._meta = Meta.error;
        this._list = getInitialCollectionModel();
      }
    });
  }

  destroy(): void {
    this._qpReaction();
  }

  private readonly _qpReaction: IReactionDisposer = reaction(
    () => rootStore.query.getParam("search"),
    (search) => {
      /* eslint-disable no-console */
      console.log("search value change", search);
      /* eslint-disable no-console */
    }
  );
}
