import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar';
import { Container } from './components/Container/Container';
const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage.jsx'),
);

// const  = lazy(()=>import())
export const App = () => (
  <Container>
    <AppBar />
    <Switch>
      <Suspense fallback="Loading">
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
      </Suspense>
      <Redirect to="/" />
    </Switch>
  </Container>
);
