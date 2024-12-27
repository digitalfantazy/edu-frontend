import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import { AppRouter } from './router/router';
import classes from './index.scss';
// import { useDispatch } from 'react-redux';

// import Router from './Router';
// import { checkAuth } from './modules/Auth/index';
// import { refreshToken } from './modules/Auth/index';

const App = () => {
  const isAuthenticated = true;

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(checkAuth());

  //     const intervalId = setInterval(() => {
  //       dispatch(refreshToken());
  //     }, 1740000); // 29 минут
  //     // 1740000
  //     // Функция очистки, которая будет вызвана при размонтировании компонента
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, [dispatch]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className={classes.header_wraper}>
            <Header />
          </div>
          <main className={classes.container}>
            <Suspense>
              <AppRouter isAuth={isAuthenticated} />
            </Suspense>
          </main>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default App;
