import { ColumnOneBoxed } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnOneProps } from './RowColumnOne'

export function RowColumnOneBoxed(props: RowColumnOneProps) {
  const { colOne, richTextOne } = props

  return (
    <ColumnOneBoxed>
        <MuiMarkdown>{colOne}</MuiMarkdown>
    </ColumnOneBoxed>
  )
}
