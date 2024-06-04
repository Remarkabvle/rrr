import React from "react";
import { useGetAllProductsQuery } from "../../api/index";
import ProductsItem from "./ProductItem";

const Products = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <div className="products">
            <div className="products__cards">
                {data?.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
