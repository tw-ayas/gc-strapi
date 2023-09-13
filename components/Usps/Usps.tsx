import { Asset } from '@graphcommerce/graphcms-ui'
import { UspList, UspListItem, UspListProps } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { UspsQueryFragment } from './UspsQueryFragment.gql'

export type ProductUspsProps = UspsQueryFragment & Pick<UspListProps, 'size'>

export function Usps(props: ProductUspsProps) {
  const { uspsMultiple, size } = props

  if (!uspsMultiple?.data) return null

  return (
    <UspList size={size}>
      {uspsMultiple?.data[0]?.attributes?.uspsMultiple?.data.map((usps) => {
        if (!usps.attributes?.description || !usps.attributes?.asset?.data) return null
        return (
          <UspListItem
            key={usps.attributes?.title}
            // text={<RichText raw={usp.description?.raw} />}
            text={<MuiMarkdown>{usps.attributes?.description}</MuiMarkdown>}
            icon={usps.attributes?.asset?.data?.attributes?.File.data?.attributes && <Asset asset={usps.attributes.asset.data.attributes.File.data.attributes} layout='fill' sizes='50px' unoptimized />}
            size={size}
          />
        )
      })}
    </UspList>
  )
}
