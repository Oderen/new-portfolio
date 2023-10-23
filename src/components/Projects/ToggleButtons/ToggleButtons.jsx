import React from 'react';
import css from './ToggleButtons.module.css';

const ToggleButtons = ({ status, setStatus }) => {
  return (
    <div className={css.toggleButtons}>
      <button
        onClick={() => setStatus('individual')}
        type="button"
        className={css.toggleButtons__btn}
        style={{
          color: status === 'individual' ? 'white' : 'var(--orange)',
        }}
      >
        Individual
      </button>
      <button
        onClick={() => setStatus('group')}
        type="button"
        className={css.toggleButtons__btn}
        style={{
          color: status === 'group' ? 'white' : 'var(--orange)',
        }}
      >
        Group
      </button>
    </div>
  );
};

export default ToggleButtons;
