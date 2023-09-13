import { RenderType, TypeRenderer } from '@graphcommerce/next-ui'
import { RowBlogContent } from '../Blog'
import { RowButtonLinkList } from './RowButtonLinkList/RowButtonLinkList'
import { RowColumnOne } from './RowColumnOne/RowColumnOne'
import { RowColumnThree } from './RowColumnThree/RowColumnThree'
import { RowColumnTwo } from './RowColumnTwo/RowColumnTwo'
import { RowContentLinks } from './RowContentLinks/RowContentLinks'
import { RowHeroBanner } from './RowHeroBanner/RowHeroBanner'
import { RowLinks } from './RowLinks/RowLinks'
import { RowProduct } from './RowProduct/RowProduct'
import { RowQuote } from './RowQuote/RowQuote'
import { RowRendererFragment } from "./RowRenderer.gql"
import { RowServiceOptions } from './RowServiceOptions/RowServiceOptions'
import { RowSpecialBanner } from './RowSpecialBanner/RowSpecialBanner'
import {ProductListQuery} from "@graphcommerce/magento-product"

type ContentTypeRenderer = TypeRenderer<never>

const defaultRenderer: Partial<ContentTypeRenderer> = {
  'ComponentRCOne': RowColumnOne,
  'ComponentRCTwo': RowColumnTwo,
  'ComponentRCThree': RowColumnThree,
  'ComponentRHerobanner': RowHeroBanner,
  'ComponentRSBanner': RowSpecialBanner,
  'ComponentRQuotes': RowQuote,
  'ComponentRBContent': RowBlogContent,
  'ComponentRBLklist': RowButtonLinkList,
  'ComponentRSOptions': RowServiceOptions,
  'ComponentRCLink': RowContentLinks,
  'ComponentRProduct': RowProduct,
  'ComponentRLink': RowLinks,
}

const contentKeys = {
  'ComponentRCOne': 'rowcolumnone',
  'ComponentRCTwo': 'rowcolumntwo',
  'ComponentRCThree': 'rowcolumnthree',
  'ComponentRHerobanner': 'rowherobanner',
  'ComponentRSBanner': 'rowspecialbanner',
  'ComponentRQuotes': 'rowquote',
  'ComponentRBContent': 'rowblogcontent',
  'ComponentRBLklist': 'rowbuttonlinklist',
  'ComponentRSOptions': 'rowserviceoption',
  'ComponentRCLink': 'rowcontentlink',
  'ComponentRProduct': 'rowproduct',
  'ComponentRLink': 'rowlink',
}

export type PageProps = RowRendererFragment & {favoritesList?: ProductListQuery} & {latestList?: ProductListQuery} & {swipeableList?: ProductListQuery} &{
  renderer?: Partial<ContentTypeRenderer>
}

export function RowRenderer(props: PageProps) {
    const {
        content,
        renderer,
    } = props
    const mergedRenderer = {...defaultRenderer, ...renderer} as ContentTypeRenderer

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {content?.map((item) =>
                item != null && item.__typename !== 'Error' && item[contentKeys[item?.__typename]]?.data &&
                <RenderType key={`${item?.__typename}-${item.id}-${item[contentKeys[item?.__typename]]?.id}`} renderer={mergedRenderer} {...item[contentKeys[item?.__typename]]?.data?.attributes} __typename={item.__typename}/>

            )}
        </>
    )
}
