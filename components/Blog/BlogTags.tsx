import { BlogTag, BlogTags as NextBlogTags } from '@graphcommerce/next-ui'
import { BlogTagsFragment } from './BlogTags.gql'

type BlogTagsProps = BlogTagsFragment

export function BlogTags(props: BlogTagsProps) {
  const { related_pages } = props
  return (
    <NextBlogTags>
      {related_pages?.data.map(({ attributes }) => {
        if (!attributes?.title) return null
        return <BlogTag key={attributes?.url} url={attributes?.url} title={attributes?.title} />
      })}
    </NextBlogTags>
  )
}
