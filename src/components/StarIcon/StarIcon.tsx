import React from "react";

import styles from "./StarIcon.module.scss";

export type StarIconProps = {
  currentColor?: string;
};

const StarIcon: React.FC<StarIconProps> = ({ currentColor = "#FF9432" }) => (
  <svg
    className={styles.starIcon}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="13"
    fill="none"
    viewBox="0 0 14 13"
  >
    <path
      fill={currentColor}
      fillRule="evenodd"
      d="M7 .219a.656.656 0 01.589.366l1.647 3.338 3.683.535a.657.657 0 01.364 1.12l-2.665 2.598.63 3.668a.656.656 0 01-.953.692L7 10.804l-3.295 1.732a.655.655 0 01-.952-.691l.63-3.67L.716 5.577a.656.656 0 01.364-1.12l3.683-.534L6.411.585A.656.656 0 017 .219zm0 2.14L5.788 4.812a.656.656 0 01-.493.358l-2.71.394 1.96 1.911a.656.656 0 01.189.581l-.462 2.698 2.423-1.274a.656.656 0 01.61 0l2.424 1.274-.464-2.698a.656.656 0 01.19-.581l1.96-1.91-2.71-.394a.656.656 0 01-.493-.359L7 2.357v.001z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default React.memo(StarIcon);
