import React from "react";

import Avatar from "@components/Avatar/Avatar";
import StarIcon from "@components/StarIcon/StarIcon";
import { RepoItemModel } from "@store/models/gitHub/repoItem";
import { Tooltip } from "antd";
import Moment from "moment";

import styles from "./RepoTile.module.scss";

export type RepoTileProps = {
  repo: RepoItemModel;
};

const RepoTile: React.FC<RepoTileProps> = ({ repo }) => (
  <Tooltip title="Посмотреть ветки репозитория" color="#FF5555">
    <div className={styles.card}>
      <Avatar src={repo.owner.avatarUrl}></Avatar>
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
            <span>{repo.stargazersCount}</span>
          </div>
          <span>Updated {Moment(repo.updatedAt).format("D MMM")}</span>
        </div>
      </div>
    </div>
  </Tooltip>
);

export default React.memo(RepoTile);
