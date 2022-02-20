import { useState } from "react";
import React from "react";
import { useEffect } from "react";

import "./ReposSearchPage.scss";
import GitHubStore from "@store/GitHubStore/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import RepoTitle from "@components/RepoTitle/RepoTitle";
import SearchIcon from "@components/SearcIcon/SearchIcon";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer/RepoBranchesDrawer";

function ReposSearchPage() {
  const [repoList, setRepoList] = useState<RepoItem[]>([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getRepos = async () => {
      const EXAMPLE_ORGANIZATION = "ktsstudio";
      try {
        await new GitHubStore()
          .getOrganizationReposList({
            organizationName: EXAMPLE_ORGANIZATION,
          })
          .then((repo) => setRepoList(repo.data))
          .finally(() => {
            setIsLoading(false);
            setDisabled(false);
          });
      } catch (err) {}
    };
    getRepos();
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    const filteredData = repoList.filter((repo) => {
      return repo.name.toLowerCase().includes(value.toLowerCase());
    });
    setRepoList(filteredData);
    setDisabled(true);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="ReposSearchPage">
      <div className="search">
        <Input
          placeholder="Введите название репозитория"
          onChange={handleChange}
          value={value}
        />
        <Button
          onClick={handleSearch}
          disabled={disabled}
          className="search__btn"
        >
          <SearchIcon />
        </Button>
      </div>

      <div className="cards">
        {repoList.map((repo) => (
          <React.Fragment key={repo.id}>
            <RepoTitle repo={repo} onClick={showDrawer} />

            <RepoBranchesDrawer
              selectedRepo={repo}
              visible={visible}
              onClose={onClose}
            />
          </React.Fragment>
        ))}

        {!repoList.length && <span>Репозиториев не найдено</span>}
      </div>
    </div>
  );
}
export default ReposSearchPage;
