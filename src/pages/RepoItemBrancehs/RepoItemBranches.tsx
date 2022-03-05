import { useCallback, useEffect, useState } from "react";
import React from "react";

import { useReposContext } from "../../App/App";

import { Spin, Breadcrumb } from "antd";
import { useParams, Link } from "react-router-dom";

import styles from "./RepoItemBranches.module.scss";
import Button from "@components/Button/Button";
import Error from "@components/Error/Error";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer/RepoBranchesDrawer";
import { Meta } from "@utils/meta";
import { RepoItemModel } from "@store/models/gitHub/repoItem";

const RepoItemBranches: React.FC = () => {
  const reposContext = useReposContext();
  const [visible, setVisible] = useState(false);
  const { id } = useParams<{ id: string }>();
  const repo = reposContext.list.filter((repo: RepoItemModel) => repo.id == id);

  useEffect(() => {
    reposContext.load();
  }, [id]);

  const showDrawer = useCallback(() => {
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div>
      {reposContext.loading !== Meta.error && (
        <Spin spinning={reposContext.loading === Meta.loading} tip="Loading...">
          <div className={styles.repoItemPage}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/repos">Список репозиториев</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Репозиторий № {id}</Breadcrumb.Item>
            </Breadcrumb>
            {repo.map((repo) => (
              <React.Fragment key={repo.id}>
                <h2>Репозиторий {repo.name}</h2>
                <div className={styles.repoItems__branches}>
                  <div>
                    <h3>Информация о владельце</h3>
                    <p>Имя владельца: {repo.owner.login}</p>
                    <p>
                      URL: <a href={repo.owner.url}>{repo.owner.login}</a>
                    </p>
                  </div>
                  <div>
                    <p>
                      URL: <a href={repo.url}>{repo.name}</a>
                    </p>
                    <p>Приватность: {repo.private ? "Да" : "Нет"}</p>
                    <p>Количество звезд: {repo.stargazersCount}</p>
                    <Button
                      onClick={showDrawer}
                      className={styles.repoItems__btn}
                    >
                      Показать ветки репозитория
                    </Button>
                  </div>
                  <div>
                    <h3>Информация о владельце</h3>
                    <p>Имя владельца: {repo.owner.login}</p>
                    <p>
                      URL: <a href={repo.owner.url}>{repo.owner.login}</a>
                    </p>
                  </div>
                </div>
                <RepoBranchesDrawer
                  selectedRepo={repo}
                  visible={visible}
                  onClose={onClose}
                />
              </React.Fragment>
            ))}
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

export default RepoItemBranches;
