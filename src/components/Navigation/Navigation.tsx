import { NavLink } from 'react-router-dom';
import { navigationList } from './Navigation.items';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {navigationList.map(({ name, path }) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
