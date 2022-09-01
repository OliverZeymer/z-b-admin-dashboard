import List from "../components/List";
import Search from "../components/Search";

const Customers = () => {
  const list = {
    headings: ["Customer ID", "Name", "Phone", "Order Amount", "Address"],
  };
  return (
    <div>
      <Search placeholder="Enter Customer ID, Date, Customer" />
      <List type="customers" data={list} />
    </div>
  );
};

export default Customers;
