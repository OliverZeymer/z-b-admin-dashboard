import List from "../components/List";
import Search from "../components/Search";

const Orders = () => {
  const list = {
    headings: ["Order ID", "Date", "Customer", "Payable Amount", "Status"],
  };
  return (
    <div>
      <Search placeholder="Enter Order ID, Date, Customer" />
      <List data={list} type="orders" />
    </div>
  );
};

export default Orders;
