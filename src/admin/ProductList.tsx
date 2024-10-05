import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteProduct, getAllProduct } from "../services/product";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("Thanh cong");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);
  const handleDeleteProduct = (id: number) => {
    if (window.confirm("Xoa that ko?")) {
      deleteProduct(id)
        .then(() => {
          toast.success(`Xoa san pham: ${id} Xoa Thanh Cong`);
          // navigate(0);
          location.reload();
        })
        .catch((error) => toast.error("Error: " + error.message));
    }
  };

  return (
    <div className="container">
      <h1>Admin</h1>
      <Link to={"/admin/product/add"}>
        <button className="btn btn-primary">Thêm sản phẩm</button>
      </Link>
      <table className="table table-bordered ">
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img src={product.image} style={{ width: 100, height: 100 }} />
              </td>
              <td>{product.description}</td>
              <td>{product.price} VND</td>
              <td>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link
                  to={`/admin/product/edit/${product.id}`}
                  className="btn btn-success"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
