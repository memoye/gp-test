import { LoginForm } from '../components/forms/login-form';

const Login = () => {
  return (
    <div className="w-screen max-w-md rounded-md bg-white px-6 py-14 shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-foreground md:text-xl">
        Login
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
