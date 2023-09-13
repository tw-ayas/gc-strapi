import { Image } from '@graphcommerce/image'
import {ImageTextBoxed, responsiveVal} from '@graphcommerce/next-ui'
import { Typography, useTheme } from '@mui/material'
import {MuiMarkdown} from "mui-markdown";
import { RowProductFragment } from '../RowProduct.gql'
import { ProductFeatureMediaBoxedFragment } from './ProductFeatureMediaBoxed.gql'

type FeatureBoxedProps = RowProductFragment & ProductFeatureMediaBoxedFragment

export function FeatureBoxed(props: FeatureBoxedProps) {
  const { copy, title, media_gallery } = props
  const item = media_gallery?.[1] ?? media_gallery?.[0]
  const theme = useTheme()

  if (!item) return null

  return (
    <ImageTextBoxed
      item={
        item.__typename === 'ProductImage' &&
        item.url && (
          <Image
            alt={item.label || item.label === ' ' ? item.label : 'Product Image 3'}
            width={1532}
            height={1678}
            src={item.url ? item.url : "/"}
            sizes={{
              0: '100vw',
              [theme.breakpoints.values.md]: responsiveVal(100, 600),
            }}
          />
        )
      }
    >
      {title && (
        <Typography variant='overline' color='textSecondary'>
          {title}
        </Typography>
      )}
        {copy && (
            <MuiMarkdown>{copy}</MuiMarkdown>
        )}
    </ImageTextBoxed>
  )
}
