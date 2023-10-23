import React from 'react';
import css from './Project.module.css';

const Project = ({
  openModal,
  imgName,
  Icon,
  indicator,
  title,
  indicatorColor,
  description,
}) => {
  return (
    <li className={css.projects__item} onClick={openModal}>
      <div
        className={css['image-container']}
        style={{
          backgroundColor: imgName ? 'transparent' : '#1a1a1a',
        }}
      >
        {imgName ? (
          <img
            className={css.photos}
            src={require(`../../../images/${imgName}.png`)}
            alt="Filmoteka"
            anim="anim"
          />
        ) : (
          Icon && (
            <Icon
              style={{
                width: 130,
                height: 130,
                color: 'rgba(78, 76, 76, 0.65)',
              }}
            />
          )
        )}

        <div className={css['click-me']}>
          <p className={css['click-me__text']}>
            <span style={{ color: 'var(--orange)' }}>Click</span> to learn more
          </p>
        </div>
      </div>

      <div className={css.projects__description}>
        <div className={css['progress-indicator']}>
          <div
            className={css.indicator__icon}
            style={{ backgroundColor: indicatorColor }}
          ></div>
          <p className={css.indicator__text}>{indicator}</p>
        </div>
        <h3 className={css.indicator__title}>{title}</h3>
        <p style={{ color: 'white' }}>{description}</p>
      </div>
    </li>
  );
};

export default Project;
