import { VariantInline } from '@graphcommerce/next-ui'
import { Link } from '@mui/material'

import { RowLinksFragment } from '../RowLinks.gql'

export function Inline(props: RowLinksFragment) {
  const { title, pageLinks } = props

  return (
    <VariantInline title={title} maxWidth={false} sx={(theme) => ({ my: theme.spacings.md })}>
      {pageLinks?.data?.map((pageLink) => (
        <Link href={pageLink.attributes?.url} key={pageLink.id} color='inherit' underline='hover'>
          {pageLink.attributes?.title}
        </Link>
      ))}
    </VariantInline>
  )
}
