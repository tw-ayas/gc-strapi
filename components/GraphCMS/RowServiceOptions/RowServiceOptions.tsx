import { RichText } from '@graphcommerce/graphcms-ui'
import {
  IconBlock,
  IconBlocks,
  iconChat,
  iconEmail,
  iconPhone,
  IconSvg,
} from '@graphcommerce/next-ui'
import { RowServiceOptionsFragment } from './RowServiceOptions.gql'

type RowServiceOptionsProps = RowServiceOptionsFragment

export function RowServiceOptions(props: RowServiceOptionsProps) {
  const { title, serviceOptions } = props

  return (
    <IconBlocks title={title}>
      {serviceOptions?.data?.map((serviceOption) => {
        const iconTitle = serviceOption.attributes?.title.toLowerCase()

        return (
          <IconBlock
            key={serviceOption.attributes?.title!}
            href={serviceOption.attributes?.url!}
            title={serviceOption.attributes?.title!}
            icon={
              <>
                {iconTitle === 'e-mail' && <IconSvg src={iconEmail} size='large' />}
                {iconTitle === 'phone' && <IconSvg src={iconPhone} size='large' />}
                {iconTitle === 'chat' && <IconSvg src={iconChat} size='large' />}
              </>
            }
          >
            {serviceOption.attributes?.description ? <RichText raw={{
              children: [{text: serviceOption.attributes?.description}],
              type: 'heading-one'
            }} {...serviceOption.attributes!} /> : undefined}
          </IconBlock>
        )
      })}
    </IconBlocks>
  )
}
