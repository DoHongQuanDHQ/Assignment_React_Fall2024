import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../services/product";
import { Product } from "../types/Product";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => setProduct(data))
      .catch((error) => toast.error("Error: " + error.message));
  }, [id]);

  return (
    <div className="container3">
      <h2 className="text-center my-4" style={{ color: "red" }}>
        Chi tiết sản phẩm
      </h2>
      {product && ( // @if
        <div className="row1 mb-5">
          <div className="col-3">
            <img src={product.image} className="card-img" alt="" />
          </div>
          <div className="col-5">
            <h5 className="card-titl">{product.title}</h5>
            <p className="card-tet">{product.description}</p>
            <p className="card-tex">Price: {product.price} VND</p>
          </div>
        </div>
      )}
    </div>
  );
}
