import { useNavigate, useOutletContext } from 'react-router-dom';
import { RoutesGuardContext } from '../components/layouts/routes-guard';
import { useEffect } from 'react';

const useGuard = () => {
  const { login, isAuthenticated } = useOutletContext<RoutesGuardContext>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');

    // eslint-disable-next-line
  }, [isAuthenticated]);

  return { isAuthenticated, login };
};

export default useGuard;
