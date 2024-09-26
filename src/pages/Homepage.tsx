import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";

export default function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const truncateDescription = (description, length) => {
    if (description.length > length) {
      return description.substring(0, length) + "..."; // Cắt ngắn và thêm '...'
    }
    return description; // Trả về mô tả nguyên vẹn
  };

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("Thanh cong");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1 className="textchu">Trang chủ</h1>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col mt-2 ">
            <div className="card h-100" style={{ width: "18rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt="..."
                // style={{
                //   position: "absolute",
                //   top: "50%",
                //   left: "50%",
                //   width: "auto",
                //   height: "100%",
                //   transform: "translate(-50%, -50%)",
                //   objectFit: "cover",
                // }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {truncateDescription(product.description, 100)}{" "}
                  {/* Gọi hàm để rút ngắn mô tả */}
                </p>
                <p className="card-text" style={{ color: "red" }}>
                  Price: {product.price}
                  <span>VND</span>
                </p>
                <div className="mt-auto d-flex justify-content-between">
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary me-2"
                  >
                    Xem sản phẩm
                  </Link>
                  <Link
                    to={`/admin/product/${product.id}`}
                    className="btn btn-warning"
                  >
                    Thêm giỏ Hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
