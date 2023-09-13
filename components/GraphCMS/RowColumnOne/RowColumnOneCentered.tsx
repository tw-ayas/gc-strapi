import {ColumnOneCentered, MuiButtonInline} from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import { RowColumnOneProps } from './RowColumnOne'

export function RowColumnOneCentered(props: RowColumnOneProps) {
  const { colOne, richTextOne } = props

  return (
    <ColumnOneCentered>
        <MuiMarkdown>{colOne}</MuiMarkdown>
    </ColumnOneCentered>
  )
}
