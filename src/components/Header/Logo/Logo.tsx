import { Link } from 'react-router-dom';

interface LogoProps {
  classes: { logo: string };
}

const Logo: React.FC<LogoProps> = ({ classes }) => {
  return (
    <Link className={classes.logo} to="/">
      EduPlatform
    </Link>
  );
};

export default Logo;
