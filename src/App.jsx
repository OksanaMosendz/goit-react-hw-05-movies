import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage';
import { MoviesPage } from './views/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './views/MovieDetailsPage/MovieDetailsPage.jsx';
import { AppBar } from './components/AppBar/AppBar';
import { Container } from './components/Container/Container';

export const App = () => (
  <Container>
    <AppBar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
      <Redirect to="/" />
    </Switch>
  </Container>
);
