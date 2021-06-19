import React from "react";
import PropTypes from "prop-types";

import styles from "./stylesLAbel.module.css";

const Label = ({ title, children }) => {
  return (
    <label className={styles.label}>
      <h3>{title}</h3>
      {children}
    </label>
  );
};
Label.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Label;
