import ApiStore from "./ApiStore/ApiStore";
import QueryParamsStore from "./QueryParamsStore/QueryParamsStore";

const BASE_URL: string = "https://api.github.com";

export default class RootStore {
  readonly query = new QueryParamsStore();
  readonly _apiStore = new ApiStore(BASE_URL);
  static _apiStore: any;
}
