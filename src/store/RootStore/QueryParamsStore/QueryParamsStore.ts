import { History, Location } from "history";
import { action, makeObservable, observable } from "mobx";
import qs from "qs";

type PrivateFields = "_params";

export default class QueryParamsStore {
  private _params: qs.ParsedQs = {};
  private _history: History<unknown>[] = [];
  private _location: Location<unknown>[] = [];

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _params: observable.ref,
      setParam: action,
    });
  }

  getParam(
    key: string
  ): undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[] {
    return this._params[key];
  }

  setHistory(history: History<unknown>, location: Location<unknown>) {
    this._history.push(history);
    this._location.push(location);
  }

  setParam(key: string, value: string) {
    // const nextParams = { ...this._params, [key]: value };
    // const nextSearch = qs.stringify(nextParams);
    // this._history?.replace(
    //   ...this._location,
    //   search: nextSearch);
  }
}

function search(arg0: Location<unknown>, search: any, nextSearch: string) {}
