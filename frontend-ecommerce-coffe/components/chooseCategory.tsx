"use client";

import { useGetCategories } from "@/api/useGetCategories";
import { ResponseCategory } from "@/types/responseCategory";
import Link from "next/link";



const ChooseCategory = () => {
    const { result, loading }: ResponseCategory = useGetCategories();
    console.log(result);
    return (
        <div className="max-46xl py-4 max-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h3>
            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && result.map((category) => (
                    <Link key={category.documentId} href={`/category/${category.slug}`} className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg cursor-pointer">
                        <img src={
                            `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage?.url}`
                        } alt={category.categoryName} className="max-w-270px transition duration-300 ease-in-out  rounded-lg hover:scale-110"/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ChooseCategory;