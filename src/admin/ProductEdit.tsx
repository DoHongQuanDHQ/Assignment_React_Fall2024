import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { editProductDetail, getProductDetail } from "../services/product";

type Inputs = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductEdit() {
  const { id } = useParams();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => {
        reset(data);
      })
      .catch(() => toast.error("Error"));
  }, []);

  const handleEditProduct: SubmitHandler<Inputs> = (values) => {
    if (!id) return;
    editProductDetail(id, values)
      .then((data) => {
        toast.success("Edit Success");
        nav("/admin/product/list");
      })
      .catch(() => toast.error("Error"));
  };

  return (
    <div className="container2">
      <h1 className="textchu">Product Edit</h1>
      <form onSubmit={handleSubmit(handleEditProduct)}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
