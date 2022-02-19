
import Avatar from "@components/Avatar/Avatar";
import React from "react";
import "./RepoTitle.scss"
import "../../root/root"

function RepoTitle() {





    return (
    <div className="card">
         <Avatar/>
          <div className="card__text">
            <div className="card__title"><span>123</span></div>
            <a href="#" className="card__link">ktsstudio</a>
            <div className="card__rating">
              <i className="far fa-star"></i>123 <span>Update 21 Jul</span>
            </div>
          </div>
        </div>
       
    )
}

export default RepoTitle;




// const RepoTile: React.FC<RepoTileProps> = ({ onClick, repo }) => (
//   <Tooltip title="Посмотреть ветки репозитория" color="#FF5555">
//     <div className="git-repo-tile" onClick={onClick}>
//       <div className="git-repo-tile__avatar">
//         <Avatar src={repo.owner.avatar_url}></Avatar>
//       </div>
//       <div className="git-repo-tile__content">
//         <div className="git-repo-tile__repo-name">
//           <b> {repo.name} </b>
//         </div>
//         <div className="git-repo-tile__org-link">
//           <a href={repo.owner.url}> {repo.owner.login}</a>
//         </div>
//         <div className="git-repo-tile__info">
//           <div className="git-repo-tile__stars">
//             <StartIcon></StartIcon>
//             <small>{repo.stargazers_count}</small>
//           </div>
//           <small> Updated {Moment(repo.updated_at).format("D MMM")}</small>
//         </div>
//       </div>
//     </div>
//   </Tooltip>
// );