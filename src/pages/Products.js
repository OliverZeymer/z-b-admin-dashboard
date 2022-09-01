import List from "../components/List";
const Products = () => {
  const list = {
    headings: ["Product ID", "Name", "Price", "Stock", "Amount sold"],
  };
  return (
    <div>
      <List type="products" data={list} />
    </div>
  );
};

export default Products;
