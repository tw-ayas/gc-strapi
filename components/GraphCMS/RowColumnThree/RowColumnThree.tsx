import { ColumnThree } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnThreeFragment } from './RowColumnThree.gql'

export function RowColumnThree(props: RowColumnThreeFragment) {
  const { colOne, colTwo, colThree } = props

  return (
    <ColumnThree
        colOneContent={<MuiMarkdown>{colOne}</MuiMarkdown>}
        colTwoContent={<MuiMarkdown>{colTwo}</MuiMarkdown>}
        colThreeContent={<MuiMarkdown>{colThree}</MuiMarkdown>}
    />
  )
}
