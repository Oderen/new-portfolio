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
            <p className={css.stack__technology}>HTML</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>CSS</p>
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
            <p className={css.stack__technology}>Typescript</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Express</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>MongoDB</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>GitHub/Git</p>
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
            <p className={css.stack__technology}>MySQL</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Nest</p>
          </li>
          <li className={css.stack__item}>
            <p className={css.stack__technology}>Next</p>
          </li>
        </ul>
      </Reveal>
    </div>
  );
};

export default Stack;
