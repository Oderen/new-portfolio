import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoGithub } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      setIsOpen(false);

      document.body.style.overflow = 'unset';
    };
  }, [setIsOpen, closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div
        style={{
          transform: isOpen
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -20%) scale(0.2)',
        }}
        className={css.modal}
      >
        <button className={css.modal__button} onClick={closeModal}>
          <AiOutlineClose className={css.modal__closeBtn} />
        </button>

        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 280,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <img
            className={css.modal__photo}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            src={require('../../images/rentify.png')}
            alt="renrify"
          />
          <div className={css['img-frontdrop']}></div>
        </div>
        <h2
          style={{ textAlign: 'center', marginTop: 20, color: 'var(--orange)' }}
        >
          Rentify
        </h2>

        <div>
          <div
            style={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsEye className={css.modal__icon} />
            <a
              href="https://oderen.github.io/rentify/"
              className={css.modal__link}
            >
              Visual Part
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <BiLogoGithub className={css.modal__icon} />
            <a
              href="https://github.com/Oderen/rentify"
              className={css.modal__link}
            >
              Code
            </a>
          </div>
        </div>

        <p className={css.modal__technologies}>Technologies:</p>
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
        </ul>
        <p
          className={css.modal__technologies}
          style={{ marginTop: 20, marginBottom: 10 }}
        >
          Description:
        </p>
        <p style={{ fontWeight: 400, color: 'gray' }}>
          Rentify is an application for a company that provides car rental
          services. Here you can search cars by filters and add favourite ones
          to your collection.
        </p>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
