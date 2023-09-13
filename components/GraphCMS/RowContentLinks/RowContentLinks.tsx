import { ContentLinks } from '@graphcommerce/next-ui'
import { Link } from '@mui/material'
import { RowContentLinksFragment } from './RowContentLinks.gql'

/** @deprecated Replace with RowLinks */
export function RowContentLinks(props: RowContentLinksFragment) {
  const { title: mainTitle, contentLinks } = props

  return (
    <ContentLinks title={mainTitle}>
      {contentLinks?.data?.map(({ id, attributes }) => (
        <Link key={id} href={attributes?.url} variant='body1' color='inherit' underline='hover'>
          {attributes?.title}
        </Link>
      ))}
    </ContentLinks>
  )
}
