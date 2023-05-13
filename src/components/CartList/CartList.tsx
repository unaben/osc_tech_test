import React, { FC } from "react";
import { IVariantProduct } from "../../model/interface";
import GetProducts from "../../api/GetProducts";
import { formatCurrency } from "../../utilities/currencyFormatter";
import { addProduct, findItem, removeProduct } from "../../helper/helper";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./CartList.css";
import { message } from "../../translate/ENT";

type ICartListProps = {
  item: IVariantProduct;
  cartStock: IVariantProduct[];
  setCartStock: React.Dispatch<React.SetStateAction<IVariantProduct[]>>;
  onDelete: (id: string) => void;
};

const CartList: FC<ICartListProps> = ({
  item,
  cartStock,
  setCartStock,
  onDelete,
}) => {
  const products = GetProducts();
  const foundProduct = findItem(products, item.id);

  return (
    <div className="cartList-frame">
      <div className="image-container">
        <img src={item?.featuredImage.url} alt={item.title} />
      </div>
      <div className="item-container">
        <div className="item-frame">
          <p>
            {message.product} : {item?.title}{" "}
          </p>
          <p>
            {message.id} : {item?.id}
          </p>
          <p>
            {message.price} : {""}
            {formatCurrency(
              parseFloat(
                foundProduct?.node.variants.edges[0]?.node.price.amount!
              )
            )}
          </p>
        </div>
        <div className="btn-icon-container">
          <div className="btn-icon-wrapper">
            <button
              onClick={() => removeProduct(item, cartStock, setCartStock)}
              className="qty-btn gap"
            >
              -
            </button>
            <span className="qty-btn gap">{item.quantity}</span>
            <button
              onClick={() => addProduct(item, cartStock, setCartStock)}
              className="qty-btn gap"
            >
              +
            </button>
          </div>
          <i className="delete-icon" onClick={() => onDelete(item.id)}>
            <RiDeleteBin6Line />
          </i>
        </div>
      </div>
    </div>
  );
};

export default CartList;
