import { breakpointVal, HeroBanner } from '@graphcommerce/next-ui'
import { Button } from '@mui/material'
import {MuiMarkdown} from "mui-markdown";
import { RowHeroBannerFragment } from './RowHeroBanner.gql'

export function RowHeroBanner(props: RowHeroBannerFragment) {
  const { copy, asset, pageLinks } = props

  return (
      asset?.data?.attributes?.File?.data?.attributes &&
    <HeroBanner
      pageLinks={pageLinks?.data.map(({ attributes }) => (
          (attributes && <Button key={attributes?.url} href={attributes.url} variant='outlined' size='large' color='inherit'>
          {attributes?.title}
        </Button>)
      ))}
      videoSrc={asset.data.attributes.File.data.attributes.url}
      sx={(theme) => ({
        '& .HeroBanner-copy': {
          minHeight: { xs: 'min(70vh,600px)', md: 'min(70vh,1080px)' },
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacings.xl,
            justifyItems: 'start',
            alignContent: 'center',
            textAlign: 'left',
            width: '50%',
          },
        },
      })}
    >
      <MuiMarkdown>{copy}</MuiMarkdown>
    </HeroBanner>
  )
}
