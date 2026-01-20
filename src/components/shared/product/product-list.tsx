import { Product } from "@/types";
import ProductCard from "./product-card";


type Props = {
  products: Product[];
  title?: string;
  limit?: number;
};
const ProductList = (props: Props) => {
  const { products, title, limit } = props;
  const limitedData = limit ? products.slice(0, limit) : products;
  return (
    <>
      <div className="my-10">
        <h2 className="h2-bold mb-4">{title}</h2>
        {products.length > 0 ? (
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limitedData.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        ) : (
          <div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
