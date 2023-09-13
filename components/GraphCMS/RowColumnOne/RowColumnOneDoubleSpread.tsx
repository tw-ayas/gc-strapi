import { ColumnOne } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnOneFragment } from './RowColumnOne.gql'

type RowColumnOneDoubleSpreadProps = RowColumnOneFragment

export function RowColumnOneDoubleSpread(props: RowColumnOneDoubleSpreadProps) {
  const { colOne } = props
  return (
    <ColumnOne>
        <MuiMarkdown>{colOne}</MuiMarkdown>
    </ColumnOne>
  )
}
