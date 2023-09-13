import {Asset} from '@graphcommerce/graphcms-ui'
import { SpecialBanner } from '@graphcommerce/next-ui'
import { Link } from '@mui/material'
import {MuiMarkdown} from "mui-markdown";
import { RowSpecialBannerFragment } from './RowSpecialBanner.gql'

type RowSpecialBannerProps = RowSpecialBannerFragment

export function RowSpecialBanner(props: RowSpecialBannerProps) {
  const { copy, asset, topic, pageLinks } = props

  return (
    <SpecialBanner
      topic={topic}
      asset={asset?.data?.attributes?.File.data?.attributes && <Asset asset={asset.data?.attributes?.File.data?.attributes} sizes='50vw' />}
      pageLinks={pageLinks?.data?.map(({ attributes }) => (
        <Link underline='always' href={attributes?.url} key={attributes?.url} title={attributes?.title} color='inherit'>
          {attributes?.title}
        </Link>
      ))}
    >
        <MuiMarkdown>{copy}</MuiMarkdown>
    </SpecialBanner>
  )
}
