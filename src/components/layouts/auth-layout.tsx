import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="grid min-h-svh w-full items-center justify-center bg-primary px-6">
      <Outlet />
    </div>
  );
};
