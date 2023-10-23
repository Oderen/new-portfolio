import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoGithub } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

import projects from '../../data/projects.json';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ isModalOpen, closeModal }) => {
  const IndProjects = projects.filter(item => item.title === isModalOpen);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const {
    title,
    visual__link,
    github_link,
    technologies,
    full_description,
    img__name,
  } = IndProjects[0];

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modal__button} onClick={closeModal}>
          <AiOutlineClose className={css.modal__closeBtn} />
        </button>

        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 310,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <img
            className={css.modal__photo}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            src={
              img__name
                ? require(`../../images/${img__name}.png`)
                : require(`../../images/skeleton.jpg`)
            }
            alt="renrify"
          />
          <div className={css['img-frontdrop']}></div>
        </div>
        <h2
          style={{ textAlign: 'center', marginTop: 20, color: 'var(--orange)' }}
        >
          {title}
        </h2>

        <div style={{ marginTop: 10 }}>
          <div
            style={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsEye className={css.modal__icon} />
            {visual__link ? (
              <a
                href={visual__link}
                className={css.modal__link}
                target="_blank"
                rel="noreferrer noopener"
              >
                Visual Part
              </a>
            ) : (
              <p className={css.modal__link}>Not available</p>
            )}
          </div>
          <div
            style={{
              display: 'flex',

              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <BiLogoGithub className={css.modal__icon} />
            <a href={github_link} className={css.modal__link}>
              Code
            </a>
          </div>
        </div>

        <p className={css.modal__technologies}>Technologies:</p>
        <ul className={css.stack__list}>
          {technologies.map(technology => {
            return (
              <li className={css.stack__item} key={technology}>
                <p className={css.stack__technology}>{technology}</p>
              </li>
            );
          })}
        </ul>
        <p
          className={css.modal__technologies}
          style={{ marginTop: 20, marginBottom: 10 }}
        >
          Description:
        </p>
        <p style={{ fontWeight: 400, color: 'gray' }}>{full_description}</p>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
