import { Link, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../../assets/google-icon';
import useAuth from '../../hooks/useAuth';

export const LoginForm = () => {
  const navigate = useNavigate();
  const {login} = useAuth()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login()
        navigate('/');
      }}
    >
      <p className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-foreground">
        Don&apos;t have an account yet?{' '}
        <Link className="group min-w-max font-medium text-action" to="signup">
          <span className="animated-underline before:bg-action">
            Create an account
          </span>
        </Link>
      </p>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-md border p-2 font-medium text-foreground/90"
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
          type="text"
          className="mb-1.5 w-full border bg-transparent p-2 focus-within:outline-primary"
        />
      </div>

      <div>
        <div className="mb-1.5 mt-6 inline-flex w-full items-center justify-between text-sm font-semibold text-foreground-light">
          <label htmlFor="username">Password</label>{' '}
          <Link className="group text-action" to="/password-recovery">
            <span className="animated-underline before:bg-action">
              Remember me
            </span>
          </Link>
        </div>
        <br />
        <input
          type="password"
          id="password"
          className="w-full border bg-transparent p-2 focus-within:outline-primary"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input type="checkbox" id="save_user" name="save_user" />
        <label
          className="text-sm font-medium text-foreground-light"
          htmlFor="save_user"
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
