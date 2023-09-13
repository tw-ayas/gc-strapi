import { ColumnOne } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnOneFragment } from './RowColumnOne.gql'

export function RowColumnOneSpread(props: RowColumnOneFragment) {
  const { colOne } = props
  return (
    <ColumnOne>
        <MuiMarkdown>{colOne}</MuiMarkdown>
    </ColumnOne>
  )
}
