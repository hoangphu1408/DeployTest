import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from '~/components/DefaultLaylout';
import { publicRoutes } from '~/routes';
import Home from './pages/Home';
function App(props) {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
              }
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
