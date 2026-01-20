import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 flex flex-col items-center">
        <Link href={`products/${product.slug}`}>
          <Image
            alt={product.name}
            src={product.images[0]}
            width={200}
            height={200}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="px-4 grid gap-2">
        <div className="text-xs font-semibold">{product.brand}</div>
        <Link href={`products/${product.slug}`}>
          <h2 className="text-sm font-bold">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center gap-2">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={+product.price} />
          ) : (
            <p className="text-destructive">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
