import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/product";

type Inputs = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // zod
  } = useForm<Inputs>();

  const nav = useNavigate();

  const handleAddProduct: SubmitHandler<Inputs> = (values) => {
    // call api
    addProduct(values)
      .then(() => {
        toast.success("Them san pham thanh cong");
        nav("/admin/product/list");
      })
      .catch(() => toast.error("Error"));
  };

  return (
    <div className="container2">
      <h1 className="textchu">Product Add</h1>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors?.title && (
            <small className="text-danger">{errors.title.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            {...register("price", {
              required: "Price is required",
            })}
          />
          {errors?.price && (
            <small className="text-danger">{errors.price.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputPassword1"
            {...register("image", {
              required: "Image is required",
            })}
          />
          {errors?.image && (
            <small className="text-danger">{errors.image.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors?.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Category
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
