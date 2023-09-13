import { BlogContent } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowBlogContentFragment } from './RowBlogContent.gql'

type RowBlogContentProps = RowBlogContentFragment

export function RowBlogContent(props: RowBlogContentProps) {
  const { content } = props
  if (!content) return null
  return (
    <BlogContent>
      <MuiMarkdown>{content}</MuiMarkdown>
    </BlogContent>
  )
}
