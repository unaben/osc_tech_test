import { Link } from "react-router-dom";
import { IStoreItems } from "../../model/interface";
import { formatCurrency } from "../../utilities/currencyFormatter";
import GetProducts from "../../api/GetProducts";
import useSearch from "../../hook/useSearch";
import { useState } from "react";
import SearchProduct from "../SearchInput/SearchInput";
import "./ProductsList.css";

const StoreItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = GetProducts();
  const { searchData } = useSearch(products, searchTerm);
  return (
    <>
      <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="store-container">
        {searchData?.map((item: IStoreItems) => {
          const str = item.node.id;
          const id = str.split("/")[4];
          return (
            <div className="card" key={item?.node.id}>
              <div className="card-image">
                <Link to={`/details/${id}`}>
                  <img
                    src={item.node.featuredImage?.url}
                    alt={item?.node.title}
                  />
                </Link>
              </div>
              <div className="card-text">
                <h1>{item?.node.title}</h1>
                <div>
                  <p>
                    {formatCurrency(
                      parseFloat(
                        item.node.variants?.edges[0].node.price?.amount
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StoreItems;
