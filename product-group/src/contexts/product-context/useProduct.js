import { useCallback } from 'react';

import { useProductsContext } from './ProductsContextProvider';
import { getProducts } from './../../services/products';

const useProducts = () => {
  const {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  } = useProductsContext();

  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then((products) => {
      setIsFetching(false);
      setProducts(products);
    });
  }, [setIsFetching, setProducts]);

  const filterProducts = (filters) => {
    setIsFetching(true);

    getProducts().then((products) => {
      setIsFetching(false);
      let filteredProducts;

      if (filters && filters.length > 0) {
        filteredProducts = products.filter((p) =>
          filters.find((filter) =>
            p.availableSizes.find((size) => size === filter)
          )
        );
      } else {
        filteredProducts = products;
      }

      setFilters(filters);
      setProducts(filteredProducts);
    });
  };

  return {
    isFetching,
    fetchProducts,
    products,
    filterProducts,
    filters,
  };
};

export default useProducts;