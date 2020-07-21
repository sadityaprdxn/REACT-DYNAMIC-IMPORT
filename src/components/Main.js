import React, { lazy , Suspense } from 'react';
import {
  Route
} from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Clublist = lazy(() => import('./Clublist'));
const Matchdetail = lazy(() => import('./Matchdetail'));


const Main = () => {

  return (
      <main>
          <Suspense fallback={<h2>loading...</h2>}>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/clublistpage">
              <Clublist />
          </Route>
          <Route path="/matchdetailpage">
              <Matchdetail />
          </Route>
          </Suspense>
      </main>
  );
}

export default Main;
