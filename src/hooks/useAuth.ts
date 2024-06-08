import { useOutletContext } from 'react-router-dom';
import { RoutesGuardContext } from '../components/layouts/routes-guard';

export default function useAuth() {
  const context = useOutletContext<RoutesGuardContext>();

  return context;
}
