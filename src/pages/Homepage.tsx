import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { Cart } from "../types/cart";

export default function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item: Cart) => item.id === product.id);
    toast.success("Thêm thành công");
    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
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
      <div className="row mt-3 mb-4">
        {products.map((product, index) => (
          <div key={index} className="col mb-5">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="card-body">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-title">
                  <h3>{product.title}</h3>
                </div>
                <div className="card-text">
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: 15,
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 120,
                    }}
                  >
                    <span style={{ color: "black" }}>Price: </span>
                    <b>{product.price}</b>
                    <span style={{ color: "black" }}>VND</span>
                  </p>
                </div>
                <div className="card-text">
                  <p>{product.description}</p>
                </div>
                <div className="mt-auto d-flex justify-content-between">
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary me-2"
                  >
                    Xem sản phẩm
                  </Link>
                  <button
                    className="btn btn-warning"
                    // onClick={
                    //   user?.email
                    //     ? () => addToCart(product)
                    //     : () =>
                    //         alert(
                    //           "Bạn phải đăng nhập mới có thể thêm vào giỏ hàng"
                    //         )
                    // }
                  >
                    Thêm giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
