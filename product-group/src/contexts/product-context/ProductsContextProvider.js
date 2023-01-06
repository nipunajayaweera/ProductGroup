import { createContext, useContext, useState } from 'react';
var productsContext ={
  isFetching:false,
  setIsFetching: function(){},
  products:[],
  setProducts:function(){},
  filters:[],
  setFilters:function(){}
}
const ProductsContext = createContext(productsContext);
const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider'
    );
  }

  return context;
};

const ProductsProvider = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const ProductContextValue = {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  };

  return <ProductsContext.Provider value={ProductContextValue} {...props} />;
};

export { ProductsProvider, useProductsContext };
