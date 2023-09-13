import { Asset } from '@graphcommerce/graphcms-ui'
import { AddProductsToCartForm, ProductListItemsFragment } from '@graphcommerce/magento-product'
import { ParagraphWithSidebarSlide, RenderType } from '@graphcommerce/next-ui'
import { useTheme } from '@mui/material'
import {MuiMarkdown} from "mui-markdown";
import { productListRenderer } from '../../../ProductListItems'
import { RowProductFragment } from '../RowProduct.gql'

type BackstoryProps = RowProductFragment & ProductListItemsFragment

export function Backstory(props: BackstoryProps) {
  const { copy, asset, ...productListItems } = props
  const theme = useTheme()
  const singleItem = productListItems?.items?.[(productListItems.items?.length ?? 1) - 1]

  if (!singleItem) return null

  return (
    <AddProductsToCartForm>
      <ParagraphWithSidebarSlide
        background={
            asset?.data?.attributes?.File.data?.attributes && (
            <Asset asset={asset.data?.attributes?.File.data?.attributes} sizes={{ 0: '50vw', [theme.breakpoints.values.md]: '72vw' }} />
          )
        }
        slidingItems={
          <RenderType
            renderer={productListRenderer}
            {...singleItem}
            sizes={{ 0: '50vw', [theme.breakpoints.values.md]: '27vw' }}
          />
        }
      >
        {copy && (
            <MuiMarkdown>{copy}</MuiMarkdown>
        )}
      </ParagraphWithSidebarSlide>
    </AddProductsToCartForm>
  )
}
