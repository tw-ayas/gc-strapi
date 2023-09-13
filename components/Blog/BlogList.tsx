import { BlogItemGrid } from '@graphcommerce/next-ui'
import { BlogItem } from './BlogItem'
import { BlogListQuery } from './BlogList.gql'

type BlogListProps = BlogListQuery

export function BlogList(props: BlogListProps) {
  const { blogPosts } = props

  return (
    <BlogItemGrid>
      {blogPosts?.data.map((BlogPost) => (
        <BlogItem key={BlogPost.attributes?.title} date={BlogPost.attributes?.title} title={BlogPost.attributes?.title}  url={BlogPost.attributes?.url!} asset={BlogPost.attributes?.asset}/>
      ))}
    </BlogItemGrid>
  )
}
