import React, { useContext } from 'react'
import { IconButton } from '../iconButton'
import { AppContext } from '../../app/appContext'
import { BurstValue } from '@burstjs/util'
import { PaymentComponentProps } from './paymentComponentProps'
import { mountLegacyDeepLink } from '../../app/createLegacyDeeplink'
import useSWR from 'swr'
import { useNotification } from '../../app/hooks/useNotification'

export const DeeplinkPayment: React.FC<PaymentComponentProps> = (props) => {
  const { BurstApi } = useContext(AppContext)
  const notification = useNotification('success')
  const errorNotification = useNotification('error')
  const { data, error } = useSWR(
    'burst/getSuggestedFees',
    BurstApi.network.getSuggestedFees
  )

  const { value, recipientId, onFinish } = props

  const getLink = (): string => {
    return mountLegacyDeepLink({
      value,
      recipientId,
      fee: BurstValue.fromPlanck(data.standard.toString(10)),
    }).toString()
  }

  const onOpenPaymentLink = async () => {
    const link = mountLegacyDeepLink({
      value,
      recipientId,
      fee: BurstValue.fromPlanck(data.standard.toString(10)),
    })
    window.open(link.toString())
  }

  const onCopyPaymentLink = async () => {
    try {
      await navigator.clipboard.writeText(getLink())
      onFinish(true)
      notification.show('Copied to clipboard')
    } catch (e) {
      errorNotification.show('Copying failed 😭')
    }
  }

  return (
    <>
      <form>
        <div className="mt-1 mb-1 flex flex-row justify-center">
          <IconButton
            onClick={onOpenPaymentLink}
            iconSrc="./icon/link.svg"
            tooltip="Open Payment Link"
            pending={!data && !error}
            size={64}
          />
          <div className="ml-4" />
          <IconButton
            onClick={onCopyPaymentLink}
            iconSrc="./icon/copy.svg"
            tooltip="Copy Payment Link"
            pending={!data && !error}
            size={64}
          />
        </div>
        <div className="text-gray-400 text-xs p-0.5">
          To be able to use the link you need the{' '}
          <a href="http://phoenix-wallet.rocks/">Phoenix Wallet</a> to be
          installed on your computer. This payment method is more secure as you
          won't need to send your secret passphrase over the internet. The
          wallet signs the transactions locally.
        </div>
      </form>
    </>
  )
}
