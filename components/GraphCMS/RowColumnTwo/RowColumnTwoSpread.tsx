import { getNodeLength } from '@graphcommerce/graphcms-ui'
import { ElementOrTextNode } from '@graphcommerce/graphcms-ui/components/RichText/types'
import { ColumnTwoSpread } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnTwoFragment } from './RowColumnTwo.gql'

const getColumnCount = (props: RowColumnTwoFragment, columnId: number) => {
  const colOneLength = getNodeLength({text: props.colOne} as ElementOrTextNode)
  const colTwoLength = getNodeLength({text: props.colTwo} as ElementOrTextNode)

  if (colOneLength >= colTwoLength && columnId === 1) return 2
  if (colOneLength >= colTwoLength && columnId === 2) return 1
  if (colOneLength < colTwoLength && columnId === 1) return 1
  if (colOneLength < colTwoLength && columnId === 2) return 2
  return 1
}

export function RowColumnTwoSpread(props: RowColumnTwoFragment) {
  const { colOne, colTwo } = props

  return (
    <ColumnTwoSpread
      nodeLength={
        getNodeLength({text: colOne} as ElementOrTextNode) >=
          getNodeLength({text: colTwo} as ElementOrTextNode) ?? false
      }
      colOneContent={
          <MuiMarkdown>{colOne}</MuiMarkdown>
      }
      colTwoContent={
          <MuiMarkdown>{colTwo}</MuiMarkdown>
      }
    />
  )
}
