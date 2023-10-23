import React from 'react';
import css from './Header.module.css';

import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';

const Header = () => {
  return (
    <header className={css.header} style={{ position: 'fixed', zIndex: 49 }}>
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
              href="https://www.linkedin.com/in/oleksandr-deren/"
            >
              <BiLogoLinkedin className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a className={css.link} href="https://t.me/OleksandrDeren">
              <BiLogoTelegram className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a className={css.link} href="https://github.com/Oderen">
              <BiLogoGithub className={css.icon} />
            </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/11DUiu9_Bpq6tHLoQdTR3VLgLHH6_BQih/view"
          className={css.cv}
        >
          My resume
        </a>

        {/* <nav className={css.navigation}>
          <ul className={css.navigation__list}>
            <li className={css.navigation__item}>
              <NavLink
                to="/"
                className={css.navigation__link}
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                to="/second"
                className={css.navigation__link}
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Second
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                to="/third"
                className={css.navigation__link}
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Third
              </NavLink>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
