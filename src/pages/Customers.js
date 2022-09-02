import List from "../components/List";
const Customers = () => {
  const list = {
    headings: ["Customer ID", "Name", "Phone", "Order Amount", "Address"],
  };
  return (
    <div>
      <List type="customers" data={list} />
    </div>
  );
};

export default Customers;
