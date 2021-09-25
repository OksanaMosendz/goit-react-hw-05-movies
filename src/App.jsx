import { Route, Switch } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage';
import { MoviesPage } from './views/MoviesPage/MoviesPage';

import { MovieDetailsPage } from './views/MovieDetailsPage/MovieDetailsPage.jsx';

import { AppBar } from './components/AppBar/AppBar';
import { Container } from './components/Container/Container';
// import { Reviews } from './views/Reviews/Reviews';
// import { Cast } from './views/Cast/Cast';

export const App = () => (
  <Container>
    <AppBar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
      {/* <Route path="/movies/:movieId/cast" exact component={Cast} />
      <Route path="/movies/:movieId/reviews" exact component={Reviews} /> */}
      <Route path="/" />
    </Switch>
  </Container>
);
