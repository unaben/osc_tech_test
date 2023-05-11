import { Link, useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../../utilities/currencyFormatter";
import GetProduct from "../../api/GetProduct";
import { IVariantProduct } from "../../model/interface";
import { FC } from "react";
import { addProduct, removeProduct } from "../../helper/helper";
import "./ProductDetail.css";
import { message } from "../../translate/ENT";

type IProductDetailsProps = {
  cartStock: IVariantProduct[];
  setCartStock: React.Dispatch<React.SetStateAction<IVariantProduct[]>>;
};

const ProductDetail: FC<IProductDetailsProps> = ({
  cartStock,
  setCartStock,
}) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const id = `gid://shopify/Product/${productId}`;

  const product = GetProduct(productId as string);
  const productQty = cartStock.find((item) => item.id === id)?.quantity;

  const handleAddProduct = () => {
    addProduct(product, cartStock, setCartStock);
    navigate("/cart");
  };

  return (
    <>
      <div className="detail-container">
        <button className="upper btn bg">
          <Link to="/">{message.continueShopping}</Link>
        </button>
      </div>
      <div className="product-container">
        <div className="product-image">
          <img src={product?.featuredImage?.url} alt={product?.title} />
        </div>
        <div className="product-text">
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <div>
            <p>
              {formatCurrency(
                parseFloat(product?.variants.edges[0].node.price.amount!)
              )}
              <span>{product?.variants.edges[0].node.title}</span>
            </p>
          </div>
          <div className="btn-details-container">
            <button
              onClick={() => removeProduct(product, cartStock, setCartStock)}
              disabled={!productQty}
              className="dec-btn gap"
            >
              -
            </button>
            <span className="qty gap">{productQty || 0}</span>
            <button
              onClick={() => addProduct(product, cartStock, setCartStock)}
              className="inc-btn gap"
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => handleAddProduct()}
              className="add-btn upper"
            >
              {message.addToCart}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
