import { ColumnTwo } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnTwoFragment } from './RowColumnTwo.gql'

export function RowColumnTwo(props: RowColumnTwoFragment) {
  const { colOne, colTwo } = props

  return (
    <ColumnTwo
        colOneContent={<MuiMarkdown>{colOne}</MuiMarkdown>}
        colTwoContent={<MuiMarkdown>{colTwo}</MuiMarkdown>}
    />
  )
}
