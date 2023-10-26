import React, { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import Modal from '../../components/Modal/Modal';
import Header from 'components/Header';
import ProgressLine from 'components/ProgressLine';
import HeroDecoration from 'components/HeroDecoration';
import Hero from 'components/Hero/Hero';
import About from 'components/About';
import Projects from 'components/Projects';

import Reveal from 'components/Reveal';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState('');
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeroDecoration />
      <ProgressLine scrollTop={scrollTop} />
      <Header />
      <Hero />
      <About />
      <div className={css['projects-container']} id="projects">
        <div className="container">
          <Projects setIsModalOpen={setIsModalOpen} />
        </div>
      </div>

      <div className={css['experience-container']}>
        <div className="container" style={{ position: 'relative' }}>
          <section className={css.experience} style={{ color: 'white' }}>
            <Reveal width={'100%'}>
              <h2 className={css.experience__title}>Experience</h2>
            </Reveal>

            <Reveal width="900px">
              <div
                style={{
                  display: 'flex',
                  marginLeft: '20%',
                  marginRight: 'auto',
                  height: 'auto',
                }}
              >
                <div className={css.a}>
                  <div className={css.circle}></div>
                  <div className={css.line}></div>
                  <div className={css.circle}></div>
                  <div className={css.line}></div>
                  <div className={css.circle}></div>
                  <div className={css.line}></div>
                  <div className={css.circle}></div>
                  <div className={css.line} style={{ height: '220px' }}></div>
                  <div className={css.circle}></div>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 'fit-content',

                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div className={css.card}>
                    <h3 className={css.card__title}>
                      Internship at Baza Trainee
                    </h3>
                    <p className={css.card__time}>Ongoing</p>
                  </div>

                  <div className={css.card} style={{ marginTop: 87 }}>
                    <h3 className={css.card__title}>Goose Track</h3>
                    <p className={css.card__time}>August - September</p>
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
                        <p className={css.stack__technology}>GitHub/Git</p>
                      </li>
                    </ul>
                    <p className={css.card__text}>
                      Developed HTML/CSS markup for calendar component. Also I
                      worked with a comprehensive login system for managing
                      calendar events and dates
                    </p>
                  </div>

                  <div className={css.card} style={{ marginTop: 80 }}>
                    <h3 className={css.card__title}>Filmoteka</h3>
                    <p className={css.card__time}>May - June</p>
                    <ul className={css.stack__list}>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>HTML</p>
                      </li>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>SCSS</p>
                      </li>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>JavaScript</p>
                      </li>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>GitHub/Git</p>
                      </li>
                    </ul>

                    <p className={css.card__text}>
                      Developed responsive markup and implemented logic related
                      to library section
                    </p>
                  </div>

                  <div className={css.card} style={{ marginTop: 80 }}>
                    <h3 className={css.card__title}>Ice Cream</h3>
                    <p className={css.card__time}>February - March</p>
                    <ul className={css.stack__list}>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>HTML</p>
                      </li>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>SCSS</p>
                      </li>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>JavaScript</p>
                      </li>
                      <li className={css.stack__item}>
                        <p className={css.stack__technology}>GitHub/Git</p>
                      </li>
                    </ul>

                    <p className={css.card__text}>
                      Worked with responsive markup and component stylization,
                      and I also created a modal window with video integration
                    </p>
                  </div>

                  <div className={css.card} style={{ marginTop: 80 }}>
                    <h3 className={css.card__title}>Full Stack Developer</h3>
                    <p className={css.card__time}>Sep 2022 - Sep 2023</p>
                    <p className={css.card__text}>
                      Completed 1-year GoIT courses
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </div>

      <div className={css['contact-container']}>
        <div className="container">
          <section className={css.contact}>
            <Reveal width={'100%'}>
              <h2 className={css.contact__title}>Let's connect</h2>
            </Reveal>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 140,
              }}
            >
              <Reveal>
                <div className={css.socials}>
                  <div className={css.socials__circle}>
                    <AiOutlineMail className={css.socials__icon} />
                  </div>
                  <p className={css.email}>oleksandr.deren02@gmail.com</p>
                </div>
              </Reveal>
              <Reveal>
                <div className={css.socials} style={{ marginTop: 20 }}>
                  <div className={css.socials__circle}>
                    <BiLogoLinkedin className={css.socials__icon} />
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css.socials__link}
                    href="https://www.linkedin.com/in/oleksandr-deren/"
                  >
                    https://www.linkedin.com/in/oleksandr-deren/
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div className={css.socials} style={{ marginTop: 20 }}>
                  <div className={css.socials__circle}>
                    <BiLogoTelegram className={css.socials__icon} />
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css.socials__link}
                    href="https://t.me/OleksandrDeren"
                  >
                    https://t.me/OleksandrDeren
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div className={css.socials} style={{ marginTop: 20 }}>
                  <div className={css.socials__circle}>
                    <BiLogoGithub className={css.socials__icon} />
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css.socials__link}
                    href="https://github.com/Oderen"
                  >
                    https://github.com/Oderen
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>

      {isModalOpen !== '' && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen('')}
        />
      )}
    </>
  );
};

export default HomePage;
