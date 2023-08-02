"use client"

import { ProductsList } from '@/components/products-list'
import styles from './page.module.css'
import { FilterBar } from '@/components/filter-bar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { styled } from 'styled-components'
import { DefaultPageLayout } from '@/components/default-page-layout'


const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

`


export default function Home() {
 const client = new QueryClient()
 return(
  <DefaultPageLayout>
    <PageWrapper>
      <FilterBar/>
       <ProductsList/>
   </PageWrapper>
  </DefaultPageLayout>
 )
}
