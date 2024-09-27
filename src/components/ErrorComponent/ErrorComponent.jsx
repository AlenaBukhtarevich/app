import React from "react";
import "./ErrorComponent.module.css";

const ErrorComponent = ({ error }) => {
  return <div className={styles.error}>{error}</div>;
};

export default ErrorComponent;
