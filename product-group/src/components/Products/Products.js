import Product from './Product/Product';

import * as S from './style';

const Products = ({ products }) => {
  return (
    <S.Container>
      {products?.map((p) => (
        <Product product={p} key={p.sku} />
      ))}
    </S.Container>
  );
};

export default Products;
