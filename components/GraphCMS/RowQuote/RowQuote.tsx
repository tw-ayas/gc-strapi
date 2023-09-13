import { Quote } from '@graphcommerce/next-ui'
import {MuiMarkdown} from "mui-markdown";
import React from 'react'
import { RowQuoteFragment } from './RowQuote.gql'

type RowQuoteProps = RowQuoteFragment

export function RowQuote(props: RowQuoteProps) {
  const { quote } = props

  return (
    <Quote>
        <MuiMarkdown>{quote}</MuiMarkdown>
    </Quote>
  )
}
