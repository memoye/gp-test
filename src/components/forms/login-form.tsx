import { Link, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../../assets/google-icon';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const remember_me = formData.get('remember_me') as string;

    if (!username || !password) {
      toast.error(
        'Please fill in all fields. Enter any username and password',
        {
          duration: 2000,
        }
      );
      return;
    }

    toast.promise(login({ username, password, remember_me }), {
      error: 'Login unsuccessful',
      loading: 'Logging in...',
      success: 'Welcome, ' + username,
    });
  }

  useEffect(() => {
    if (isAuthenticated) {
      toast("You're already logged in.");
      navigate('/');
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 gap-2 text-balance text-xs font-medium text-foreground">
        Don&apos;t have an account yet?{' '}
        <Link className="group min-w-max font-medium text-action" to="signup">
          <span className="animated-underline before:bg-action">
            Create an account
          </span>
        </Link>
      </p>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-md border p-2 text-sm font-medium text-foreground/90"
      >
        <GoogleIcon /> <span>Sign up with Google</span>
      </button>

      <div>
        <span className="my-4 flex items-center gap-3 text-sm font-medium text-foreground-lighter before:h-px before:flex-1 before:bg-foreground-lighter before:opacity-50 before:content-[''] after:h-px after:flex-1 after:bg-foreground-lighter after:opacity-50 after:content-['']">
          OR
        </span>
      </div>

      <div>
        <label
          className="mb-1.5 inline-flex text-sm font-semibold text-foreground-light"
          htmlFor="username"
        >
          Username
        </label>
        <br />
        <input
          id="username"
          name="username"
          type="text"
          className="mb-1.5 w-full border bg-transparent p-2 focus-within:outline-primary"
        />
      </div>

      <div>
        <div className="mb-1.5 mt-6 inline-flex w-full items-center justify-between text-sm font-semibold text-foreground-light">
          <label htmlFor="username">Password</label>{' '}
          <Link className="group text-action" to="/password-recovery">
            <span className="animated-underline text-xs font-medium before:bg-action">
              Remember me
            </span>
          </Link>
        </div>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border bg-transparent p-2 focus-within:outline-primary"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          value={'yes'}
          className="rounded-sm border-foreground"
          id="remember_me"
          name="remember_me"
        />
        <label
          className="text-sm font-medium text-foreground-light"
          htmlFor="remember_me"
        >
          Keep me logged in
        </label>
      </div>

      <button className="mt-8 w-full rounded-md bg-primary p-2 font-medium text-white">
        Login
      </button>
    </form>
  );
};
