import List from "../components/List";

const Orders = () => {
  const list = {
    headings: ["Order ID", "Date", "Customer", "Payable Amount", "Status"],
  };
  return (
    <div>
      <List data={list} type="orders" />
    </div>
  );
};

export default Orders;
