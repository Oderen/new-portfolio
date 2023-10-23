import React from 'react';
import { createPortal } from 'react-dom';
import css from './CV.module.css';

const cvRoot = document.querySelector('#cv');

const CV = () => {
  return createPortal(
    <a href="/new-portfolio" className={css.cv}>
      My resume
    </a>,
    cvRoot
  );
};

export default CV;
