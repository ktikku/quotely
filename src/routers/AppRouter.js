import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QODPage from '../components/QODPage';
import LikedQuotesPage from '../components/LikedQuotesPage';
import SearchPage from '../components/SearchPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={QODPage} exact={true} />
          <Route path="/likes" component={LikedQuotesPage} exact={true} />
          <Route path="/search" component={SearchPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;