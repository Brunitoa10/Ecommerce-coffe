"use client"

import { useGetFeaturedProduct } from "@/api/useGetFeaturedProducts";

import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import SkeletonSchema from "./skeleton-Schema";
import { Carousel, CarouselContent } from "./ui/carousel";

const FeatureProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProduct();
  
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            {loading && (
              <SkeletonSchema grid={3}/>
            )}
            {result !== null && (
              result.map((product: ProductType) => {
                return(
                  <p>Producto </p>
                );
              })
            )}
          
          </CarouselContent>
        </Carousel>
    </div>
  );
}

export default FeatureProducts;