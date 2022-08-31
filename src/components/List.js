import {
  BsGift,
  BsTruck,
  BsPrinter,
  BsTrash,
  BsPencilSquare,
} from "react-icons/bs";
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
          {data?.headings?.map((heading, index) => (
            <th key={index} className="px-6 py-3 text-left font-medium">
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-primary-theme">
        {error && error}
        {!isLoading ? (
          fetchData?.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <input
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 ">
                  <p>{item.orderDate}</p>
                </div>
              </td>
              <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium">
                      <p>{item.customerName}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 ">
                  <p>{parseFloat(item.subTotal).toFixed(2)}$</p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span className="px-2 inline-flex leading-5 font-semibold rounded-full">
                  {item.parcelStatus === false ? (
                    <BsGift size="24" color="#FF0000" />
                  ) : (
                    <BsGift size="24" color="#00ED00" />
                  )}
                </span>
                <span className=" inline-flex leading-5 font-semibold rounded-full">
                  {item.shippingStatus === false ? (
                    <BsTruck size="24" color="#FF0000" />
                  ) : (
                    <BsTruck size="24" color="#00ED00" />
                  )}
                </span>
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
