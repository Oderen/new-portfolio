import React from 'react';
import css from './Photo.module.css';
import Reveal from 'components/Reveal';

const Photo = () => {
  return (
    <div className={css['photo-container']}>
      <Reveal>
        <img
          src={require('../../../images/me.jpg')}
          alt="me"
          className={css.photo}
        />
      </Reveal>
    </div>
  );
};

export default Photo;
