import LoginForm from "./form";

const LoginPage = async () => {
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
