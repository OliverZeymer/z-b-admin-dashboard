import List from "../components/List";
import Search from "../components/Search";
const Products = () => {
  const list = {
    headings: ["Product ID", "Name", "Price", "Stock", "Amount sold"],
  };
  return (
    <div>
      <Search placeholder="Enter Product ID or Product Name" />
      <List type="products" data={list} />
    </div>
  );
};

export default Products;
