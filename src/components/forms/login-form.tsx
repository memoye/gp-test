import { Link, useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../assets/google-icon";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      <p className="flex flex-wrap font-medium text-foreground gap-2 items-center mb-4">
        Don&apos;t have an account yet?{" "}
        <Link className="min-w-max group text-action font-medium" to="signup">
          <span className="animated-underline before:bg-action">
            Create an account
          </span>
        </Link>
      </p>

      <button
        type="button"
        className="flex justify-center items-center gap-2 font-medium text-foreground/90 p-2 border w-full rounded-md"
      >
        <GoogleIcon /> <span>Sign up with Google</span>
      </button>

      <div>
        <span className="my-4 flex items-center gap-3 font-medium text-foreground-lighter text-sm before:h-px before:flex-1 before:bg-foreground-lighter before:opacity-50 before:content-[''] after:h-px after:flex-1 after:bg-foreground-lighter after:opacity-50 after:content-['']">
          OR
        </span>
      </div>

      <div>
        <label
          className="text-sm mb-1.5 inline-flex font-semibold text-foreground-light"
          htmlFor="username"
        >
          Username
        </label>
        <br />
        <input
          type="text"
          className="border bg-transparent w-full mb-1.5 p-2 focus-within:outline-primary"
        />
      </div>

      <div>
        <div className="text-sm mt-6 inline-flex items-center justify-between w-full mb-1.5 font-semibold text-foreground-light">
          <label htmlFor="username">Password</label>{" "}
          <Link className="text-action group" to="/password-recovery">
            <span className="animated-underline before:bg-action">
              Remember me
            </span>
          </Link>
        </div>
        <br />
        <input
          type="password"
          id="password"
          className="border bg-transparent w-full p-2 focus-within:outline-primary"
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

      <button className="w-full mt-8 p-2 bg-primary rounded-md text-white font-medium ">
        Login
      </button>
    </form>
  );
};
