import { Link } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import classes from './Header.module.scss';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { formatName } from '@/utils/utils';
// import { useDispatch, useSelector } from 'react-redux';

// import LogoutIcon from '@mui/icons-material/Logout';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import Logo from '../../UI/Logo';
// import NavBar from '../navbar/NavBar';
// import SignInButton from '../../UI/SignInButton';
// import { logout } from '../../modules/Auth/index';

const Header = () => {
  //   const user = useSelector(state => state.auth.user);
  //   // console.log(user)
  //   const dispatch = useDispatch();

  const user = {
    // Временно
    name: 'Артем',
  };

  return (
    <header>
      <div className={classes.header__inner}>
        <Logo classes={classes} />

        <NavBar classes={classes} />

        <div className={classes.auth_logo}>
          {user ? (
            <>
              <Link to="/profile">
                <div className={classes.hello_message}>
                  <UserOutlined className={classes.profile_icon} />
                  {formatName(user.name)}
                </div>
              </Link>

              {/* <LogoutIcon onClick={() => dispatch(logout())} className="logout" sx={{ color: 'white' }} /> */}
              <LoginOutlined className={classes.logout} style={{ fontSize: '22px', color: 'white' }} />
            </>
          ) : (
            // <SignInButton />
            ''
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
