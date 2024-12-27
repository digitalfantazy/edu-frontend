import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
};

export default AppLayout;
