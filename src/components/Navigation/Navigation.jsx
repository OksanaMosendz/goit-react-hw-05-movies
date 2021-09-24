import { NavLink } from 'react-router-dom';
export const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/" className="NavLink" activeClassName="NavLink--active">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/movies"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Movies
      </NavLink>
    </li>
  </ul>
);
