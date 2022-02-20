import Avatar from "@components/Avatar/Avatar";
import React from "react";
import "./RepoTitle.scss";
import "../../root/root";
import { RepoItem } from "@store/GitHubStore/types";
import StartIcon from "@components/StarIcon/StarIcon";

export type RepoTileProps = {
  onClick?: (e: React.MouseEvent) => void;
  repo: RepoItem;
};

const RepoTitle: React.FC<RepoTileProps> = ({ onClick, repo }) => (
  <div className="card" onClick={onClick}>
    <Avatar />
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

export default RepoTitle;
