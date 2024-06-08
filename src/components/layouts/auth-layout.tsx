import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-svh w-full grid items-center justify-center px-6 bg-primary">
      <Outlet />
    </div>
  );
};
