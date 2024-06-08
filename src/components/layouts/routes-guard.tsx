import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet, useNavigate } from 'react-router-dom';

export type UserData = {
  username: string;
  password: string;
  remember_me: string | null;
};

export type RoutesGuardContext = {
  isAuthenticated: boolean;
  login: (userData: UserData) => Promise<void>;
  userData: Omit<UserData, 'password'> | null;
  logout: () => Promise<void>;
};

const RoutesGuard = () => {
  const user = sessionStorage.getItem('userData') as UserData | null;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(user);

  async function login(userData: {
    username: string;
    password: string;
    remember_me: string | null;
  }) {
    const myPromise = new Promise((resolve) => setTimeout(resolve, 1000));

    await myPromise.then(() => {
      if (!userData.password || !userData.username) {
        toast.error('Please fill in all fields');
        return;
      }

      sessionStorage.setItem('userData', JSON.stringify(userData));
      setIsAuthenticated(true); // Update the isAuthenticated state here
      setUserData(userData); // Update the userData state here
    });

    // if (isAuthenticated) window.location.reload(); // Remove this line or uncomment it if needed
  }

  async function logout() {
    const myPromise = new Promise((resolve) => setTimeout(resolve, 1000));
    myPromise.then(() => {
      sessionStorage.removeItem('userData');
      setIsAuthenticated(false);
    });
  }

  useEffect(() => {
    if (userData) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    //eslint-disable-next-line
  }, [userData]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('userData') as string);

    if (user) {
      setUserData(user);
      navigate('/');
    } else {
      navigate('/login');
    }

    //eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <Outlet
        context={
          {
            isAuthenticated,
            login,
            logout,
            userData,
          } satisfies RoutesGuardContext
        }
      />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default RoutesGuard;
