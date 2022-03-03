import Avatar from "@components/Avatar/Avatar";
import React from "react";
import "./RepoTile.scss";
import "../../root/root";
import { RepoItem } from "@store/GitHubStore/types";
import StartIcon from "@components/StarIcon/StarIcon";

export type RepoTileProps = {
  onClick?: (e: React.MouseEvent) => void;
  repo: RepoItem;
};

const RepoTile: React.FC<RepoTileProps> = ({ onClick, repo }) => (
  <div className="card" onClick={onClick}>
    <Avatar src={repo.owner.avatar_url} alt={repo.name[0]} />
    <div className="card__text">
      <div className="card__title">
        <span>{repo.name}</span>
      </div>
      <div className="card__link">
        <a href={repo.owner.url}>{repo.owner.login}</a>
      </div>

      <div className="card__rating">
        <StartIcon></StartIcon> <span>Updated </span>
      </div>
    </div>
  </div>
);

export default React.memo(RepoTile);
