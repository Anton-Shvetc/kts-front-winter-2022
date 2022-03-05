import {
  normalizeRepoItem,
  RepoItemApi,
  RepoItemModel,
} from "../../store/models/gitHub/repoItem";
import rootStore from "../../store/RootStore/RootStore";
import { HTTPMethod } from "@store/RootStore/ApiStore/types";
import { Meta } from "@utils/meta";
import { ILocalStore } from "@utils/useLocalStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { GetOrganizationRepoByIdParams } from "./types";

type PrivateFields = "_repo" | "_meta";

export default class RepoItemStore implements RepoItemStore, ILocalStore {
  private _api = rootStore._apiStore;
  private _repo: RepoItemModel = {
    id: "",
    name: "",
    url: "",
    private: false,
    stargazersCount: 0,
    owner: {
      id: "",
      login: "",
      avatarUrl: "",
      url: "",
    },
    updatedAt: new Date(),
  };
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<RepoItemStore, PrivateFields>(this, {
      _repo: observable.ref,
      _meta: observable,
      repo: computed,
      meta: computed,
      getOrganizationRepoById: action,
    });
  }

  get repo(): RepoItemModel {
    return this._repo;
  }

  get meta(): Meta {
    return this._meta;
  }

  async getOrganizationRepoById(
    params: GetOrganizationRepoByIdParams
  ): Promise<void> {
    this._meta = Meta.loading;
    this._repo = {
      id: "",
      name: "",
      url: "",
      private: false,
      stargazersCount: 0,
      owner: {
        id: "",
        login: "",
        avatarUrl: "",
        url: "",
      },
      updatedAt: new Date(),
    };

    // const response = await this._api.request<RepoItemApi>({
    //   method: HTTPMethod.GET,
    //   endpoint: `/repos/${params.organizationName}/${params.name}`,
    //   headers: {},
    //   data: {},
    // });

    runInAction(() => {
      if (!response.success) {
        this._meta = Meta.error;
      }
      try {
        /* eslint-disable no-console */
        console.log(response);
        /* eslint-disable no-console */
        this._meta = Meta.success;
        this._repo = response.data.map(normalizeRepoItem);
        return;
      } catch (e) {
        this._meta = Meta.error;
        this._repo = {
          id: "",
          name: "",
          url: "",
          private: false,
          stargazersCount: 0,
          owner: {
            id: "",
            login: "",
            avatarUrl: "",
            url: "",
          },
          updatedAt: new Date(),
        };
      }
    });
  }

  destroy(): void {}
}
