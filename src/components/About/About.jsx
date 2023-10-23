import React from 'react';
import css from './About.module.css';

import Content from './Content';
import Photo from './Photo';
import Stack from './Stack';

const About = () => {
  return (
    <section id="about" className={css.about}>
      <div className="container">
        <h2 className={css.about__title}>About</h2>
        <div className={css['main-block']}>
          <div className={css['left-side']}>
            <Content />
          </div>
          <div className={css['right-side']}>
            <Photo />
            <Stack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
