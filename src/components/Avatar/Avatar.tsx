

import React from "react";
import "./Avatar.scss";
import logo from './img/avatar.png';



export type AvatarProps = {
  src?: string;
  alt?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  
  alt = "K",
}) =>  <img src={logo} alt={alt} className ="card__logo" />;

export default Avatar;