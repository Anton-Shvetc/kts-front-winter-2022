import { createContext, useCallback, useContext, useState } from "react";

import { RepoItem } from "@store/GitHubStore/types";
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
import GitHubStore from "@store/GitHubStore/GitHubStore";

type ReposContextType = {
  repoList: RepoItem[];
  filteredData: (value: string) => void;
  isLoading: boolean;
  load: () => void;
  fetchData: () => void;
};

const ReposContext = createContext<ReposContextType>({
  repoList: [],
  isLoading: true,
  filteredData: () => {},
  load: () => {},
  fetchData: () => {},
});

const Provider = ReposContext.Provider;

export const useReposContext = () => useContext(ReposContext);

function App() {
  const [repoList, setRepoList] = useState<RepoItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = () => {
    const getRepos = async () => {
      try {
        await new GitHubStore()
          .getOrganizationReposList({
            organizationName: "ktsstudio",
            per_page: 10,
            page: 1,
          })
          .then((repo) => setRepoList(repo.data))
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {}
    };
    getRepos();
  };

  const filteredData = (value: string) => {
    const filteredData = repoList.filter((repo) => {
      return repo.name.toLowerCase().includes(value.toLowerCase());
    });
    setRepoList(filteredData);
  };

  const fetchData = useCallback(() => {
    setTimeout(() => {
      setRepoList((prev) => [...prev, ...prev]);
    }, 2000);
  }, []);

  return (
    <Provider value={{ repoList, isLoading, load, filteredData, fetchData }}>
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

export default App;
