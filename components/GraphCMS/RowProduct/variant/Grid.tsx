import { ContainerWithHeader } from '@graphcommerce/next-ui'
import { Link } from '@mui/material'
import { ProductListItems, ProductListItemsProps } from '../../../ProductListItems/ProductListItems'
import { RowProductFragment } from '../RowProduct.gql'

type GridProps = RowProductFragment & ProductListItemsProps

export function Grid(props: GridProps) {
  const { title, pageLinks, copy, ...productListItems } = props

  return (
    <ContainerWithHeader
      title={title}
      rightArea={pageLinks?.data?.map((pageLink) => (
        <Link color='inherit' href={pageLink.attributes?.url} key={pageLink.attributes?.url} underline='always'>
          {pageLink.attributes?.title}
        </Link>
      ))}
    >
      <ProductListItems title={title} {...productListItems} size='small' titleComponent='h3' />
    </ContainerWithHeader>
  )
}
