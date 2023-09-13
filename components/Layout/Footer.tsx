import { Image } from '@graphcommerce/image'
import { StoreSwitcherButton } from '@graphcommerce/magento-store'
import { Footer as FooterBase } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { Button, IconButton, Link } from '@mui/material'
import { FooterQueryFragment } from './FooterQueryFragment.gql'

export type FooterProps = FooterQueryFragment

export function Footer(props: FooterProps) {
  const { footers } = props

  return (
    <FooterBase
      socialLinks={footers?.data[0]?.attributes?.social_links?.data?.map((link) => (
        <IconButton key={link.attributes?.title} href={link.attributes?.url ?? '#'} color='inherit' size='medium' edge='start'>
          {link.attributes?.asset?.data ? (
            <Image
              layout='fill'
              src={link.attributes.asset.data?.attributes?.File.data?.attributes ? link.attributes.asset.data.attributes.File.data.attributes.url : "/"}
              width={24}
              height={24}
              unoptimized
              alt={link.attributes.title}
              sx={(theme) => ({
                filter: theme.palette.mode === 'dark' ? 'invert(100%)' : 'invert(0%)', maxWidth:24,
              })}
            />
          ) : (
            link.attributes?.title
          )}
        </IconButton>
      ))}
      storeSwitcher={<StoreSwitcherButton />}
      customerService={
        <Button href='/service' variant='pill'>
          <Trans id='Customer Service' />
        </Button>
      }
      copyright={
        <>
          <span>{footers?.data[0]?.attributes?.copyright}</span>
          {footers?.data[0]?.attributes?.legal_links?.data.map((link) => (
            <Link key={link.attributes?.title} href={link.attributes?.url} color='textPrimary' underline='always'>
              {link.attributes?.title}
            </Link>
          ))}
        </>
      }
    />
  )
}
