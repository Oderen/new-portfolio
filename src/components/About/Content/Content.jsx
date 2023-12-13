import React from 'react';
import css from './Content.module.css';
import Reveal from 'components/Reveal';

const Content = () => {
  return (
    <div className={css.content}>
      <Reveal>
        <p
          className={`${css.content__text} ${css['first-letter']}`}
          style={{ marginTop: 30 }}
        >
          I am a fullstack developer from Ukraine, Lviv. I like learning new
          things and throw down a challenge to myself. Having experienced
          diverse fields like biology, chemistry, psychology, and political
          science, I can boast of my ability to quickly learn new things.
        </p>
      </Reveal>

      <Reveal>
        <p
          className={css.content__text}
          style={{ marginTop: 50, textIndent: 20 }}
        >
          While I'm a fullstack specialist, I try to actively expand my skillset
          in the backend domain by delving into Node.js, databases and Nest.js.
        </p>
      </Reveal>

      <Reveal>
        <p
          className={css.content__text}
          style={{ marginTop: 50, textIndent: 20 }}
        >
          In the future, my goal is to evolve into a senior full-stack software
          engineer, and I am actively seeking a position that offers diverse
          opportunities for enhancing my skills in both front-end and back-end
          development.
        </p>
      </Reveal>
    </div>
  );
};

export default Content;
