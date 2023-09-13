import { CartFab } from '@graphcommerce/magento-cart'
import {magentoMenuToNavigation, MagentoNavigationItemProps} from '@graphcommerce/magento-category'
import { CustomerFab, CustomerMenuFabItem } from '@graphcommerce/magento-customer'
import { SearchLink } from '@graphcommerce/magento-search'
import { WishlistFab, WishlistMenuFabItem } from '@graphcommerce/magento-wishlist'
import {
    DesktopNavActions,
    DesktopNavBar,
    LayoutDefault,
    LayoutDefaultProps,
    iconCustomerService,
    iconHeart,
    NavigationFab,
    MenuFabSecondaryItem,
    PlaceholderFab,
    IconSvg,
    DesktopNavItem,
    DarkLightModeMenuSecondaryItem,
    NavigationProvider,
    NavigationOverlay,
    useNavigationSelection,
    useMemoDeep, iconChevronDown,
} from '@graphcommerce/next-ui'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import {Divider, Fab, Typography} from '@mui/material'
import { useRouter } from 'next/router'
import { Footer } from './Footer'
import { LayoutQuery } from './Layout.gql'
import { Logo } from './Logo'

export type LayoutNavigationProps = LayoutQuery &
  Omit<LayoutDefaultProps, 'footer' | 'header' | 'cartFab' | 'menuFab'>

// Code by Simon: Custom renderer for the items in the menu
function MagentoCategoryItem (props: MagentoNavigationItemProps) {
    const { name } = props
    return (
        <Typography>
            {name}
        </Typography>
    )
}

export function LayoutNavigation(props: LayoutNavigationProps) {
  const { footers, menu, children, ...uiProps } = props
  const selection = useNavigationSelection()
  const router = useRouter()
  return (
    <>
      <NavigationProvider
        selection={selection}
        items={useMemoDeep(
          () => [
            <SearchLink
              href='/search'
              onClick={() => selection.set(false)}
              sx={(theme) => ({
                width: `calc(100% - ${theme.spacing(4)})`,
                m: 2,
                mb: theme.spacings.xs,
              })}
              aria-label={i18n._(/* i18n */ 'Search...')}
            >
              <Trans id='Search...' components={{'null': null}} values={{'string': 'a'}}/>
            </SearchLink>,
              // Don't show home in menu
            // { id: 'home', name: <Trans id='Home' />, href: '/' },
            ...magentoMenuToNavigation(menu, false, MagentoCategoryItem),
            // Blog isn't necessary for PMT
            // { id: 'blog', name: 'Blog', href: '/blog' },
            <Divider sx={(theme) => ({ my: theme.spacings.xs })} />,
              <CustomerMenuFabItem
                  onClick={() => selection.set(false)}
                  key='account'
                  guestHref='/account/signin'
                  authHref='/account'
              >
              <Trans id='Account' />
            </CustomerMenuFabItem>,
            <MenuFabSecondaryItem
              key='service'
              icon={<IconSvg src={iconCustomerService} size='medium' />}
              href='/service'
            >
              <Trans id='Customer Service' />
            </MenuFabSecondaryItem>,
            <WishlistMenuFabItem key='wishlist' icon={<IconSvg src={iconHeart} size='medium' />}>
              <Trans id='Wishlist' />
            </WishlistMenuFabItem>,
            <DarkLightModeMenuSecondaryItem key='darkmode' />,
          ],
          [menu, selection],
        )}
      >
        <NavigationOverlay
          stretchColumns={false}
          variantSm='left'
          sizeSm='full'
          justifySm='start'
          itemWidthSm='70vw'
          variantMd='left'
          sizeMd='full'
          justifyMd='start'
          itemWidthMd='230px'
          mouseEvent='hover'
          itemPadding='md'
        />
      </NavigationProvider>

      <LayoutDefault
        {...uiProps}
        noSticky={router.asPath.split('?')[0] === '/'}
        header={
          <>
            <Logo />
            <DesktopNavBar>
              {menu?.items?.[0]?.children?.map((item) => (
                <DesktopNavItem key={item?.uid} href={`/${item?.url_path}`}>
                  {item?.name}
                </DesktopNavItem>
              ))}
                <DesktopNavItem onClick={() => selection.set([menu?.items?.[0]?.uid || ''])}>
                {menu?.items?.[0]?.name}
                <IconSvg src={iconChevronDown} />
              </DesktopNavItem>*

               <DesktopNavItem href='/blog'>
                 <Trans id='Blog' />
              </DesktopNavItem>
            </DesktopNavBar>

            <DesktopNavActions>
              {!router.pathname.startsWith('/search') && (
                <SearchLink
                  href='/search'
                  aria-label={i18n._(/* i18n */ 'Search...')}
                  breakpoint='lg'
                />
              )}
              <Fab
                href='/service'
                aria-label={i18n._(/* i18n */ 'Account')}
                size='large'
                color='inherit'
              >
                <IconSvg src={iconCustomerService} size='large' />
              </Fab>
              <WishlistFab icon={<IconSvg src={iconHeart} size='large' />} />
              <CustomerFab guestHref='/account/signin' authHref='/account' />
              {/* The placeholder exists because the CartFab is sticky but we want to reserve the space for the <CartFab /> */}
              <PlaceholderFab />
            </DesktopNavActions>
          </>
        }
        footer={<Footer footers={footers} />}
        cartFab={<CartFab />}
        menuFab={<NavigationFab onClick={() => selection.set([])} />}
      >
        {children}
      </LayoutDefault>
    </>
  )
}