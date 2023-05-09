import { IStoreItems, IVariantProduct } from "../model/interface";

export const findItem = (products: IStoreItems[], id: string) => {
  const foundProduct = products.find(
    (product: IStoreItems) => product.node.id === id
  );
  return foundProduct;
};

export const allCalculation = (cartStock: IVariantProduct[]) => {
  const itemQty = cartStock.reduce((acc, item) => {
    return acc + item.quantity!;
  }, 0);
  const totalItemPrices = cartStock.reduce(
    (accu, item) =>
      (accu +=
        parseFloat(item?.variants.edges[0]?.node.price.amount!) *
        item.quantity!),
    0
  );
  const tax = totalItemPrices * 0.14;
  const shipping = totalItemPrices > 50 ? 0 : 5.2;
  const grandTotal = totalItemPrices + shipping + tax;

  return { itemQty, totalItemPrices, tax, shipping, grandTotal };
};

export const addProduct = (
  product: IVariantProduct | undefined,
  cartItems: IVariantProduct[],
  setCartItems: React.Dispatch<React.SetStateAction<IVariantProduct[]>>
) => {
  const exist = cartItems.find((item) => item.id === product?.id);
  if (exist) {
    setCartItems(
      cartItems.map((item) => {
        return item.id === product?.id
          ? { ...exist, quantity: exist?.quantity! + 1 }
          : item;
      })
    );
  } else {
    setCartItems((prevItem) => [...prevItem, { ...product!, quantity: 1 }]);
  }
};

export const removeProduct = (
  product: IVariantProduct | undefined,
  cartItems: IVariantProduct[],
  setCartItems: React.Dispatch<React.SetStateAction<IVariantProduct[]>>
) => {
  const exist = cartItems.find((item) => item.id === product?.id);
  if (exist) {
    if (exist.id === product?.id && exist?.quantity! <= 1) {
      setCartItems(
        cartItems.filter((item) => {
          return item.id !== product.id;
        })
      );
    } else {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product?.id
            ? { ...exist, quantity: exist.quantity! - 1 }
            : item;
        })
      );
    }
  }
};
