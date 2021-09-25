import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => (
  <>
    <ul className={css.NavList}>
      <li className={css.NavLi}>
        <NavLink
          to="/"
          className={css.NavLink}
          activeClassName={css.NavLinkActive}
          exact
        >
          Home
        </NavLink>
      </li>
      <li className={css.NavLi}>
        <NavLink
          to="/movies"
          className={css.NavLink}
          activeClassName={css.NavLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <hr />
  </>
);
