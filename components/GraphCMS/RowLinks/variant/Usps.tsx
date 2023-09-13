import { iconCheckmark, IconSvg, VariantUsps } from '@graphcommerce/next-ui'
import { Box } from '@mui/material'
import {MuiMarkdown} from "mui-markdown";
import { RowLinksFragment } from '../RowLinks.gql'


export function Usps(props: RowLinksFragment) {
  const { title, pageLinks } = props

  return (
    <VariantUsps
      title={title}
      maxWidth={false}
      sx={(theme) => ({
        '& .Scroller-root > *': {
          [theme.breakpoints.only('xs')]: {
            '&:nth-last-of-type(-n+3)': {
              display: 'none',
            },
          },
          [theme.breakpoints.only('sm')]: {
            '&:nth-last-of-type(-n+2)': {
              display: 'none',
            },
          },
          [theme.breakpoints.only('md')]: {
            '&:nth-last-of-type(-n+1)': {
              display: 'none',
            },
          },
        },
      })}
    >
      {pageLinks?.data?.map((attributes, id) => (
        <Box
          key={`usps${id.toString()}`}
          sx={{
            display: 'inline-flex',
            flexWrap: 'nowrap',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <IconSvg src={iconCheckmark} sx={{ color: 'primary.main' }} />
          <Box>
            {attributes.attributes?.title}{' '}
            {attributes.attributes?.description && (
                <MuiMarkdown>{attributes.attributes?.description}</MuiMarkdown>
            )}
          </Box>
        </Box>
      ))}
    </VariantUsps>
  )
}
