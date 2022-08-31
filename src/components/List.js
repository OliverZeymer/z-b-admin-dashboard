import { BsGift, BsTruck } from "react-icons/bs";
const List = ({ data }) => {
  console.log(data.headings);
  return (
    <table className="w-full shadow bg-primary-theme text-primary-text">
      <thead className="text-primary-text border-gray text-left">
        <tr>
          {data?.headings?.map((heading, index) => (
            <th key={index} className="px-6 py-3 text-left font-medium">
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      <tbody class="bg-primary-theme">
        <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <input
              class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              type="checkbox"
            />
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 ">lort</div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10"></div>
              <div class="ml-4">
                <div class="text-sm leading-5 font-medium "></div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 ">lort</div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span class="px-2 inline-flex leading-5 font-semibold rounded-full">
              <BsGift size="24" />
            </span>
            <span class=" inline-flex leading-5 font-semibold rounded-full">
              <BsTruck size="24" />
            </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-primary-text">
            lort
          </td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
