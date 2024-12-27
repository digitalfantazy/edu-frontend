import { Link } from 'react-router-dom';
import { MENU } from '@/helpers/menu';

interface NavBarProps {
  classes: { nav: string; nav__list: string; nav__item: string; nav__link: string };
}

const NavBar: React.FC<NavBarProps> = ({ classes }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        {MENU.map(({ name, link }) => (
          <li className={classes.nav__item} key={name}>
            <Link to={link} className={classes.nav__link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
