"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  name: string;
};

const ProductImages = ({ images, name }: Props) => {
  const [current, setCurrent] = useState(0);
  const handleImageChange = (index: number) => {
    setCurrent(index);
  };
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt={name}
        height={700}
        width={700}
        className="border-gray-200 border-2 min-h-75 object-cover object-center dark:bg-black"
      />
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            onClick={() => handleImageChange(index)}
            key={image}
            className={cn(
              "transition-colors duration-100  outline-2 outline-gray-200 hover:outline-yellow-400",
              {
                "outline-yellow-500": index === current,
              },
            )}
          >
            <Image src={image} alt="product preview" width={80} height={80} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
