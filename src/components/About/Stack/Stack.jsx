import React from 'react';
import css from './Stack.module.css';
import Reveal from 'components/Reveal';

const Stack = () => {
  return (
    <div className={css.stack}>
      <Reveal>
        <h3 className={css.stack__title}>Work with</h3>
        <ul className={css.stack__list}>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>HTML5</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>CSS3</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Styled-Components</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>CSS-Modules</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Tailwindcss</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>JavaScript</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>React</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Redux</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>React Router</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>React Native</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>TypeScript</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Node.js</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Express</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>MongoDB</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>PostgresSQL</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>mySQL</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Firebase</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>GitHub/Git</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>REST/GraphQL</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Websocket</p>
          </li>
        </ul>
      </Reveal>

      <Reveal>
        <h3
          className={css.stack__title}
          style={{ marginTop: 20, paddingBottom: 7 }}
        >
          Learning
        </h3>
        <ul className={css.stack__list}>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Next.js</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Nest.js</p>
          </li>
        </ul>
      </Reveal>
    </div>
  );
};

export default Stack;
