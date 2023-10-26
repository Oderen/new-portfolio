import React from 'react';
import css from './Header.module.css';

import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';

const Header = () => {
  return (
    <header className={css.header} style={{ position: 'fixed', zIndex: 50 }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ul className={css.list}>
          <li className={css.item}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/oleksandr-deren/"
            >
              <BiLogoLinkedin className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://t.me/OleksandrDeren"
            >
              <BiLogoTelegram className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/Oderen"
            >
              <BiLogoGithub className={css.icon} />
            </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1z_beQLqC2M18054jjWmVIOvAA8NJL0QE/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className={css.cv}
        >
          My resume
        </a>
      </div>
    </header>
  );
};

export default Header;
