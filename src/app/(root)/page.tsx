import { getLatestProducts } from "@/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList
        products={latestProducts}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
}
