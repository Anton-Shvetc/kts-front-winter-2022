import GitHubStore from "@store/GitHubStore/GitHubStore";
import { BranchItem, RepoItem } from "@store/GitHubStore/types";

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";

declare type EventType =
  | React.KeyboardEvent<HTMLDivElement>
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

export type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem;
  onClose: (e: EventType) => void;
  visible: boolean;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  selectedRepo,
  onClose,
  visible,
}) => {
  const [branchesList, setBranchesList] = useState<BranchItem[]>([]);

  useEffect(() => {
    const getBranches = async () => {
      try {
        await new GitHubStore()
          .getRepoBranchesList({
            ownerName: selectedRepo.owner.login,
            repoName: selectedRepo.name,
          })
          .then((branch) => setBranchesList(branch.data));
      } catch (err) {
        alert("Что-то пошло не так..");
      }
    };
    getBranches();
  }, [selectedRepo.owner.login, selectedRepo.name]);

  return (
    <Drawer
      title="Список веток"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      {branchesList.length &&
        branchesList.map((branch, i) => (
          <p key={i}>
            {i + 1}. {branch.name}
          </p>
        ))}
    </Drawer>
  );
};

export default React.memo(RepoBranchesDrawer);
