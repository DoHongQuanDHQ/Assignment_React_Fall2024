import { useForm } from "react-hook-form";
import { User } from "../types/auth";

type AuthForm = {
  isRegister?: boolean;
  isLogin?: boolean;
  onSubmit: (values: User) => void;
};

export function AuthForm({ isRegister, isLogin, onSubmit }: AuthForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container2">
        {isRegister && (
          <div className="from">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors?.username && (
              <small className="text-danger">{errors.username.message}</small>
            )}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors?.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 Characters required",
              },
            })}
          />
          {errors?.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        {isRegister && (
          <div className="from">
            <label htmlFor="ConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              id="ConfirmPassword"
              {...register("ConfirmPassword", {
                required: "ConfirmPassword is required",
              })}
            />
            {errors?.ConfirmPassword && (
              <small className="text-danger">
                {errors.ConfirmPassword.message}
              </small>
            )}
          </div>
        )}
        {isRegister && (
          <p>
            Already a member ?
            <a href="/login" className="login">
              Log in
            </a>
          </p>
        )}
        {isLogin && (
          <p>
            Not Registered ?
            <a href="/register" className="create">
              {" "}
              Create an account
            </a>
          </p>
        )}
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </div>
    </form>
  );
}
