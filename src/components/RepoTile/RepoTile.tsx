import React from "react";

import Avatar from "@components/Avatar/Avatar";
import StarIcon from "@components/StarIcon/StarIcon";
import { RepoItem } from "@store/GitHubStore/types";
import { Tooltip } from "antd";
import Moment from "moment";
import { Link } from "react-router-dom";

import styles from "./RepoTile.module.scss";

export type RepoTileProps = {
  repo: RepoItem;
};

const RepoTile: React.FC<RepoTileProps> = ({ repo }) => (
  <Tooltip title="Посмотреть ветки репозитория" color="#FF5555">
    <Link to={`/repos/${repo.id}`}>
      <div className={styles.card}>
        <div className={styles.gitRepoTile__avatar}>
          <Avatar src={repo.owner.avatar_url}></Avatar>
        </div>
        <div className={styles.card__text}>
          <div className={styles.card__title}>
            <b> {repo.name} </b>
          </div>
          <div className={styles.card__link}>
            <a href={repo.owner.url}> {repo.owner.login}</a>
          </div>
          <div className={styles.card__info}>
            <div className={styles.card__raiting}>
              <StarIcon></StarIcon>
              <span>{repo.stargazers_count}</span>
            </div>
            <span>Updated {Moment(repo.updated_at).format("D MMM")}</span>
          </div>
        </div>
      </div>
    </Link>
  </Tooltip>
);

export default React.memo(RepoTile);
