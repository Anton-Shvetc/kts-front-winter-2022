import React from "react";
import { ChangeEventHandler } from "react";
import "./Input.scss"


export type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ onChange, placeholder, value }) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    className="input"
  />
);

export default Input;
