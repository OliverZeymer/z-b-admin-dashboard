import { BsTruck, BsPrinter, BsTrash, BsPencilSquare } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import useDynamicFetch from "../hooks/useDynamicFetch";
const List = ({ data, type }) => {
  const { fetchData, isLoading, error } = useDynamicFetch({
    params: `/${type}`,
    method: "GET",
  });
  return (
    <table className="w-full shadow bg-primary-theme text-primary-text rounded">
      <thead className="text-primary-text border-gray text-left">
        <tr>
          <th></th>
          {data?.headings?.map((heading, index) => (
            <th key={index} className="px-6 py-3 text-left font-medium">
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-primary-theme text-base">
        {error && error}
        {!isLoading ? (
          fetchData?.map((item, index) => (
            <tr key={index}>
              <td className="pl-6 whitespace-no-wrap border-b border-gray-200">
                <input
                  className="outline-none border-none h-4 w-4 "
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p className="cursor-pointer text-primary-color">{item.id}</p>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 ">
                  {type === "customers" || "products" ? item.name : ""}
                  {type === "orders" && item.orderDate}
                </div>
              </td>
              <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium">
                      <p>
                        {type === "orders" && item.customerName}
                        {type === "customers" && item.phone}
                        {type === "products" && item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 ">
                  <p>
                    {type === "orders" &&
                      parseFloat(item.subTotal).toFixed(2) + "$"}
                    {type === "customers" && item.orderAmount}
                    {type === "products" && item.stock}
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {type === "orders" && (
                  <>
                    <span className="px-2 inline-flex leading-5 font-semibold rounded-full">
                      {item.parcelStatus === false ? (
                        <GoPackage
                          size="24"
                          color="#FF0000"
                          title="Not packaged"
                        />
                      ) : (
                        <GoPackage size="24" color="#00ED00" title="Packaged" />
                      )}
                    </span>
                    <span className=" inline-flex leading-5 font-semibold rounded-full">
                      {item.shippingStatus === false ? (
                        <BsTruck
                          size="24"
                          color="#FF0000"
                          title="Not Shipped"
                        />
                      ) : (
                        <BsTruck
                          size="24"
                          color="#00ED00"
                          title="Shipped Successfully"
                        />
                      )}
                    </span>
                  </>
                )}
                {type === "customers" && (
                  <p
                    className="text-ellipsis whitespace-nowrap overflow-hidden w-[250px]"
                    title={
                      item.address.address +
                      ", " +
                      item.address.city +
                      ", " +
                      item.address.postalCode +
                      ", " +
                      item.address.country
                    }
                  >
                    {item.address.address}, {item.address.city},{" "}
                    {item.address.postalCode}, {item.address.country}
                  </p>
                )}
                {type === "products" && <p>{item.sold}</p>}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-right border-gray-200">
                <span className="pr-2 inline-flex leading-5 font-semibold rounded-full">
                  <BsPrinter size="24" />
                </span>
                <span className="pr-2 inline-flex leading-5 font-semibold rounded-full">
                  <BsPencilSquare size="24" />
                </span>
                <span className="pr-2 inline-flex leading-5 font-semibold rounded-full">
                  <BsTrash size="24" />
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>Loading...</tr>
        )}{" "}
      </tbody>
    </table>
  );
};

export default List;
