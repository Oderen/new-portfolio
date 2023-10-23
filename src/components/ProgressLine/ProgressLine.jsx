import React from 'react';
import css from './ProgressLine.module.css';

const ProgressLine = ({ scrollTop }) => {
  return (
    <div className={css.progressMainWrapper}>
      <div
        className={css.progressMainStyle}
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

export default ProgressLine;
