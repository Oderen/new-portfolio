import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import HomePage from 'pages/HomePage';
// import SecondPage from 'pages/SecondPage';
// import ThirdPage from 'pages/ThirdPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
