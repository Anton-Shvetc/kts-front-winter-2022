import React, { useEffect } from "react";

import { RepoItemModel } from "../../store/models/gitHub/repoItem";
import RepoBranchesStore from "../../store/RepoBranchesStore/RepoBranchesStore";
import { useLocalStore } from "@utils/useLocalStore";
import { Drawer } from "antd";

declare type EventType =
  | React.KeyboardEvent<HTMLDivElement>
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

  export type RepoBranchesDrawerProps = {
    selectedRepo: RepoItemModel;
    onClose: (e: EventType) => void;
    visible: boolean;
  };


const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  selectedRepo,
  onClose,
  visible,
}) => {
  const repoBranchesStore = useLocalStore(() => new RepoBranchesStore());

  useEffect(() => {
    repoBranchesStore.getRepoBranchesList({
      ownerName: selectedRepo.owner.login,
      repoName: selectedRepo.name,
    });
  }, [repoBranchesStore, selectedRepo]);


  return (
    <Drawer
    title="Список веток"
    placement="right"
    onClose={onClose}
    visible={visible}
  >
    {repoBranchesStore.branches.length &&
      repoBranchesStore.branches.map((branch, i) => (
        <p key={i}>
          {i + 1}. {branch.name}
        </p>
      ))}
    </Drawer>
  );
};

export default React.memo(RepoBranchesDrawer);
