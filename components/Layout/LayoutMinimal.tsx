import { LayoutDefault, LayoutDefaultProps } from '@graphcommerce/next-ui'
import { Footer } from './Footer'
import { LayoutQuery } from './Layout.gql'
import { Logo } from './Logo'

export type LayoutMinimalProps = LayoutQuery &
  Omit<LayoutDefaultProps, 'header' | 'footer' | 'cartFab' | 'noSticky'>

export function LayoutMinimal(props: LayoutMinimalProps) {
  const { footers, menu, children, ...uiProps } = props

  return (
    <LayoutDefault
      {...uiProps}
      header={<Logo />}
      footer={<Footer footers={footers} />}
      sx={{ background: (theme) => theme.palette.background.paper }}
    >
      {children}
    </LayoutDefault>
  )
}
