import React, { useState, useEffect, useCallback } from "react";
import { Spin } from "antd";
import styles from "./ReposSearchPage.module.scss";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import SearchIcon from "@components/SearcIcon/SearchIcon";
import RepoTile from "@components/RepoTile/RepoTile";
import { useReposContext } from "../../App/App";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import Error from "@components/Error/Error";

import { Meta } from "@utils/meta";

const ReposSearchPage: React.FC = () => {
  const reposContext = useReposContext();
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    reposContext.load();
  }, [value]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      setDisabled(false);
    },
    []
  );

  const handleSearch = useCallback(() => {
    reposContext.list = reposContext.list.filter((repo) => {
      return repo.name.toLowerCase().includes(value.toLowerCase());
    });
    setDisabled(true);
  }, [reposContext, value]);

  return (
    <div>
      {reposContext.loading !== Meta.error && (
        <Spin spinning={reposContext.loading === Meta.loading} tip="Loading...">
          <div className={styles.search}>
            <Input
              placeholder="Введите название репозитория"
              onChange={handleChange}
              value={value}
            />
            <Button onClick={handleSearch} disabled={disabled}>
              <SearchIcon />
            </Button>
          </div>
          <div>
            <InfiniteScroll
              next={reposContext.fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              dataLength={reposContext.list.length}
            >
              {reposContext.list.map((repo) => (
                <React.Fragment key={repo.id}>
                  <Link to={`/repos/${repo.id}`}>
                    <RepoTile repo={repo} />
                  </Link>
                </React.Fragment>
              ))}
              {!reposContext.list.length && (
                <span>Репозиториев не найдено</span>
              )}
            </InfiniteScroll>
          </div>
        </Spin>
      )}
      {reposContext.loading === Meta.error && (
        <Error
          title="Что-то пошло не так."
          subTitle="Пожалуйста, перезагрузите страницу"
        />
      )}
    </div>
  );
};

export default ReposSearchPage;
