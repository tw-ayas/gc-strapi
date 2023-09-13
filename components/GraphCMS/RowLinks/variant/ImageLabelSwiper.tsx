import { Asset } from '@graphcommerce/graphcms-ui'
import { responsiveVal, VariantImageLabelSwiper } from '@graphcommerce/next-ui'
import { Box, ButtonBase, Typography } from '@mui/material'
import { RowLinksFragment } from '../RowLinks.gql'
import {MuiMarkdown} from "mui-markdown";

export function ImageLabelSwiper(props: RowLinksFragment) {
  const { title, copy, pageLinks } = props

  return (
    <VariantImageLabelSwiper
      title={title}
      // copy={rowLinksCopy && <RichText {...rowLinksCopy} />}
      copy={copy && <MuiMarkdown>{copy}</MuiMarkdown>}
      sx={{ '& .Scroller-root': { alignItems: 'start' } }}
    >
      {pageLinks?.data.map((pageLink) => (
          (pageLink.attributes && <ButtonBase
          href={pageLink.attributes?.url}
          key={pageLink.id}
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            rowGap: theme.spacings.xs,
            '& img': { display: 'block' },
          })}
        >
          {pageLink.attributes.asset?.data?.attributes?.File.data?.attributes && (
            <Asset
              asset={pageLink.attributes.asset.data.attributes.File.data.attributes}
              sx={{
                width: responsiveVal(120, 200),
                maxWidth: responsiveVal(120, 200),
              }}
              sizes={responsiveVal(260, 400)}
            />
          )}
          <Box sx={{ maxWidth: responsiveVal(120, 200) }}>
            <Typography variant='h6' component='h3'>
              {pageLink.attributes.title}
            </Typography>
            {/* {pageLink?.description && <RichText {...pageLink.description} />} */}
            {pageLink.attributes.description && <MuiMarkdown>{pageLink.attributes.description}</MuiMarkdown>}
          </Box>
        </ButtonBase>)
      ))}
    </VariantImageLabelSwiper>
  )
}
