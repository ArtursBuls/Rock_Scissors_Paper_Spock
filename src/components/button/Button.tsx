import React, { FC } from "react";
import styles from "./Button.module.scss";

interface Props {
  label: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
