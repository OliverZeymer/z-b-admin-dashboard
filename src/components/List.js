import { useEffect, useState } from "react";
import { BsTruck, BsPrinter, BsTrash, BsPencilSquare } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import useDynamicFetch from "../hooks/useDynamicFetch";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import searchContext from "../contexts/searchContext";
import { getFilteredItems } from "../functions/getFilteredItems";
const List = ({ data, type }) => {
  let location = useLocation();

  const [mobile, setMobile] = useState();
  const { search, setSearch } = useContext(searchContext);
  useEffect(() => {
    setSearch("");
  }, [location]);
  window.addEventListener("resize", (event) => {
    if (event.target.innerWidth <= 640) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  useEffect(() => {
    if (window.innerWidth <= 640) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  const { fetchData, isLoading, error } = useDynamicFetch({
    params: `/${type}`,
    method: "GET",
  });

  const filteredItems = getFilteredItems(search, fetchData, isLoading);
  console.log(filteredItems);
  const placeholder =
    type === "orders"
      ? "Enter Order ID, Date or Customer"
      : type === "customers"
      ? "Enter Customer ID, Name, Phone or Address"
      : type === "products"
      ? "Enter Product ID or Product Name"
      : "";
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-4xl hidden sm:block capitalize text-primary-text mt-12">{type}</h2>
      <Search placeholder={placeholder} />
      {!mobile ? (
        <table className="mt-12 flex justify-center sm:table w-full shadow-xl sm:shadow bg-primary-theme text-primary-text rounded-xl sm:rounded">
          <thead className="text-primary-text border-gray text-left">
            <tr>
              <th className="hidden sm:table"></th>
              {data?.headings?.map((heading, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left flex flex-col whitespace-nowrap overflow-hidden text-ellipsis sm:table-cell font-medium"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-left">
            {error && error}
            {!isLoading ? (
              filteredItems?.map((item, index) => (
                <tr className="flex flex-col sm:table-row justify-between h-full font-medium" key={index}>
                  <td className="pl-6 whitespace-no-wrap sm:border-b hidden sm:table-cell border-gray-200">
                    <input aria-label="checkbox" className="outline-none border-none h-4 w-4 " type="checkbox" />
                  </td>
                  <td
                    className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200"
                    onClick={() => {
                      if (type === "products") {
                        navigate(`/product/${item.id}`);
                      }
                    }}
                  >
                    <p className="cursor-pointer text-primary-color">{item.id}</p>
                  </td>
                  <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                    <div className="text-sm leading-5 ">
                      <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {type === "customers" || "products" ? item.name : ""}
                        {type === "orders" && item.orderDate}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                    {type === "products" && <p>{item.price} $</p>}
                    {type === "customers" && <p className="whitespace-nowrap overflow-hidden text-ellipsis">{item.phone}</p>}
                    {type === "orders" && (
                      <div className="block sm:flex items-center">
                        <div className="text-sm leading-5 font-medium">
                          <p>{item.customerName}</p>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                    <div className="text-sm leading-5 ">
                      <p>
                        {type === "orders" && parseFloat(item.subTotal).toFixed(2) + "$"}
                        {type === "customers" && item.orderAmount}
                        {type === "products" && item.stock}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                    {type === "orders" && (
                      <>
                        <span className="px-2 inline-flex leading-5 font-semibold rounded-full">
                          {item.parcelStatus === false ? (
                            <GoPackage size="24" color="#FF0000" title="Not Packaged" />
                          ) : (
                            <GoPackage size="24" color="#00ED00" title="Packaged Successfully" />
                          )}
                        </span>
                        <span className=" inline-flex leading-5 font-semibold rounded-full">
                          {item.shippingStatus === false ? (
                            <BsTruck size="24" color="#FF0000" title="Not Shipped" />
                          ) : (
                            <BsTruck size="24" color="#00ED00" title="Shipped Successfully" />
                          )}
                        </span>
                      </>
                    )}
                    {type === "customers" && (
                      <p
                        className="text-ellipsis whitespace-nowrap overflow-hidden w-20 sm:w-56"
                        title={item.address.address + ", " + item.address.city + ", " + item.address.postalCode + ", " + item.address.country}
                      >
                        {item.address.address}, {item.address.city}, {item.address.postalCode}, {item.address.country}
                      </p>
                    )}
                    {type === "products" && <p>{item.sold}</p>}
                  </td>
                  <td className="hidden sm:table-cell px-6 py-3 whitespace-no-wrap sm:border-b text-right border-gray-200">
                    <span className="pr-2 inline-flex leading-5 font-semibold rounded-full">
                      <BsPrinter size="24" />
                    </span>
                    <span className="pr-2 inline-flex leading-5 font-semibold rounded-full">
                      <BsPencilSquare
                        className="cursor-pointer"
                        size="24"
                        onClick={() => {
                          if (type === "products") {
                            navigate(`/product/${item.id}`);
                          }
                        }}
                      />
                    </span>
                    <span className="pr-2 inline-flex leading-5 font-semibold rounded-full">
                      <BsTrash size="24" />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <p>Loading...</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        // MOBILE
        //
        //
        //
        <div className="flex flex-col gap-4 mt-8 mb-20 shadow-normal sm:shadow py-6 bg-primary-theme rounded-xl">
          <h2 className="text-primary-text text-center text-3xl my-2 capitalize">{type}</h2>
          {!isLoading ? (
            filteredItems?.map((item, index) => (
              <table
                key={index}
                className="flex border-b pb-4 border-gray-200 justify-center sm:table w-full last:border-none text-primary-text sm:rounded"
              >
                <thead className="text-primary-text border-gray text-left">
                  <tr>
                    {data?.headings?.map((heading, index) => (
                      <th key={index} className="px-6 py-3 text-left flex flex-col sm:table-cell font-medium">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="text-left">
                  {error && error}

                  <tr className="flex flex-col sm:table-row justify-between h-full font-medium" key={index}>
                    <td className="pl-6 whitespace-no-wrap sm:border-b hidden sm:table-cell border-gray-200">
                      <input aria-label="checkbox" className="outline-none border-none h-4 w-4 " type="checkbox" />
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                      <p className="cursor-pointer text-primary-color">{item.id}</p>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                      <div className="text-sm leading-5 ">
                        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-24">
                          {type === "customers" || "products" ? item.name : ""}
                          {type === "orders" && item.orderDate}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                      {type === "products" && <p>{item.price} $</p>}
                      {type === "customers" && <p className="whitespace-nowrap overflow-hidden text-ellipsis w-24">{item.phone}</p>}
                      {type === "orders" && (
                        <div className="block sm:flex items-center">
                          <div className="text-sm leading-5 font-medium">
                            <p>{item.customerName}</p>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                      <div className="text-sm leading-5 ">
                        <p>
                          {type === "orders" && parseFloat(item.subTotal).toFixed(2) + "$"}
                          {type === "customers" && item.orderAmount}
                          {type === "products" && item.stock}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap sm:border-b border-gray-200">
                      {type === "orders" && (
                        <>
                          <span className="px-2 inline-flex leading-5 font-semibold rounded-full">
                            {item.parcelStatus === false ? (
                              <GoPackage size="24" color="#FF0000" title="Not Packaged" />
                            ) : (
                              <GoPackage size="24" color="#00ED00" title="Packaged Sucessfully" />
                            )}
                          </span>
                          <span className=" inline-flex leading-5 font-semibold rounded-full">
                            {item.shippingStatus === false ? (
                              <BsTruck size="24" color="#FF0000" title="Not Shipped" />
                            ) : (
                              <BsTruck size="24" color="#00ED00" title="Shipped Successfully" />
                            )}
                          </span>
                        </>
                      )}
                      {type === "customers" && (
                        <p
                          className="text-ellipsis whitespace-nowrap overflow-hidden w-20 sm:w-[280px]"
                          title={item.address.address + ", " + item.address.city + ", " + item.address.postalCode + ", " + item.address.country}
                        >
                          {item.address.address}, {item.address.city}, {item.address.postalCode}, {item.address.country}
                        </p>
                      )}
                      {type === "products" && <p>{item.sold}</p>}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </>
  );
};

export default List;
