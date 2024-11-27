import { useLazyGetProductsQuery } from '@store/services/Endpoints/PlpProductsEndPoint';
import { TestTemplatePage } from '@ui/templates/TestPageTemplate';
import { useEffect } from 'react';

export default function TestPage() {
  const [triggerGetProducts, { isLoading, error, data }] = useLazyGetProductsQuery();
  useEffect(()=>{
    console.log(' Test Page isLoading, error, data',  isLoading, error, data)
  }, [ isLoading, error, data])

  useEffect(()=>{
    triggerGetProducts({})
  }, [])
  return <TestTemplatePage submitLabel={''} onSubmit={function (): void {
    throw new Error('Function not implemented.');
  }} />
}