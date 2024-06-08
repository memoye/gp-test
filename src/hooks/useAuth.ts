import { useOutletContext } from 'react-router-dom'
import { RoutesGuardContext } from '../components/layouts/routes-guard'

export default function useAuth() {
  const { login, isAuthenticated } = useOutletContext<RoutesGuardContext>()

  return { isAuthenticated, login }
}