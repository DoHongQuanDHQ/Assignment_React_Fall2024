import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";
import { loginUser, User } from "../services/auth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const nav = useNavigate();

  const handleLogin: SubmitHandler<User> = (values) => {
    loginUser(values)
      .then(({ data }) => {
        toast.success("Đăng nhập thành công !");
        localStorage.setItem("token", data.accessToken);
        nav("/");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} isLogin />
    </div>
  );
}
