import { ButtonLinkListItem, ButtonLinkList } from '@graphcommerce/next-ui'
import { RowButtonLinkListFragment } from './RowButtonLinkList.gql'

export type RowButtonLinkListProps = RowButtonLinkListFragment

/** @deprecated Replace with RowLinks */
export function RowButtonLinkList(props: RowButtonLinkListProps) {
  const { title, links } = props

  const isBig = links?.data.some((link) => (link.attributes?.title?.length ?? 0) > 30) ?? false
  return (
    <ButtonLinkList title={title} containsBigLinks={isBig} component='h2'>
      {links?.data.map((link) => (
          (
              link.attributes &&
              <ButtonLinkListItem key={link.attributes?.url} url={`/${link.attributes?.url}`}>
                {link.attributes?.title}
              </ButtonLinkListItem>
          )
      ))}
    </ButtonLinkList>
  )
}
