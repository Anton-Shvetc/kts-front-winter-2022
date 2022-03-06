import React from "react";
import "./Avatar.scss";
import logo from "./img/avatar.png";

export type AvatarProps = {
  src?: string;
  alt?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src = "#" }) => (
  <img src={src} className="card__logo" />
);

export default React.memo(Avatar);
