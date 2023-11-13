import React, { useState } from 'react';
import css from './Projects.module.css';
import Reveal from 'components/Reveal';

import Project from './Project/Project';
import ToggleButtons from './ToggleButtons';

import { BiSolidServer } from 'react-icons/bi';
import { PiTelevisionDuotone } from 'react-icons/pi';
import { AiOutlineMobile } from 'react-icons/ai';
import { AiFillCar } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

const Projects = ({ setIsModalOpen }) => {
  const [status, setStatus] = useState('individual');

  return (
    <section className={css.projects}>
      <Reveal width="100%">
        <h2 className={css.projects__title}>Projects</h2>
      </Reveal>

      <Reveal>
        <ToggleButtons status={status} setStatus={setStatus} />
      </Reveal>

      {status === 'group' && (
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Reveal isProject={true}>
            <Project
              imgName={'goose'}
              setIsModalOpen={setIsModalOpen}
              title={'Goose Track'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for managing tasks'}
            />
          </Reveal>
          <Reveal isProject={true}>
            <Project
              imgName={'houzz'}
              setIsModalOpen={setIsModalOpen}
              title={'Houzz'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for home-related stuff'}
            />
          </Reveal>
          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={'filmoteka'}
              title={'Filmoteka'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for movie search'}
            />
          </Reveal>

          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={'ice'}
              title={'Ice Cream'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for choosing an ice cream'}
            />
          </Reveal>
        </ul>
      )}

      {status === 'individual' && (
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={''}
              Icon={AiFillCar}
              title={'Rentify'}
              indicator={'In progress'}
              indicatorColor={'rgb(152, 5, 152)'}
              description={'Web application for car rental services'}
            />
          </Reveal>
          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={''}
              Icon={AiOutlineMobile}
              title={'Flopify'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for sharing photos'}
            />
          </Reveal>

          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={''}
              Icon={PiTelevisionDuotone}
              title={'TV App (React)'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for searching TV Shows'}
            />
          </Reveal>

          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={''}
              Icon={PiTelevisionDuotone}
              title={'TV App (React Native)'}
              indicator={'In progress'}
              indicatorColor={'rgb(152, 5, 152)'}
              description={'Web application for searching TV Shows'}
            />
          </Reveal>

          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={''}
              Icon={FaPhoneAlt}
              title={'Phonebook'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Web application for managing phone contacts'}
            />
          </Reveal>

          <Reveal isProject={true}>
            <Project
              setIsModalOpen={setIsModalOpen}
              imgName={''}
              Icon={BiSolidServer}
              title={'Node REST API'}
              indicator={'Done'}
              indicatorColor={'green'}
              description={'Backend for managing phone contacts'}
            />
          </Reveal>
        </ul>
      )}
    </section>
  );
};

export default Projects;
