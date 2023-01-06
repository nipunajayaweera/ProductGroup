import * as S from './style';
import { useEffect } from 'react';
import useProducts from './../../contexts/product-context/useProduct';
import Loader from './../Loader/Loader';
import Products from './../Products/Products';

function Shopping() {
    const { isFetching, products, fetchProducts } = useProducts();

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

    return (
        <S.Container>
            {isFetching && <Loader />}
            <S.TwoColumnGrid>
                <S.Side>
                    {/* <Filter /> */}
                    Filter
                </S.Side>
                <S.Main>
                    <S.MainHeader>
                        <p>{products?.length} Product(s) found</p>
                    </S.MainHeader>
                    <Products products={products} />
                </S.Main>
            </S.TwoColumnGrid>
            {/* <Cart /> */}
        </S.Container>
    );
}

export default Shopping;