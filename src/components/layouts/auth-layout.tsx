import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const AuthLayout = () => {
  const {login, isAuthenticated} = useAuth()

  return (
    <div className="grid min-h-dvh w-full items-center justify-center bg-primary px-6">
      <Outlet context={{login, isAuthenticated}} />
    </div>
  );
};
