import { createContext, useCallback, useContext, useState } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import React from "react";

import RepoItemBranches from "@pages/RepoItemBrancehs/RepoItemBranches";
import ReposSearchPage from "@pages/ReposSearchPage/ReposSearchPage";

import { RepoItemModel } from "@store/models/gitHub/repoItem";
import { useLocalStore } from "@utils/useLocalStore";
import ReposListStore from "@store/ReposListStore/ReposListStore";
import { observer } from "mobx-react-lite";

type ReposContextType = {
  list: RepoItemModel[];
  loading: string;
  load: () => void;
  fetchData: () => void;
};

const ReposContext = createContext<ReposContextType>({
  list: [],
  loading: "",
  load: () => {},
  fetchData: () => {},
});

const Provider = ReposContext.Provider;

export const useReposContext = () => useContext(ReposContext);

function App() {
  const reposListStore = useLocalStore(() => new ReposListStore());
  let [page, setPage] = useState(1);
  let list = reposListStore.list;
  let loading = reposListStore.meta;

  const load = useCallback(async () => {
    await reposListStore.getOrganizationReposList({
      organizationName: "ktsstudio",
      per_page: 10,
      page: page,
    });
  }, [reposListStore, page]);
  const fetchData = () => {
    setPage(page++);
  };


  return (
    <Provider value={{ list, loading, load, fetchData }}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/repos" component={ReposSearchPage} />
            <Route path="/repos/:id" component={RepoItemBranches} />
            <Redirect to="/repos" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default observer(App);
