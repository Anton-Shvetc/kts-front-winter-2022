import React, { useState, useEffect } from "react";

import { Spin, BackTop } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./ReposSearchPage.module.scss";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import SearchIcon from "@components/SearcIcon/SearchIcon";
import RepoTile from "@components/RepoTile/RepoTile";
import { useReposContext } from "../../App/App";

const ReposSearchPage: React.FC = () => {
  const reposContext = useReposContext();
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    reposContext.load();
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setDisabled(false);
  };

  const handleSearch = () => {
    reposContext.filteredData(value);
    setDisabled(true);
  };

  return (
    <div className={styles.repositoriesPage}>
      <div className={styles.search}>
        <Input
          placeholder="Введите название репозитория"
          onChange={handleChange}
          value={value}
        />
        <Button onClick={handleSearch} className="btn">
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.repositoriesPage__repoItem}>
        <InfiniteScroll
          next={reposContext.fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          dataLength={reposContext.repoList.length}
        >
          {reposContext.repoList.map((repo) => (
            <React.Fragment key={repo.id}>
              <RepoTile repo={repo} />
            </React.Fragment>
          ))}
          {!reposContext.repoList.length && (
            <span>Репозиториев не найдено</span>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default ReposSearchPage;
