import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";
import { registerUser, User } from "../services/auth";

export default function Register() {
  const nav = useNavigate();

  const handleRegister: SubmitHandler<User> = (values) => {
    registerUser(values)
      .then(() => {
        toast.success("Đăng ký thành công, chuyển sang đăng nhập");
        nav("/login");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <AuthForm onSubmit={handleRegister} isRegister />
    </div>
  );
}
