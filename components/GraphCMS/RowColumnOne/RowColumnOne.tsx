import { RichTextProps } from '@graphcommerce/graphcms-ui'
import { ColumnOne } from '@graphcommerce/next-ui'
import { MuiMarkdown } from 'mui-markdown';
import type { RowColumnOneFragment } from './RowColumnOne.gql'

export type RowColumnOneProps = RowColumnOneFragment & {
  colOne?: Omit<RichTextProps, 'raw'>
}

export function RowColumnOne(props: RowColumnOneProps) {
  const { colOne } = props

  return (
    <ColumnOne>
      <MuiMarkdown>{colOne}</MuiMarkdown>
    </ColumnOne>
  )
}
