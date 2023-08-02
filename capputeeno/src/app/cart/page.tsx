"use client"

import { BackBtn } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, ProductInCart } from "@/types/products";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";

interface CartPageProps {

}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 32px; 
    color: var(--text-dark-2)

`

const CartListContainer = styled.div`
    margin-top: 24px;

    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
    }

    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span {
            font-weight: 500
        }

    }
`

const CartList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`


export default function cartPage (){
    const { value } =  useLocalStorage<ProductInCart[]>('cart-items', [])

    const calculateTotal = (value : ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
     }

    const cartTotal = formatPrice(calculateTotal(value))
    return(
        <DefaultPageLayout>
            <Container>
                <BackBtn navigate={"/"}/>
                <CartListContainer> 
                    <h3>Seu Carrinho</h3>
                    <p>
                        Total {value.length} Produtos
                        <span> {cartTotal}</span>   
                    </p>
                    <CartList>
                        {value.map(item => item.name)}
                    </CartList>
                </CartListContainer>
            </Container>
      </DefaultPageLayout>
    )
   
}