import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

function TODO(a: number) {
  console.log('object');
}

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  // TODO(121212);
  // if (__PLATFORM__ === 'desktop') {
  //   return <div className="">IS DESKTOP</div>;
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div className="">IS MOBILE</div>;
  // }

  // if (__ENV__ === 'development') {
  //   return <div className="">IS DEV</div>;
  // }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
      <Outlet />
    </div>
  );
};

export default App;
