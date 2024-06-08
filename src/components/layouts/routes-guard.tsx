import { useState } from 'react';
import {  Outlet } from 'react-router-dom';

export type RoutesGuardContext = {
  isAuthenticated: boolean;
  login: () => void;
};

const RoutesGuard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
  }

  return (
    <Outlet context={{ isAuthenticated, login } satisfies RoutesGuardContext} />
  );
};

export default RoutesGuard;
