import React from 'react';
import css from './Hero.module.css';
import Reveal from '../../components/Reveal';

const Hero = () => {
  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.info}>
          <Reveal>
            <h1 className={css.info__title}>
              Hi, I am <span style={{ color: 'var(--orange)' }}>Oleksandr</span>
            </h1>
          </Reveal>

          <Reveal>
            <p className={css.info__description}>
              I am a Fronted Developer. I've been developing over 1 year and
              have learned a lot of fascinating things.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
